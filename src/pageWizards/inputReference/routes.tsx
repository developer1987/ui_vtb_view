import {Spinner} from '@openvtb/react-ui-kit';
import React, {forwardRef, lazy, Suspense} from 'react';

const SuspenseSpinner = () => (
  <div style={{
    margin: '25% auto',
    display: 'flex',
    justifyContent: 'center'}}>
    <Spinner />
  </div>
);

const AddReferencePage = lazy(() => import('src/pages/add-reference'));
export const AddReferencePageLazy = forwardRef((props: any, ref: any) => (
  <Suspense fallback={<SuspenseSpinner />}>
    <AddReferencePage {...props} routeRef={ref}/>
  </Suspense>
));

const AddReferenceItemsPage = lazy(() =>
  import('src/pages/add-reference-items'));
export const AddReferenceItemsPageLazy = forwardRef((props: any, ref: any) => {
  return (
    <Suspense fallback={<SuspenseSpinner />}>
      <AddReferenceItemsPage {...props} routeRef={ref}/>
    </Suspense>
  );
});

export interface IRouter {
  path: string;
  component: (props: any, ref: any) => JSX.Element;
  routes?: IRouter[];
  exact?: boolean;
  stage?: boolean;
}
export const routes: IRouter[] = [
  {
    path: `/add-reference`,
    exact: true,
    component: AddReferencePageLazy,
  },
  {
    path: `/add-reference-items`,
    exact: true,
    component: AddReferenceItemsPageLazy,
  }
];
