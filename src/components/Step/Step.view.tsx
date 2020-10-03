import React from 'react';

import {
  Component,
  Text,
  Img,
} from './Step.styles';

import current from '../../assets/current_question.svg';
import inactive from '../../assets/inactive_question.svg';

export interface StepProps {
  value: number
  active: boolean
  color: string
}

export default function Step({ value, active, color }: StepProps):JSX.Element {
  return (
    <Component>
      {active ? <Img src={current} /> : <Img src={inactive} />}
      <Text color={color}>
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumSignificantDigits: 1,
        }).format(value)}
      </Text>
    </Component>
  );
}
