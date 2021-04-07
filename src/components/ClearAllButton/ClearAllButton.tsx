import styled from 'styled-components';
import deleteIcon from '@openvtb/admiral-icons/build/system/DeleteOutline.svg';

export const ClearAllButton = styled.button.attrs({
  type: 'button',
  children: 'Очистить фильтры'
})`
  appearance: none;
  font: revert;
  padding: 0;
  background: none;
  border: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: none;

  &:before {
    content: ' ';
    display: inline-block;
    margin-right: 10px;
    width: 20px;
    height: 20px;
    background: no-repeat center url(${deleteIcon});
    filter: invert(52%) sepia(4%) saturate(789%) hue-rotate(185deg)
      brightness(94%) contrast(93%);
  }
`;
