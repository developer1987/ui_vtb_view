import React from 'react';
import {IAppTransition} from 'src/data-layer/reference/types';
import {StateInfo} from 'src/components/stateInfo';

interface AppTransitionProps {
  appTransition: IAppTransition[]
}

function AppTransition(params: AppTransitionProps) {
  const {appTransition} = params;
  return (
    <>
      <div>
        {
          appTransition && appTransition.map((item, i) => {
            return <StateInfo transitionInfo={item} key={i}/>;
          })
        }
      </div>
    </>
  );
}

export default AppTransition;
