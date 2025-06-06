import { useMemo, useState } from 'react';

import { useDeepMemo } from '@utils/hooks/useDeepMemo';

import { useSearchParams } from '../hooks/useSearchParams';
import type { UserSettings } from '../Page/types';
import type { ResourceField } from '../utils/types';

import type { GlobalFilters } from './types';

/**
 * Safely parses a JSON string.
 * @param {string} jsonString - The JSON string to parse.
 * @returns {any} - The parsed JSON object or null if parsing fails.
 */
const safeParse = (str: string) => {
  try {
    return JSON.parse(str);
  } catch (_e) {
    return undefined;
  }
};

/**
 * Filters and validates the search parameters.
 * @param {Array} fields - The fields containing resourceFieldId.
 * @param {Object} searchParams - The search parameters to filter and validate.
 * @returns {Object} - An object with valid filters.
 */
const getValidFilters = (fields, searchParams) => {
  const validFilters = fields
    .map(({ resourceFieldId }) => {
      const params = safeParse(searchParams[`${resourceFieldId}`]);
      return { params, resourceFieldId };
    })
    // Valid filter values are arrays
    .filter(({ params }) => Array.isArray(params) && params.length)
    .map(({ params, resourceFieldId }) => [resourceFieldId, params]);

  return Object.fromEntries(validFilters);
};

/**
 * Converts filters to search parameters.
 * @param {Array} fields - The fields containing resourceFieldId.
 * @param {Object} filters - The filters to convert.
 * @returns {Object} - The search parameters.
 */
const convertFiltersToSearchParams = (fields, filters) => {
  const searchParams = fields
    .map(({ resourceFieldId }) => ({ filters: filters[resourceFieldId], resourceFieldId }))
    .map(({ filters, resourceFieldId }) => [
      resourceFieldId,
      Array.isArray(filters) && filters.length ? JSON.stringify(filters) : undefined,
    ]);

  return Object.fromEntries(searchParams);
};

/**
 * Sets the state and updates the URL search parameters.
 * @param {Function} setSelectedFilters - The function to set selected filters.
 * @param {Function} updateSearchParams - The function to update search parameters.
 * @param {Function} updateUserSettings - The function to update user settings.
 * @param {Array} persistentFieldIds - The persistent field IDs.
 * @returns {Function} - The function to set state and update URL.
 */
const createSetStateAndUrl = (
  setSelectedFilters,
  updateSearchParams,
  updateUserSettings,
  persistentFieldIds,
  fields,
) => {
  return (filters) => {
    if (updateUserSettings) {
      const persistentFilters = Object.fromEntries(
        Object.entries(filters || {}).filter(([key]) => persistentFieldIds.includes(key)),
      );
      updateUserSettings(persistentFilters);
    }
    setSelectedFilters(filters);
    updateSearchParams(convertFiltersToSearchParams(fields, filters));
  };
};

/**
 * Init and maintain a set of filters on the search part of the URL.
 *
 *  1. filters are displayed in the URL as URL-encoded JSON array of strings. The use of intermediate JSON encoding ensures that we can encode arbitrary data.
 *  2. params in the URL are parsed only during initialization, afterwards they are a read-only side effect
 *  3. the single source of truth is the internal filter state maintained by the hook
 *
 * @param fields list of supported fields(read-only meta-data)
 * @returns [selectedFilters, setSelectedFilters]
 */
export const useUrlFilters = ({
  fields: initialFields,
  userSettings,
}: {
  fields: ResourceField[];
  userSettings?: UserSettings;
}): [GlobalFilters, (filters: GlobalFilters) => void] => {
  const fields = useDeepMemo(initialFields);
  const [searchParams, setSearchParams] = useSearchParams();

  const persistentFieldIds = useMemo(
    () => fields.filter((field) => field?.isPersistent).map((field) => field.resourceFieldId),
    [fields],
  );

  const initialFilters = useMemo(() => {
    const initialFieldIds = fields
      .filter((field) => field?.isPersistent)
      .map((field) => field.resourceFieldId);

    const persistentFilters = Object.fromEntries(
      Object.entries(userSettings?.filters?.data ?? {}).filter(([key]) =>
        initialFieldIds.includes(key),
      ),
    );

    return {
      ...persistentFilters,
      ...getValidFilters(fields, searchParams),
    };
  }, [fields, searchParams, userSettings?.filters?.data]);

  const [selectedFilters, setSelectedFilters] = useState(initialFilters);
  const updateUserSettings = userSettings?.filters?.save;
  const updateSelectedFilters = useDeepMemo(setSelectedFilters);
  const updateSearchParams = useDeepMemo(setSearchParams);

  const setStateAndUrl = useMemo(
    () =>
      createSetStateAndUrl(
        updateSelectedFilters,
        updateSearchParams,
        updateUserSettings,
        persistentFieldIds,
        fields,
      ),
    [updateSelectedFilters, updateSearchParams, updateUserSettings, persistentFieldIds, fields],
  );

  return [selectedFilters, setStateAndUrl];
};
