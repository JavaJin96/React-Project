import React, { useState } from 'react';

function NBGame(){
    let [randomList, setRandomList] = useState([]);
    let [strike, setStrike] = useState(0);
    let [ball, setBall] = useState(0);
    let [inputNum, setInputNum] = useState(null);
    let [result, setResult] = useState("");
    let [countNum, setCountNum] = useState(0);
    const randomAnswer = () => {
        randomList = [];
        var tempList = [1,2,3,4,5,6,7,8,9]
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * tempList.length); // 무작위 인덱스 선택
            randomList.push(tempList[randomIndex]); // 선택된 숫자 추가
            tempList.splice(randomIndex, 1); // 선택된 숫자를 가능한 숫자 배열에서 제거
        }
        setRandomList(randomList);
    };
    const playGame = () => {

        if(randomList.length <= 0){
            alert("[시작/초기화!] 버튼을 먼저 클릭해주세요.");
            return;
        }

        strike = 0;
        ball = 0;
        setStrike(strike);
        setBall(ball);
        var numList = inputNum.split("");
        console.log(randomList);
        if(numList[0] == randomList[0]){
            strike += 1;
            setStrike(strike);
        }else{
            if(numList[0] == randomList[1]){
                ball += 1;
                setBall(ball);
            }else if(numList[0] == randomList[2]){
                ball += 1;
                setBall(ball);
            }
        }

        if(numList[1] == randomList[1]){
            strike += 1;
            setStrike(strike);
        }else{
            if(numList[1] == randomList[0]){
                ball += 1;
                setBall(ball);
            }else if(numList[1] == randomList[2]){
                ball += 1;
                setBall(ball);
            }
        }

        if(numList[2] == randomList[2]){
            strike += 1;
            setStrike(strike);
        }else{
            if(numList[2] == randomList[0]){
                ball += 1;
                setBall(ball);
            }else if(numList[2] == randomList[1]){
                ball += 1;
                setBall(ball);
            }
        }
        result = "Strike : " + strike + " Ball : " + ball;
        setResult(result);

        countNum += 1;
        setCountNum(countNum);

        if(strike == 3){
            alert("정답입니다! 총 " + countNum + "회 도전하셨습니다.");
        }
    }

    const handleChange = (event) => {
        setInputNum(event.target.value);
    };
    return(
        <div className="App">
            <header className="App-header">
                <div>
                    <h1>재미난 숫자 야구!</h1>
                    <button onClick={randomAnswer}>시작/초기화!</button>
                    <br></br>
                    <hr></hr>
                    <input type="text" className="inputNum" onChange={handleChange}/>
                    <br></br>
                    <button onClick={playGame}>대결!</button>
                    <h4>결과는? {countNum} 회 도전</h4>
                    <h5>{result}</h5>
                </div>
            </header>
        </div>
    );
}

export default NBGame;