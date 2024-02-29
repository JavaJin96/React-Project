import React, { useState } from 'react';

const choices = ['바위', '보', '가위'];

function Game() {
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState('');

    const getRandomChoice = () => {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    };

    const determineWinner = (user, computer) => {
        if (user === computer) {
            return "묻고 더블로 가!";
        }

        if (
            (user === '바위' && computer === '가위') ||
            (user === '가위' && computer === '보') ||
            (user === '보' && computer === '바위')
        ) {
            return '축하드립니다 이겼습니다!';
        }

        return 'ㅠㅠ상대가 이겼습니다!';
    };

    const handleClick = (choice) => {
        const computer = getRandomChoice();
        setUserChoice(choice);
        setComputerChoice(computer);
        setResult(determineWinner(choice, computer));
    };

    return (
/*        <div>
            <h2>바위 보 가위</h2>
            <div>
                <button onClick={() => handleClick('바위')}>바위</button>
                <button onClick={() => handleClick('보')}>보</button>
                <button onClick={() => handleClick('가위')}>가위</button>
            </div>
            <p>Your choice: {userChoice}</p>
            <p>Computer's choice: {computerChoice}</p>
            <p>{result}</p>
        </div>*/


        <div className="App">
            <header className="App-header">
                <div>
                    <h2>가위 바위 보!</h2>
                    <div>
                        <button onClick={() => handleClick('가위')}>가위</button>
                        <button onClick={() => handleClick('바위')}>바위</button>
                        <button onClick={() => handleClick('보')}>보</button>
                    </div>
                    <p>당신의 선택: {userChoice}</p>
                    <p>상대방의 선택: {computerChoice}</p>
                    <p>결과는 ?! : {result}</p>
                </div>
            </header>
        </div>
    );
}

export default Game;
