import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 7%;
  align-items: center;
`;

export const Text = styled.div<{color: string}>`
  position: absolute;
  font-size: 1.375rem;
  display: flex;
  justify-content: center;
  color: ${(props):string => (props.color)}
`;

export const Img = styled.img`
  max-width: 100%;
`;
