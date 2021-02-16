import React from 'react';
import {ScrollBarWrapper} from './style';

interface IProps {
  minHeight?: string
  maxHeight?: string
  height?: string
  children: any
}

function ScrollBar(props: IProps) {
  return (
    <ScrollBarWrapper
      maxHeight={props.maxHeight}
      minHeight={props.minHeight}
      height={props.height}>
      {props.children}
    </ScrollBarWrapper>
  );
}

export default ScrollBar;
