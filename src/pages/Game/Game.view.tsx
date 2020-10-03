import React, { useState, useEffect } from 'react';

import {
  LeftContainer,
  Background,
  StepContainer,
  DefaultText,
  ButtonBox,
} from './Game.styles';

import Step from '../../components/Step';
import AnswerButton from '../../components/AnswerButton';

export interface StartGameProps {
  onClick: (e: React.MouseEvent) => void
  onAnswer: (e: number) => void
  answerArray?: string[]
  stepArray?: number[]
  numberOfQuestion: number
  question: string
}

const CalculateColor = (index: number, number: number):string => {
  const retColor = '1C1C21';

  if (index === number) return '#FF8B37';
  if (index <= number) return '#D0D0D8';
  return (retColor);
};

// eslint-disable-next-line no-undef
const getWidth = ():number => window.innerWidth
  // eslint-disable-next-line no-undef
  || document.documentElement.clientWidth
  // eslint-disable-next-line no-undef
  || document.body.clientWidth;

// eslint-disable-next-line no-undef
const getHeight = ():number => window.innerHeight
  // eslint-disable-next-line no-undef
  || document.documentElement.clientHeight
  // eslint-disable-next-line no-undef
  || document.body.clientHeight;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function useCurrentWitdh():boolean {
  const [width, setWidth] = useState(getWidth());
  const [height, setHeight] = useState(getHeight());

  useEffect(() => {
    let timeoutId: number | null = null;
    const resizeListener = ():void => {
      // @ts-ignore
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
      timeoutId = setTimeout(() => setHeight(getHeight()), 150);
    };
    // eslint-disable-next-line no-undef
    window.addEventListener('resize', resizeListener);

    return ():void => {
      // eslint-disable-next-line no-undef
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return height <= width;
}

function Game({
  onAnswer,
  onClick,
  stepArray,
  answerArray,
  numberOfQuestion,
  question,
}: StartGameProps):JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [openSteps, setOpenSteps] = React.useState<boolean>(true);
  // setOpenSteps(useCurrentWitdh);
  return (
    <Background>
      <LeftContainer>
        <DefaultText>{question}</DefaultText>
        <ButtonBox>
          {answerArray?.map((value, index):JSX.Element => (
            <AnswerButton
              key={value + index}
              onClick={onAnswer}
              answer={value}
              number_answer={index}
            />
          ))}
        </ButtonBox>
      </LeftContainer>
      {openSteps
      && (
        // eslint-disable-next-line react/button-has-type
        <button onClick={onClick}>System</button>
      )}
      {openSteps
      && (
        <StepContainer>
          {stepArray?.map((value, index):JSX.Element => (
            <Step
              key={value + index}
              value={value}
              active={numberOfQuestion === index}
              color={CalculateColor(index, numberOfQuestion)}
            />
          )).reverse()}
        </StepContainer>
      )}
    </Background>
  );
}

export default Game;
