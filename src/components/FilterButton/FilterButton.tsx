import styled from 'styled-components';
import filterIcon from '@openvtb/admiral-icons/build/system/FilterOutline.svg';

export const FilterButton = styled.button.attrs({
  type: 'button',
  children: 'Фильтры'
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
    background: no-repeat center url(${filterIcon});
    filter: invert(52%) sepia(4%) saturate(789%) hue-rotate(185deg)
      brightness(94%) contrast(93%);
  }
`;
