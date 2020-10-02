import React from 'react';

import {
  Button,
  Hand,
  Text,
  Container,
  Background,
  TextContainer,
} from './GameOver.styles';

const HandSVG = require('../../assets/Hand.svg');

export interface StartGameProps {
  onClick: (e: React.MouseEvent) => void
  value: number
}

function GameOver({ value, onClick }: StartGameProps):JSX.Element {
  return (
    <Background>
      <Container>
        <Hand src={HandSVG} />
      </Container>
      <Container>
        <TextContainer>
          <Text>
            {value}
            earned
          </Text>
          <Button onClick={onClick}>Start</Button>
        </TextContainer>
      </Container>
    </Background>
  );
}

export default GameOver;
