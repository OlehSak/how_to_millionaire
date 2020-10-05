import React from 'react';

import {
  Background,
  ButtonBox,
  DefaultText,
  LeftContainer,
  MHiddenButton,
  MobileBackground,
  MobileButtonBox,
  MobileContainer,
  MobileStepContainer,
  StepContainer,
  TopBox,
  BottomBox,
} from './Game.styles';

import Step from '../../components/Step';
import AnswerButton from '../../components/AnswerButton';

export interface StartGameProps {
  onAnswer: (e: number) => void
  answerArray: string[]
  stepArray?: number[]
  numberOfQuestion: number
  question?: string
  isMobile: boolean
  right_answer: number | undefined
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
  right_answer,
}: StartGameProps):JSX.Element {
  const [openSteps, setOpenSteps] = React.useState<boolean>(true);

  const array = answerArray.map((value, index):JSX.Element => (
    <AnswerButton
      className="mobileButtons"
      key={value + question}
      onClick={onAnswer}
      answer={value}
      number_answer={index}
      right_answer={index === right_answer}
    />
  ));
  console.log('ismobile', isMobile);
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
                  <MobileButtonBox key={question}>
                    {array}
                  </MobileButtonBox>
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
              <ButtonBox key={question}>
                <TopBox>
                  {array[0]}
                  {array[1]}
                </TopBox>
                <BottomBox>
                  {array[2]}
                  {array[3]}
                </BottomBox>
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
