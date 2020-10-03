import React from 'react';

import {
  Component,
  Text,
  Img,
  Variant,
} from './AnswerButton.styles';

import button from '../../assets/Button.svg';

export interface AnswerButtonProps {
  answer: string
  number_answer: number
  onClick: (e: number) => void
}

export default function AnswerButton({
  answer,
  number_answer,
  onClick,
}: AnswerButtonProps):JSX.Element {
  return (
    <Component onClick={():void => onClick(number_answer)}>
      <Img src={button} />
      <Text>
        <Variant>{number_answer}</Variant>
        {answer}
      </Text>
    </Component>
  );
}