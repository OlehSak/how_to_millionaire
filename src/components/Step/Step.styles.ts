import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 7%;
`;

export const Text = styled.div<{color: string}>`
  position: relative;
  font-size: 1.25rem;
  line-height: 116%;
  padding-bottom: 2%;
  display: flex;
  justify-content: center;
  color: ${(props):string => (props.color)}
`;

export const Img = styled.img`
  position: fixed;
  max-width: 100%;
  max-height: 100%;
`;
