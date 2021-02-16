import styled, {css} from 'styled-components';
import {DEFAULT_THEME} from '@openvtb/react-ui-kit';

const SIZE = 40;

export const Button = styled.button<{svg: string}>`
  ${({theme, svg}) => css`
    align-items: center;
    background: transparent;
    border-radius: ${theme.borderRadius};
    border: 2px solid ${theme.color.primary[60]};
    cursor: pointer;
    display: flex;
    height: ${SIZE}px;
    justify-content: center;
    outline: none;
    width: ${SIZE}px;

    & span {
      background-image: url(${svg});
      width: 20px;
      height: 20px;
      filter: invert(27%) sepia(64%) 
    saturate(6802%) hue-rotate(215deg) brightness(106%) contrast(107%);
    }

    &:focus {
      // border: 2px solid ${theme.color.primary[60]};
    }

    &:hover {
      background: ${theme.color.neutral[20]};

      & span {
        filter: invert(27%) sepia(64%) 
    saturate(6802%) hue-rotate(215deg) brightness(106%) contrast(107%);
      }
    }

    &:active {
      background: ${theme.color.neutral[30]};

      & div span {
        fill: ${theme.color.primary[60]};
      }
    }

    &:disabled {
      background: ${theme.color.neutral[10]};
      cursor: default;

      & span {
        fill: ${theme.color.neutral[30]};
      }
    }
  `};
`;

Button.defaultProps = {
  theme: DEFAULT_THEME,
};

