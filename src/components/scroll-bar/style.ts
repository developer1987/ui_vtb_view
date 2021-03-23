import styled from 'styled-components';

export const ScrollBarWrapper = styled.div<
  {
    minHeight: string;
    maxHeight: string;
    height: string;
  }>`
  ${({minHeight, maxHeight, height}) => `
    min-height: ${minHeight};
    max-height: ${maxHeight};
    height: ${height};
  `}
  //border: 1px solid #0062FF;
  overflow-y: auto;
  overflow-x: hidden;
  
  &::-webkit-scrollbar {
    width: 10px;
  }    
  &::-webkit-scrollbar-track {
    background: #E7E7E7; 
  }  
  &::-webkit-scrollbar-thumb {
    background: #97A9BE;
    border-radius: 5px; 
  }  
  &::-webkit-scrollbar-thumb:hover {
    background: #97A7BC; 
  }
  &::-webkit-scrollbar-track-piece {
    background: #FFFFFF;
  }
`;
