import styled from 'styled-components';

export const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  z-index: 100;
`;

export const SmallCaption = styled.h6`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
`;

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 48px;
  background: #ffffff;
  z-index: 99;
`;

export const Table = styled.table<{
    colSize: number,
  }>`
  ${({colSize}) => {
    colSize++;
    return `
    grid-template-columns: repeat(${colSize}, ${(1/colSize)-0.001}fr);
  `;
  }}  
  width: 100%;
  -webkit-box-flex: 1;
          flex: 1;
  display: grid;
  border-collapse: collapse;
`;

export const THead = styled.thead`
  display: contents;
  width: 100%;
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  &>tr>th {    
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #BCC0C8;
  }
`;

export const THeadColumn = styled.th`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: #FFFFFF;
  text-align: left;
  position: relative;

  width: 100%;
  // min-width: fit-content;
  max-width: 100%;
  left: 0;
  padding-left: 12px;
  cursor: pointer;

`;

export const TBody = styled.tbody`
  display: contents;  
  font-size: 13px;
  line-height: 16px;
  color: #21242C;
  &>tr>td {
    padding-bottom: 23px;    
    border-bottom: 1px solid #BCC0C8;
  }
`;

export const TRow = styled.tr`
  display: contents;
  min-width: fit-content;
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid #BCC0C8;
  &>th:nth-last-child(2) > span {
    display: none;
  }
`;

export const TRowColumn = styled.td`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-bottom: 10px;
  width: auto;  
  padding: 8px 12px;
  &:hover {
    overflow: visible;
    white-space: unset;
  }
`;

export const ResizeHandle = styled.span`
  position: absolute;
  top: 20%;
  right: 0;
  bottom: 20%;
  background: #BCC0C8;
  width: 1px;
  cursor: col-resize;
`;

export const Icon = styled.span<{
  svgUrl: string,
}>`
${({svgUrl}) => {
    return `
    background-image: url(${svgUrl});
`;
  }}
  background-size: cover;
  margin-right: 12px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  color: blue;
  filter: invert(50%) 
    sepia(3%) saturate(1025%) hue-rotate(186deg) brightness(98%) contrast(82%);
  &:active {
    filter: invert(27%) sepia(64%) 
    saturate(6802%) hue-rotate(215deg) brightness(106%) contrast(107%);
  }
`;
