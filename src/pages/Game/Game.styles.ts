import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #F5F5F7;
  
  @media only screen and (max-device-width: 768px) {
    flex-direction: column;
    height: unset;
    margin: unset;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  width: 70%;

  @media only screen and (max-device-width: 768px) {
    width: unset;
  }
`;

export const ButtonBox = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
  max-height: 100%;
`;

export const DefaultText = styled.h1`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin-left: 4rem;
  margin-top: 10rem;

font-weight: 600;
font-size: 2rem;
line-height: 116%;
`;

export const Text = styled.div`
  font-weight: 600;
  font-size: 3.5rem;
  line-height: 116%;

  display: flex;

  color: #1C1C21;
  flex: none;
  order: 0;
  flex-grow: 0;
  white-space: pre;
`;

export const StepContainer = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background: #FFFFFF;
`;
