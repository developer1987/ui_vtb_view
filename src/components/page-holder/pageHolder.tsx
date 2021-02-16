import React, {useImperativeHandle} from 'react';
import {PanelHeader, SmallCaption, Holder} from './style';
import SimpleStepper from 'src/components/simple-stepper';

interface PageHolderProps {
  stepper: any
  caption: string
  currentStep: any
  routeRef: any
  requiredControls: string[]
  children: any
  pageParams: any
  setControlErrors: any
}

export default function PageHolder(props: PageHolderProps) {
  const {caption, stepper, currentStep, routeRef, requiredControls,
    children, pageParams, setControlErrors} = props;

  useImperativeHandle(routeRef, () => ({
    checkControls() {
      return checkRequiredControls(requiredControls);
    }
  }));

  const checkRequiredControls = (controls: string[]) => {
    const errorControls: any = {};
    let hasErrors = false;
    controls.forEach((control) => {
      if (!pageParams ||
        pageParams[control] === '' || pageParams[control] === undefined) {
        errorControls[control] = 'error';
        hasErrors = true;
      } else {
        errorControls[control] = 'default';
      }
    });
    setControlErrors(errorControls);
    return hasErrors;
  };

  return (
    <Holder>
      <PanelHeader>
        <SmallCaption>{caption}</SmallCaption>
        <SimpleStepper
          currentStep={currentStep}
          items={stepper}
        />
      </PanelHeader>
      {children}
    </Holder>
  );
}
