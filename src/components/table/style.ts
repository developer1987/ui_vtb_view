import styled, {css} from 'styled-components';

export const TitleRow = styled.div`
  margin: auto 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
`;

export const RowRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SearchPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: right;
`;

export const Wrapper = styled.div`
  position: relative;
  min-width: 1136px; 
  margin: auto 24px;
  margin-bottom: 48px;
  padding: 24px;
  background: #ffffff;
  border: 1px solid #DCE0EB;
  border-radius: 4px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 10px;
  }    
  &::-webkit-scrollbar-track {
    background: #E7E7E7; 
  }  
  &::-webkit-scrollbar-thumb {
    background: #B4B4B4;
    border-radius: 5px; 
  }  
  &::-webkit-scrollbar-thumb:hover {
    background: #7E7E7E; 
  }
`;

export const Table = styled.table<{
    colSize: number,
  }>`
  ${({colSize}) => {
    colSize;
    return `
    grid-template-columns: repeat(${colSize}, max-content) auto;
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
  -webkit-touch-callout: none;
    -webkit-user-select: none; 
     -khtml-user-select: none; 
       -moz-user-select: none; 
        -ms-user-select: none; 
            user-select: none; 
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
  padding: 0 12px;
  &>div {    
    cursor: pointer;
  }
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
  width: .1rem;
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

export const RightPanel = styled.div`
  position: fixed;
  overflow-y: auto;
  top: 0;
  right: 0;
  padding: 24px;
  border: 1px solid #DCE0EB;
  box-shadow: 0px 0.6px 1.8px 
  rgba(0, 0, 0, 0.16), 0px 3.2px 7.2px rgba(0, 0, 0, 0.24);
  width: 972px;
  height: 100%;
  background: #FFFFFF;
  z-index: 32762;
`;

export const RightPanelHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
import {DEFAULT_THEME} from '@openvtb/react-ui-kit';

export const Button = styled.button<{svg: string}>`
  ${({theme, svg}) => css`
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    padding: 0;
    justify-content: flex-start;
    outline: none;

    & span {
      background-image: url(${svg});
      width: 20px;
      height: 20px;
      filter: invert(0%) sepia(4%)
      saturate(683%) hue-rotate(324deg) brightness(90%) contrast(72%);
    }

    &:focus {
      // border: 2px solid ${theme.color.primary[60]};
    }

    &:hover {
      // background: ${theme.color.neutral[20]};

      & span {
        filter: invert(27%) sepia(64%) 
    saturate(6802%) hue-rotate(215deg) brightness(106%) contrast(107%);
      }
    }

    &:active {
      // background: ${theme.color.neutral[30]};

      & div span {
        fill: ${theme.color.primary[60]};
      }
    }

    &:disabled {
      // background: ${theme.color.neutral[10]};
      cursor: default;

      & span {
        filter: invert(66%) sepia(8%)
        saturate(373%) hue-rotate(180deg) brightness(94%) contrast(88%);
      }
    }
  `};
`;

Button.defaultProps = {
  theme: DEFAULT_THEME,
};

export const SmallCaption = styled.h6`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  padding-left: 18px;
`;

export const AddCaption = styled.h6`
  margin-left: 12px;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: #979DA8;
`;

export const Nodata = styled.span`
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
`;

export const IconState = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 8px;
  position: static;
  width: auto;
  height: 28px;
  left: 244px;
  top: 0px;
  background: #32C665;
  border-radius: 4px;
  flex: none;
  order: 3;
  flex-grow: 0;
  margin: 0px 12px;
`;

export const TextState = styled.span`
position: static;
width: auto;
height: 20px;
left: 8px;
top: 4px;
font-family: VTB Group UI;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px
`;
