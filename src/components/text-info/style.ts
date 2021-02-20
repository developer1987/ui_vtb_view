import styled from 'styled-components';

export const TextRow = styled.div`
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  &::before {
    content: attr(data-caption);
    display: block;
    font-weight: 600;
    line-height: 20px;
    color: #555A65;
    padding-bottom: 4px;
  }
`;

