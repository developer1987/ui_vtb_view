/* eslint-disable max-len */
import React from 'react';
import {StateName, StateResultText, IconStateResult, StateLabel, Icon} from './style';
import {IAppTransition} from '../../data-layer/reference/types';
import {BlockView} from 'src/pages/start-page/ext-info/style';
import {TextInfo} from '../text-info';
import {Link} from '@openvtb/react-ui-kit';
import arrowRightIcon from
  '@openvtb/admiral-icons/build/system/ArrowRightOutline.svg';

interface ITransitionProps {
  transitionInfo: IAppTransition
}

export function StateInfo(props: ITransitionProps) {
  const {transitionInfo} = props;
  const {stateName, stateDate, stateResult,
    userFullName, comment} = transitionInfo;
  return (
    <>
      <BlockView>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{display: 'flex'}}><StateName>{stateName}</StateName>
            <IconStateResult>
              <StateResultText>{stateResult}</StateResultText>
            </IconStateResult>
          </div>
          <StateLabel>{stateDate}</StateLabel>
        </div>
        <div style={{display: 'flex'}}>
          <StateLabel>{userFullName}</StateLabel>
        </div>
        {comment &&
        <div style={{display: 'flex'}}>
          <TextInfo caption="Комментарий к текущему этапу">{comment}</TextInfo>
        </div>}
        <div>
          <Link
            size="small"
            href="#"
          >
            {'Сервис обработки'}
          </Link>
          <Icon svgUrl={arrowRightIcon}/>
        </div>
      </BlockView>
    </>
  );
}
