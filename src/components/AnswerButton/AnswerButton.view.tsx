import React, { useState } from 'react';

import {
  Component,
  Text,
  Img,
  Number,
  Question,
} from './AnswerButton.styles';

import button from '../../assets/Button.svg';
import Correct from '../../assets/Correct.svg';
import Wrong from '../../assets/Wrong.svg';
import Selected from '../../assets/Selected.svg';

export interface AnswerButtonProps {
  answer: string
  right_answer: boolean
  number_answer: number
  className: string
  onClick: (e: number) => void
}

export default function AnswerButton({
  answer,
  number_answer,
  right_answer,
  onClick,
}: AnswerButtonProps):JSX.Element {
  const [buttonType, setButtonType] = useState<string>(button);
  const onEvent = (): void => {
    onClick(number_answer);
  };

  const onChangeButtonType = ():void => {
    setButtonType(right_answer ? Correct : Wrong);
  };

  return (
    <Component onClick={():void => {
      setButtonType(Selected);
      setTimeout(onChangeButtonType, 1500);
      setTimeout(onEvent, 3000);
    }}
    >
      <Img src={buttonType} />
      <Text>
        <Number>{number_answer + 1}</Number>
        <Question>{answer}</Question>
      </Text>
    </Component>
  );
}
