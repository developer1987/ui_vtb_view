import React from 'react';
import {Text, Wrapper} from './style';

type Step = {
  label: string
  stepId: number
}

interface IProps {
  currentStep: number
  items: Step[]
}

function SimpleStepper(props: IProps) {
  const {items, currentStep} = props;
  return (
    <Wrapper>
      <Text isActive={true}>{`Шаг ${currentStep}`}</Text>
      &nbsp;
      <Text>{`из ${items.length}`}</Text>
    </Wrapper>
  );
}

export default SimpleStepper;
