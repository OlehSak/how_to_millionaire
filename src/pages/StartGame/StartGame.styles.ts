import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right bottom, white 50%, #FFF3EB 50%);
  
  @media only screen and (max-device-width: 768px) {
    flex-direction: column;
    height: unset;
    margin: unset;
  }
`;

export const Button = styled.button`
  display: flex;
  height: 4rem;
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

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 0 1rem;
  width: 50%;

  @media only screen and (max-device-width: 768px) {
    width: unset;
  }
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
  padding: 0;
  text-wrap: normal;
`;

export const Text = styled.div`
/* Desktop / Headline */

  font-family: Inter,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 56px;
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
  padding-bottom: 4rem;
`;
