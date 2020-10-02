import React from 'react';

import {
  Component,
  Text,
  Img,
  Variant,
} from './AnswerButton.styles';

import Rectangle from '../../assets/Rectangle 4.svg';

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
      <Img src={Rectangle} />
      <Variant>{number_answer}</Variant>
      <Text>{answer}</Text>
    </Component>
  );
}
