import {START_GAME_PROPS} from "./StartGame.consts";
import './StartGame.styles.css';

import * as React from 'react'
import {Button, Hand, Background} from "./StartGame.styles";

function StartGame() {

    const onStartGame = () => {
        console.log("HELLO")
    }

    return (
        <div className="App">
            {/*<div className="rectangle">*/}
            {/*</div>*/}
            {/*<div className="hand"/>*/}
            {/*<Hand/>*/}
            <Background>
                <Hand/>
                <div className="hand"/>

                {/*<div className="top"/>*/}
                {/*<div className="bottom"/>*/}
            </Background>
            {/*<Button onClick={onStartGame}>Start</Button>*/}
        </div>
    )
}

StartGame.propTypes = START_GAME_PROPS

export default StartGame
