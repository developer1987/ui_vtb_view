import React from 'react';
import {RightPanel, RightPanelHeader, Button, SmallCaption,
  IconState, TextState} from './style';
import leftArrowIcon from
  '@openvtb/admiral-icons/build/system/ChevronLeftOutline.svg';
import rightArrowIcon from
  '@openvtb/admiral-icons/build/system/ChevronRightOutline.svg';
import closeIcon from
  '@openvtb/admiral-icons/build/service/CloseOutline.svg';
import ScrollBar from 'src/components/scroll-bar';
interface PanelProps {
  params: any
  setParams: any
  setCurrentApplication: any
  data: any
  extendedInfo: any
}

function RPanel(props: PanelProps) {
  const {params, setParams, setCurrentApplication, data=[],
    extendedInfo} = props;
  const {show=false, index} = params;
  const row = data[index];
  return (
    show && <RightPanel>
      <ScrollBar height={`calc(100vh - ${40}px)`}>
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
                  setCurrentApplication(data[index-1].number);
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
                  setCurrentApplication(data[index+1].number);
                }
              }}
              svg={rightArrowIcon}
            >
              <span />
            </Button>
            <SmallCaption>Заявка №{row.number}</SmallCaption>
            <IconState><TextState>{row.stateName}</TextState></IconState>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            width: '20px',
            height: '28px',
            justifyContent: 'space-between',
            marginRight: '20px'}}>
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
      </ScrollBar>
    </RightPanel>
  );
}

export default RPanel;
