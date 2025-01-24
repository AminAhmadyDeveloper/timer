import { Fragment } from 'react/jsx-runtime';

import { MainPage } from '@/pages/main/main-page';
import { StylesProvider } from '@/providers/styles-provider';

export const App = () => {
  return (
    <Fragment>
      <StylesProvider />
      <MainPage />
    </Fragment>
  );
};
