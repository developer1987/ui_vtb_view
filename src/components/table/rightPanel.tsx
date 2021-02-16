import React from 'react';
import {RightPanel, RightPanelHeader, Button, SmallCaption,
  IconState, TextState} from './style';
import leftArrowIcon from
  '@openvtb/admiral-icons/build/system/ChevronLeftOutline.svg';
import rightArrowIcon from
  '@openvtb/admiral-icons/build/system/ChevronRightOutline.svg';
import closeIcon from
  '@openvtb/admiral-icons/build/service/CloseOutline.svg';
interface PanelProps {
  params: any
  setParams: any
  data: any
  edit: any
  extendedInfo: any
}

function RPanel(props: PanelProps) {
  const {params, setParams, data=[], edit, extendedInfo} = props;
  const {show=false, index} = params;
  const row = data[index];
  return (
    show && <RightPanel>
      <RightPanelHeader>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '35px'}}>
          <Button
            disabled={index <= 0}
            onClick={() => {
              if (index > 0) {
                setParams({...params, index: index-1});
              }
            }}
            svg={leftArrowIcon}
          >
            <span />
          </Button>
          <Button
            style={{paddingLeft: '20px'}}
            disabled={index >= data.length - 1}
            onClick={() => {
              if (index < data.length - 1) {
                setParams({...params, index: index+1});
              }
            }}
            svg={rightArrowIcon}
          >
            <span />
          </Button>
          <SmallCaption>Заявка №{row.number}</SmallCaption>
          <IconState><TextState>{row.state}</TextState></IconState>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          width: '20px',
          height: '28px',
          justifyContent: 'space-between'}}>
          <Button
            disabled={false}
            onClick={() => setParams({show: false})}
            svg={closeIcon}
          >
            <span />
          </Button>
        </div>
      </RightPanelHeader>
      {extendedInfo(row)}
    </RightPanel>
  );
}

export default RPanel;
