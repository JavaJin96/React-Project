import React, { useState } from 'react';

function NBGame(){
    let randomList = []
    let randomNum = "";
    let [strike, setStrike] = useState(0);
    let [ball, setBall] = useState(0);
    let [inputNum, setInputNum] = useState(null);
    let [result, setResult] = useState("");
    const randomAnswer = () => {
        for(var i = 0; i < 3; i++){
            randomNum = Math.floor(Math.random() * 9);
            randomList.push(randomNum);
        }
        console.log(randomList);

        return randomList;
    };
    const playGame = () => {
        var numList = inputNum.split("");
        console.log(randomList);
        if(numList[0] == randomList[0]){
            alert("들어왔습니다");
            /*strike += 1;*/
            setStrike(strike+1);
        }else{
            if(numList[0] == randomList[1]){
                /*ball += 1;*/
                setBall(ball+1);
            }else if(numList[0] == randomList[2]){
                /*ball += 1;*/
                setBall(ball+1);
            }
        }

        if(numList[1] == randomList[1]){
            setStrike(strike+1);
            /*strike += 1;*/
        }else{
            if(numList[1] == randomList[0]){
                /*ball += 1;*/
                setBall(ball+1);
            }else if(numList[1] == randomList[2]){
                /*ball += 1;*/
                setBall(ball+1);
            }
        }

        if(numList[2] == randomList[2]){
            setStrike(strike+1);
            /*strike += 1;*/
        }else{
            if(numList[2] == randomList[0]){
                /*ball += 1;*/
                setBall(ball+1);
            }else if(numList[2] == randomList[1]){
                /*ball += 1;*/
                setBall(ball+1);
            }
        }

        console.log("사용자입력 : " + numList);
        console.log("정답 : " + randomList);
        console.log("결과 : " + strike + "/" + ball);
        result = "Strike : " + strike + "Ball : " + ball;

    }

    const handleChange = (event) => {
        setInputNum(event.target.value);
    };
    return(
        <div className="App">
            <header className="App-header">
                <div>
                    <h1>재미난 숫자 야구!</h1>
                    <input type="text" className="inputNum" value={inputNum} onChange={handleChange}/>
                    <button onClick={() => (playGame())}>대결!</button>
                    <h4>결과는? {result}</h4>
                    <button onClick={() => randomAnswer()}>시작!</button>
                </div>
            </header>
        </div>


    );


}

export default NBGame;