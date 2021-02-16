import React, {useEffect, useState, useRef} from 'react';
import {Route, RouteComponentProps, Switch,
  useRouteMatch} from 'react-router-dom';
import * as Actions from 'src/data-layer/system/actionCreators';
import {connect} from 'react-redux';
import {Wrapper, PageHeader, Caption} from './style';
import BackButton from 'src/components/back-button';
import {Button} from '@openvtb/react-ui-kit';
import {IRouter, routes} from './routes';

interface StartPageProps {
  goBackAction: any
  pushAction: any
}

function InputReferenceWizard(props: StartPageProps) {
  const {path} = useRouteMatch();
  const routeRef = useRef<{ checkControls(): boolean }>(null);

  const {goBackAction, pushAction} = props;
  const [wizardData, setWizardData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const stepper = routes.map((route: IRouter, i: number) => {
    const stepId = i + 1;
    const label = `Шаг ${stepId}`;
    return {...route, stepId, label};
  });

  const backAction = () => {
    if (currentStep <= stepper.length) {
      setCurrentStep(currentStep - 1);
    }
    goBackAction().then(() => {
      if (currentStep === 1) {
        goBackAction();
      }
    });
  };

  useEffect(() => {
    pushAction(`${path}${stepper[0].path}`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pushAction]);

  return (
    <>
      <PageHeader>
        <BackButton onClick={backAction}/>
        <Caption>Новый справочник</Caption>
      </PageHeader>
      <Wrapper>
        <Switch>
          {routes.map((route: IRouter, i: number) => (
            <Route
              key={i}
              exact={route.exact}
              path={`${path}${route.path}`}
              render={(props: RouteComponentProps) => {
                return <route.component
                  {...props}
                  ref={routeRef}
                  stepper={stepper}
                  currentStep={currentStep}
                  wizardControls={{wizardData, setWizardData}}
                />;
              }}
            />
          ))}
        </Switch>
        <Button
          style={{position: 'absolute', bottom: '40px'}}
          kind="primary" size="small" type="button"
          onClick={() => {
            if (currentStep < stepper.length) {
              if (routeRef && routeRef.current.checkControls()) {
                return;
              }
              setCurrentStep(currentStep + 1);
              pushAction(`${path}${stepper[currentStep].path}`);
            } else {
              alert(`Будет сохранение...
              ${JSON.stringify(wizardData)}
              `);
              pushAction(`/`);
            }
          }}
        >{currentStep < stepper.length ? 'Продолжить' : 'Сохранить'}</Button>
      </Wrapper>
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    roles: state.roleReducer.roles || {data: {}},
    roleIsLoading: state.roleReducer.roleIsLoading || false
  };
};

export default connect(mapStateToProps, Actions)(InputReferenceWizard);
