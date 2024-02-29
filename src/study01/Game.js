import React, { useState } from 'react';

const choices = ['rock', 'paper', 'scissors'];

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
            return "It's a tie!";
        }

        if (
            (user === 'rock' && computer === 'scissors') ||
            (user === 'scissors' && computer === 'paper') ||
            (user === 'paper' && computer === 'rock')
        ) {
            return 'You win!';
        }

        return 'Computer wins!';
    };

    const handleClick = (choice) => {
        const computer = getRandomChoice();
        setUserChoice(choice);
        setComputerChoice(computer);
        setResult(determineWinner(choice, computer));
    };

    return (
        <div>
            <h2>Rock Paper Scissors</h2>
            <div>
                <button onClick={() => handleClick('rock')}>Rock</button>
                <button onClick={() => handleClick('paper')}>Paper</button>
                <button onClick={() => handleClick('scissors')}>Scissors</button>
            </div>
            <p>Your choice: {userChoice}</p>
            <p>Computer's choice: {computerChoice}</p>
            <p>{result}</p>
        </div>
    );
}

export default Game;
