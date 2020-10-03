import React from 'react';

import {
  Hand,
  Text,
  Container,
  Background,
  TextContainer,
} from './StartGame.styles';

import { Button } from '../GameOver/GameOver.styles';

const HandSVG = require('../../assets/Hand.svg');

const HeaderText = 'Who wants to be\n'
                    + 'a millionaire?';

export interface StartGameProps {
  onClick: (e: React.MouseEvent) => void
}

function StartGame({ onClick }: StartGameProps):JSX.Element {
  return (
    <Background>
      <Container>
        <Hand src={HandSVG} />
      </Container>
      <Container>
        <TextContainer>
          <Text>
            {HeaderText}
          </Text>
          <Button onClick={onClick}>Start</Button>
        </TextContainer>
      </Container>
    </Background>
  );
}

export default StartGame;
