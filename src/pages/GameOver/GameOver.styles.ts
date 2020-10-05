import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  display: flex;
  height: 4rem;
  background: #FF8B37;
  border-radius: 0.875rem;
  border: unset;

  font-weight: 600;
  font-size: 1.375rem;
  line-height: 116%;

  justify-content: center;
  align-items: center;
  text-align: center;

  color: #FFFFFF;
  
  &:hover  {
    background: #FFAC70;
  }
  
  @media only screen and (min-device-width: 768px) {
    width: 50%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 0 1rem;
`;

export const Hand = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-self: center;
  text-wrap: normal;
`;

export const DefaultText = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  line-height: 116%;
  opacity: 0.5;

  display: flex;
  align-self: center;
  
  @media only screen and (min-device-width: 768px) {
    align-self: unset;
  }
`;

export const Text = styled.h1`
  display: flex;

  font-weight: 600;
  font-size: 3.5rem;
  line-height: 116%;

  color: #1C1C21;

  flex: none;
  order: 0;
  flex-grow: 0;
  white-space: pre;
  align-self: center;
  
  @media only screen and (min-device-width: 768px) {
    align-self: unset;
  }
`;
