import React from 'react';

import {
  Button,
  Hand,
  Text,
  Container,
  Background,
  DefaultText,
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
          <DefaultText>
            Total score:
          </DefaultText>
          <Text>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumSignificantDigits: 1,
            }).format(value)}
            {' earned'}
          </Text>
          <Button onClick={onClick}>Try again</Button>
        </TextContainer>
      </Container>
    </Background>
  );
}

export default GameOver;
