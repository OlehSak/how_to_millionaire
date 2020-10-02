import React from 'react';

import {
  Component,
  Text,
  Img,
} from './Step.styles';

const Rectangle = require('../../assets/Rectangle 4.svg');

export interface StepProps {
  value: string
}

export default function Step({ value }: StepProps):JSX.Element {
  return (
    <Component>
      <Img src={Rectangle} />
      <Text>{value}</Text>
    </Component>
  );
}
