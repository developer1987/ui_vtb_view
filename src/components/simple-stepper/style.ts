import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
`;

export const Text = styled.div<{isActive?: boolean
}>`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  ${({isActive}) => `
    color: ${isActive+'' === 'true' ? '#0062FF' : '#C1C1C1'}
  `}
`;
