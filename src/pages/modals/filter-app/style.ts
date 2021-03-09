import styled from 'styled-components';
import {RadioGroup} from '@openvtb/react-ui-kit';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioLabel = styled.div`
  display: flex;
  height: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  font-feature-settings: 'cv03' on, 'cv04' on;
  color: #666B77;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-bottom: 16px;
`;

export const StyledRadioGroup = styled(RadioGroup)`
  flex-direction: row;
  padding-left: 5px;
`;
