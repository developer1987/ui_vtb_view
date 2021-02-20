import styled from 'styled-components';

export const StateName = styled.div`
  position: static;
  width: auto;
  height: 24px;
  left: 0px;
  top: 0px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  font-feature-settings: 'cv04' on, 'cv03' on;
  color: #21242C;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 16px;
`;

export const StateLabel = styled.div`
  position: static;
  width: auto;
  height: 24px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  font-feature-settings: 'cv03' on, 'cv04' on;
  color: #555A65;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`;

export const StateResultText = styled.div`
  position: static;
  width: auto;
  height: 16px;
  left: 8px;
  top: 0px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  text-align: center;
  line-height: 16px;
  letter-spacing: 0.02em;
  font-feature-settings: 'cv03' on, 'cv04' on;
  color: #21242C;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
`;

export const IconStateResult = styled.div<{backgroundIcon?: string}>`
  padding: 4px 8px;
  position: static;
  width: auto;
  height: 24px;
  top: 0px;
  border-radius: 12px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  text-align: center;
  line-height: 16px;
  letter-spacing: 0.02em;
  font-feature-settings: 'cv03' on, 'cv04' on;
  color: #21242C;
  flex: none;
`;

export const AppActionLink = styled.div`
  position: static;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  font-feature-settings: 'cv03' on, 'cv04' on;
  color: #0062FF;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
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
  margin-left: 12px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  color: blue;
  filter: invert(26%) 
    sepia(100%) saturate(3991%) hue-rotate(213deg) brightness(100%) contrast(107%);  
  &:active {
    filter: invert(27%) sepia(64%) 
    saturate(6802%) hue-rotate(215deg) brightness(106%) contrast(107%);
  }
`;

