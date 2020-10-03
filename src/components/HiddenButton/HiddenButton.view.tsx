import React from 'react';

import {
  Component,
  Img,
} from './HiddenButton.styles';

import Menu from '../../assets/Menu.svg';
import Close from '../../assets/Close.svg';

export interface HiddenButtonProps {
  value: boolean
  onClick: (e: boolean) => void
}

export default function HiddenButton({
  value,
  onClick,
}: HiddenButtonProps):JSX.Element {
  return (
    <Component onClick={():void => onClick(!value)}>
      <Img src={value ? Menu : Close} />
    </Component>
  );
}
