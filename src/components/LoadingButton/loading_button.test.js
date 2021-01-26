import React from 'react';

import { render } from '@testing-library/react';

import {
  LoadingButton
} from './index';

test('Should add row the table de posts in document', () => {
  const { getByTestId } = render(
    <LoadingButton
      variant="contained"
      loading={ false }
    >
      Teste
    </LoadingButton>
  );

  expect( getByTestId('loading-button')).toBeInTheDocument();
});
