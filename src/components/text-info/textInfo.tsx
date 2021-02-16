import React from 'react';
import {TextRow} from './style';

export interface TextInfoProps {
  caption: string
  children: string
}

export function TextInfo(props: TextInfoProps) {
  const {children, caption} = props;
  return (
    <>
      <TextRow data-caption={caption}>{children || 'Нет данных'}</TextRow>
    </>
  );
}
