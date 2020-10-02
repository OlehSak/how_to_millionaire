import React from 'react';

import {
  LeftContainer,
  Background,
  StepContainer,
  TextContainer,
  ButtonBox,
} from './Game.styles';

import Step from '../../components/Step';
import AnswerButton from '../../components/AnswerButton';

export interface StartGameProps {
  onClick: (e: React.MouseEvent) => void
  onAnswer: (e: number) => void
  answerArray?: string[]
}

function Game({ onAnswer, onClick, answerArray }: StartGameProps):JSX.Element {
  return (
    <Background>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={onClick}>System</button>
      <LeftContainer>
        <TextContainer />
        <ButtonBox>
          {answerArray?.map((value, index):JSX.Element => (
            <AnswerButton
              onClick={onAnswer}
              answer={value}
              number_answer={index}
            />
          ))}
        </ButtonBox>
      </LeftContainer>
      <StepContainer>
        <Step value="$1000000" />
        <Step value="$500000" />
        <Step value="$250000" />
        <Step value="$125000" />
        <Step value="$64000" />
        <Step value="$32000" />
        <Step value="$16000" />
        <Step value="$8000" />
        <Step value="$4000" />
        <Step value="$2000" />
        <Step value="$1000" />
        <Step value="$500" />
      </StepContainer>
    </Background>
  );
}

export default Game;
