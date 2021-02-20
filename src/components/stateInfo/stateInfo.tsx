/* eslint-disable max-len */
import React from 'react';
import {StateName, IconStateResult, StateLabel, Icon} from './style';
import {IAppTransition} from '../../data-layer/reference/types';
import {BlockView} from 'src/pages/start-page/ext-info/style';
import {TextInfo} from '../text-info';
import {Link} from '@openvtb/react-ui-kit';
import cn from 'classnames';
const styles = require('./style.css');
import arrowRightIcon from
  '@openvtb/admiral-icons/build/system/ArrowRightOutline.svg';

interface ITransitionProps {
  transitionInfo: IAppTransition
}

export function StateInfo(props: ITransitionProps) {
  const {transitionInfo} = props;
  const {stateName, stateDate, stateResult,
    userFullName, comment} = transitionInfo;
  const colorStage = cn({
    iconState: true,
    [styles.done]: !!(stateResult=='Выполнено'),
    [styles.decline]: !!(stateResult=='Отклонить'),
    [styles.error]: !!(stateResult=='Ошибка'),
  });

  return (
    <>
      <BlockView>
        <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '16px'}}>
          <div style={{display: 'flex'}}>
            <StateName style={{marginRight: '8px', marginLeft: '8px'}}>{stateName}</StateName>
            <IconStateResult className={colorStage}>
              {stateResult}
            </IconStateResult>
          </div>
          <StateLabel style={{marginRight: '20px'}}>{stateDate}</StateLabel>
        </div>
        <div style={{display: 'flex', marginLeft: '8px'}}>
          <StateLabel>{userFullName}</StateLabel>
        </div>
        {comment &&
        <div style={{display: 'flex', marginLeft: '8px', marginTop: '16px'}}>
          <TextInfo caption="Комментарий к текущему этапу">{comment}</TextInfo>
        </div>}
        <div style={{marginLeft: '8px', marginTop: '16px', alignItems: 'center'}}>
          <Link
            size="small"
            href="#"
            style={{color: '#0062FF'}}
          >
            {'Сервис обработки'}
          </Link>
          <Icon style={{display: 'inline-block', verticalAlign: 'bottom'}} svgUrl={arrowRightIcon}/>
        </div>
      </BlockView>
    </>
  );
}
