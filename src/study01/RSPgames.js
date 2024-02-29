import React from 'react'
import MyButton from "./App";

function play(playerValue){
    var computerValue = computer();
    console.log("-----------------------------")
    return battle(playerValue, computerValue);
}

function ui(){
    return(
        <>
        <h1>신나는 가위 바위 보 게임!</h1>
        <h3>아래 버튼을 클릭하세요!</h3>
        {player()}
        </>
    );
}

function player(){
    return (
        <>
        <button onClick={() => play('1')}>가위</button>
        <button onClick={() => play('2')}>바위</button>
        <button onClick={() => play('3')}>보</button>
        </>
    )
}

function computer(){
    var list = [1, 2, 3];
    return list[getRandom(1,3)];
}

function getRandom(min, max){
    return Math.random() * (max - min) + min;
}

function battle(player, computer){
    // 1: 가위 2: 바위 3: 보
    var resultStr = "";
    if(player == computer) {
        resultStr = "비겼습니다."
    }else if(player == 1){
        if(computer == 2){
            resultStr = "졌습니다."
        }else if(computer == 3){
            resultStr = "이겼습니다."
        }
    }else if(player == 2){
        if(computer == 1){
            resultStr = "이겼습니다."
        }else if(computer == 3){
            resultStr = "졌습니다."
        }
    }else{
        if(computer == 1){
            resultStr = "졌습니다."
        }else if(computer == 2){
            resultStr = "이겼습니다."
        }
    }
    return (
        <h4>결과는 : {resultStr}</h4>
    );
}

export default ui;

