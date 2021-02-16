import React from 'react';
import {Caption} from './style';
const styles = require('./style.css');
import {Accordion} from '@openvtb/react-ui-kit';
import {TextInfo} from 'src/components/text-info';
import {Row, Col} from 'src/components/layout';

interface RefHistoryProps {
  id?: number
  sysname?: string
  description?: string
}

function RefHistory(params: RefHistoryProps) {
  return (
    <>
      RefHistory
    </>
  );
}

export default RefHistory;
