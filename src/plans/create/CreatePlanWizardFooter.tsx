import type { FC, MouseEvent } from 'react';
import { useHistory } from 'react-router';
import { getResourceUrl } from 'src/modules/Providers/utils/helpers/getResourceUrl';

import { PlanModelRef } from '@kubev2v/types';
import { useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
import {
  Button,
  ButtonVariant,
  useWizardContext,
  type WizardFooterProps,
  WizardFooterWrapper,
} from '@patternfly/react-core';
import { useForkliftTranslation } from '@utils/i18n';

import { useCreatePlanFormContext } from './hooks/useCreatePlanFormContext';
import { PlanWizardStepId } from './constants';

type CreatePlanWizardFooterProps = Partial<Pick<WizardFooterProps, 'nextButtonText' | 'onNext'>> & {
  hasError?: boolean;
  isLoading?: boolean;
};

const CreatePlanWizardFooter: FC<CreatePlanWizardFooterProps> = ({
  hasError,
  isLoading,
  nextButtonText,
  onNext: onSubmit,
}) => {
  const history = useHistory();
  const { t } = useForkliftTranslation();
  const [activeNamespace] = useActiveNamespace();
  const { trigger } = useCreatePlanFormContext();
  const { activeStep, goToNextStep, goToPrevStep, goToStepById } = useWizardContext();
  const canSkipToReview =
    activeStep.id === PlanWizardStepId.MigrationType ||
    activeStep.id === PlanWizardStepId.OtherSettings;

  const onStepSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    if (onSubmit) {
      return onSubmit(event);
    }

    return trigger(undefined, { shouldFocus: true });
  };

  const onNextClick = async (event: MouseEvent<HTMLButtonElement>) => {
    const isValid = await onStepSubmit(event);

    if (isValid) {
      await goToNextStep();
    }
  };

  const onSkipToReviewClick = async (event: MouseEvent<HTMLButtonElement>) => {
    const isValid = await onStepSubmit(event);

    if (isValid) {
      goToStepById(PlanWizardStepId.ReviewAndCreate);
    }
  };

  const onCancel = () => {
    const plansListURL = getResourceUrl({
      namespace: activeNamespace,
      reference: PlanModelRef,
    });

    history.push(plansListURL);
  };

  return (
    <WizardFooterWrapper>
      <Button
        variant={ButtonVariant.secondary}
        onClick={goToPrevStep}
        isDisabled={hasError ?? (activeStep.id === PlanWizardStepId.General || isLoading)}
      >
        {t('Back')}
      </Button>
      <Button
        variant={ButtonVariant.primary}
        onClick={onNextClick}
        isDisabled={hasError ?? isLoading}
        isLoading={isLoading}
      >
        {nextButtonText ?? t('Next')}
      </Button>
      {canSkipToReview && (
        <Button variant={ButtonVariant.tertiary} onClick={onSkipToReviewClick}>
          {t('Skip to review')}
        </Button>
      )}
      <Button variant={ButtonVariant.link} onClick={onCancel}>
        {t('Cancel')}
      </Button>
    </WizardFooterWrapper>
  );
};

export default CreatePlanWizardFooter;
