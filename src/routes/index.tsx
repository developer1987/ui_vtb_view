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

const InputReferencePage = lazy(() => import('src/pageWizards/inputReference'));
export const InputReferencePageLazy = (props: any) => (
  <Suspense fallback={<SuspenseSpinner />}>
    <InputReferencePage {...props} />
  </Suspense>
);

const RolesPage = lazy(() => import('src/pages/roles-page'));
export const RolesPageLazy = (props: any) => (
  <Suspense fallback={<SuspenseSpinner />}>
    <RolesPage {...props} />
  </Suspense>
);

const AddRolePage = lazy(() => import('src/pages/add-role'));
export const AddRolePageLazy = (props: any) => (
  <Suspense fallback={<SuspenseSpinner />}>
    <AddRolePage {...props} />
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
  },
  {
    path: `input-reference`,
    // exact: true,
    component: InputReferencePageLazy,
  },
  {
    path: `roles-reference`,
    exact: true,
    component: RolesPageLazy,
  },
  {
    path: `add-role`,
    exact: true,
    component: AddRolePageLazy,
  }
];
