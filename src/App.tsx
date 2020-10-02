import React from 'react';
import './App.css';
import StartGame from './pages/StartGame';
import Game from './pages/Game';
import GameOver from './pages/GameOver';
import jsonString from './data/questions_and_answers.json';

function App():JSX.Element {
  const [startGame, setStartGame] = React.useState(false);
  const [endGame, setEndGame] = React.useState(false);
  const [backToStart, setBackToStart] = React.useState(true);

  const [answerArray, setAnswerArray] = React.useState<string[]>([]);
  const [number, setNumber] = React.useState<number>(0);

  const goGame = (): void => {
    setNumber(0);
    setAnswerArray(jsonString[0].questions[0].answers);
  };

  const onStartGame = (): void => {
    setEndGame(true);
    setStartGame(false);
    setBackToStart(false);
    goGame();
  };

  const onEndGame = (): void => {
    setEndGame(false);
    setStartGame(true);
    setBackToStart(false);
  };

  const onBackGame = (): void => {
    setEndGame(false);
    setStartGame(false);
    setBackToStart(true);
  };

  const nextQuestion = (value: number): void => {
    if (value === jsonString[0].questions[number].correct_answer
      && jsonString[0].questions.length > number + 1) {
      setAnswerArray(jsonString[0].questions[number + 1].answers);
      setNumber(number + 1);
      // eslint-disable-next-line no-console
      console.log('TRUE');
      // eslint-disable-next-line no-console
    } else { onEndGame(); console.log('FALSE'); }
  };

  return (
    <>
      {backToStart && <StartGame onClick={onStartGame} />}
      {endGame && <Game onAnswer={nextQuestion} onClick={onEndGame} answerArray={answerArray} />}
      {startGame && <GameOver value={number} onClick={onBackGame} />}
    </>
  );
}

export default App;
