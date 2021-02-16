import styled from 'styled-components';

export const PageHeader = styled.div`
  margin: auto 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 20px;  
  min-width: 1136px;
  z-index: 100;
`;

export const Caption = styled.h4`
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  margin-left: 24px;  
`;

export const Wrapper = styled.div`
  position: relative;
  min-width: 1136px;
  min-height: 560px;
  // height: calc(100vh - 76px - 48px - 48px);
  margin: auto 24px;
  margin-bottom: 48px;
  padding: 24px;
  padding-bottom: 40px;
  background: #ffffff;
  border: 1px solid #DCE0EB;
  border-radius: 4px;
  z-index: 99;
`;

export const View = styled.div`
  width: 50%;
  &>div {
    padding-top: 24px;
  }
  height: calc(100% - 64px);
  padding-bottom: 24px;
`;
