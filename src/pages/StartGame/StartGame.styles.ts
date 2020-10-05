import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right bottom, white 50%, #FFF3EB 50%);
`;

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 0 1rem;
  justify-content: center;
`;

export const Hand = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.div`
  display: flex;

  font-weight: 600;
  font-size: 2rem;
  line-height: 116%;

  color: #1C1C21;
  
  flex: none;
  order: 0;
  flex-grow: 0;
  white-space: pre;
  padding-bottom: 4rem;
  align-self: center;
  
  @media only screen and (min-device-width: 768px) {
    font-size: 3.5rem;
    align-self: unset;
  }
`;
