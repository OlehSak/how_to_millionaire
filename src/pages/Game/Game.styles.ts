import styled from 'styled-components';
import HiddenButton from '../../components/HiddenButton';

export const Background = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #F5F5F7;
`;

export const MobileBackground = styled(Background)`
  flex-direction: column;
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
  display: flex;
  flex-direction: column;
  height: 50%;
`;

export const MobileButtonBox = styled(ButtonBox)`
`;

export const DefaultText = styled.h1`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin: 2rem;
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

export const MobileStepContainer = styled(StepContainer)`
  width: 100%;
  height: 100%;
  padding-top: 3rem;
  background: #F5F5F7;
`;

export const MHiddenButton = styled(HiddenButton)`
  position: absolute;
  align-self: end;
  width: 100%;
  right: 0;
  top: 0;
`;

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  &.mobileButtons {
      padding-bottom: unset;
  }
`;
