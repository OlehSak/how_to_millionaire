import React from 'react';

import {
  MobileContainer,
  MHiddenButton,
  LeftContainer,
  Background,
  StepContainer,
  DefaultText,
  ButtonBox,
  MobileBackground,
  MobileStepContainer,
} from './Game.styles';

import Step from '../../components/Step';
import AnswerButton from '../../components/AnswerButton';

export interface StartGameProps {
  onAnswer: (e: number) => void
  answerArray?: string[]
  stepArray?: number[]
  numberOfQuestion: number
  question?: string
  isMobile: boolean
}

const CalculateColor = (index: number, number: number):string => {
  const retColor = '1C1C21';

  if (index === number) return '#FF8B37';
  if (index <= number) return '#D0D0D8';
  return (retColor);
};

function Game({
  onAnswer,
  stepArray,
  answerArray,
  numberOfQuestion,
  question,
  isMobile,
}: StartGameProps):JSX.Element {
  const [openSteps, setOpenSteps] = React.useState<boolean>(true);

  return (
    <>
      {isMobile
        ? (
          <MobileBackground>
            <MHiddenButton onClick={setOpenSteps} value={openSteps} />
            {openSteps
              ? (
                <MobileContainer>
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
                </MobileContainer>
              ) : (
                <MobileStepContainer>
                  {stepArray?.map((value, index):JSX.Element => (
                    <Step
                      key={value + index}
                      value={value}
                      active={numberOfQuestion === index}
                      color={CalculateColor(index, numberOfQuestion)}
                    />
                  )).reverse()}
                </MobileStepContainer>
              )}
          </MobileBackground>
        )
        : (
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
          </Background>
        )}
    </>
  );
}

export default Game;
