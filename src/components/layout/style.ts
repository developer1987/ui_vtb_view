import styled from 'styled-components';

export const RowLayout = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding-top: 24px;
  &>div:last-child(n + 1) {
    padding-right: 0;
  }
  &>div:first-child {
    padding-left: 0;
  }
`;

export const ColLayout = styled.div<{col?: number
}>`
  ${({col = 12}) => `
    width: calc(${col/12} * 100%);
  `}
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
`;

