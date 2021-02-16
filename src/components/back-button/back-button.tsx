import React from 'react';
import {Button} from './style';
import goBackIcon from
  '@openvtb/admiral-icons/build/system/ChevronLeftOutline.svg';

interface IProps {
  onClick: any
}

function BackButton(props: IProps) {
  const {onClick} = props;
  return (
    <>
      <Button
        disabled={false}
        onClick={() => onClick(1)}
        onMouseDown={() => console.log('sad')}
        svg={goBackIcon}
      >
        <span />
      </Button>
    </>
  );
}

export default BackButton;
