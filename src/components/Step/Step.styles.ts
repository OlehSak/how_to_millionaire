import styled from 'styled-components';

export const Component = styled.div`
`;

export const Text = styled.div`
  position: relative;
  width: 100%;
  top: calc(-50% - (1.25rem/4));
  //top: calc(-50% - 23px/2 - 0.5px);
  font-family: Inter,serif;
font-style: normal;
font-weight: normal;
font-size: 1.25rem;
line-height: 116%;

color: #D0D0D8;
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const VectorLeft = styled.img`
  position: relative;

  max-width: 100%;
  max-height: 100%;
  top: calc(50% - 0px/2);
`;

export const VectorRight = styled.img`
  position: relative;

  max-width: 100%;
  max-height: 100%;
  top: calc(50% - 0px/2);
`;
