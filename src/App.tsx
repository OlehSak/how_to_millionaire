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

  const [answerArray, setAnswerArray] = React.useState<string[] | undefined>([]);
  const [question, setQuestion] = React.useState<string | undefined>(' ');
  const [stepArray, setStepArray] = React.useState<number[] | undefined>([]);
  const [numberOfQuestion, setNumberOfQuestion] = React.useState<number>(0);

  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 900);

  const goGame = (): void => {
    setNumberOfQuestion(0);
    setAnswerArray(jsonString?.[0].questions?.[0].answers);
    setStepArray(jsonString[1].step_array);
    setQuestion(jsonString?.[0].questions?.[0].question);
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
    if (value === jsonString[0]?.questions?.[numberOfQuestion].correct_answer
      && jsonString[0]?.questions?.length > numberOfQuestion + 1) {
      setAnswerArray(jsonString[0].questions[numberOfQuestion + 1].answers);
      setNumberOfQuestion(numberOfQuestion + 1);
      setQuestion(jsonString[0]?.questions[numberOfQuestion + 1]?.question || '');
    } else { onEndGame(); }
  };

  React.useEffect(() => {
    const autoCollapseSider = (): void => {
      const smallWindow = window.innerWidth < 900;
      setIsMobile(smallWindow);
    };

    window.addEventListener('resize', autoCollapseSider);
    return ():void => {
      window.removeEventListener('resize', autoCollapseSider);
    };
  }, []);

  return (
    <>
      {backToStart && <StartGame onClick={onStartGame} />}
      {endGame
      && (
        <Game
          onAnswer={nextQuestion}
          answerArray={answerArray}
          numberOfQuestion={numberOfQuestion}
          stepArray={stepArray}
          question={question}
          isMobile={isMobile}
        />
      )}
      {startGame
      && (
      <GameOver
        value={jsonString[1]?.step_array?.[numberOfQuestion - 1] || 0}
        onClick={onBackGame}
      />
      )}
    </>
  );
}

export default App;
