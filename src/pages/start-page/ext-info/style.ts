import styled from 'styled-components';

export const Caption = styled.div`
  font-size: 18px;
  font-family: VTB Group UI;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  height: 24px;
  margin-top: 24px;
  font-feature-settings: 'tnum' on, 'lnum' on, 'cv04' on, 'cv03' on;
  color: #22242A;
`;

export const BlockView = styled.div` 
  display: block;
  flex-direction: row;
  padding: 0px 24px 22px 24px;
  position: static;
  width: auto;
  border-radius: 4px;
  border-color: #d6d8de;
  border-style: solid;
  border-width: thin;
  flex: none;
  order: 3;
  flex-grow: 0;
  margin: 0px 0px 16px 0px;
`;
