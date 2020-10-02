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

export const Button = styled.button`
  display: flex;
  height: 64px;
  background: #FF8B37;
  border-radius: 12px;
  width: 25%;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 116%;
/* or 23px */

  justify-content: center;
  align-items: center;
  text-align: center;

  color: #FFFFFF;
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
  max-width: 100%;
  max-height: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-self: center;
  padding: 0;
  text-wrap: normal;
`;

export const Text = styled.div`
/* Desktop / Headline */

  font-family: Inter,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 3.5rem;
  line-height: 116%;
/* or 65px */

  display: flex;

/* Black-100 */

  color: #1C1C21;

/* Inside Auto Layout */

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
  justify-content: right;
  background: #FFFFFF;
`;
