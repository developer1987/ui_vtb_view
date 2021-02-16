import React from 'react';
import {RowLayout, ColLayout} from './style';

interface RowProps {
  children: any
  style?: any
}

interface ColProps {
  children?: any
  col?: number
  style?: any
}

export function Row(props: RowProps) {
  const {children, style} = props;
  return (
    <RowLayout style={style}>{children}</RowLayout>
  );
}

export function Col(props: ColProps) {
  const {children, col, style} = props;
  return (
    <ColLayout col={col} style={style}>{children}</ColLayout>
  );
}
