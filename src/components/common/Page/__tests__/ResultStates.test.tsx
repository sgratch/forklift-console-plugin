import { cleanup, fireEvent, render } from '@testing-library/react';

import { NoResultsMatchFilter } from '../PageStates';

afterEach(cleanup);

test('NoResultsMatchFilter', () => {
  const clear = jest.fn();
  const { asFragment, getByRole } = render(<NoResultsMatchFilter clearAllFilters={clear} />);
  const firstRender = asFragment();

  expect(firstRender).toMatchSnapshot();

  fireEvent.click(getByRole('button'));

  expect(clear).toBeCalledTimes(1);
});
