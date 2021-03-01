import {Spinner} from '@openvtb/react-ui-kit';
import React, {lazy, Suspense} from 'react';

const SuspenseSpinner = () => (
  <div style={{
    margin: '25% auto',
    display: 'flex',
    justifyContent: 'center'}}>
    <Spinner />
  </div>
);

const StartPage = lazy(() => import('src/pages/start-page'));
export const StartPageLazy = (props: any) => (
  <Suspense fallback={<SuspenseSpinner />}>
    <StartPage {...props} />
  </Suspense>
);
export interface IRouter {
  path: string;
  component: (props: any) => JSX.Element;
  routes?: IRouter[];
  exact?: boolean;
  stage?: boolean;
}
export const routes: IRouter[] = [
  {
    path: `/`,
    exact: true,
    component: StartPageLazy,
  }
];
