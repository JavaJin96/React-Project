import React from 'react';

function makeMainUi(){
    const goRspGame = () => {
        window.location.href = "/rspGame";
    };

    const goNumBaseBallGame = () => {
        window.location.href = "/numberBaseball";
    }

    return(
        <div className='mainDiv'>
          <h1>react로 생성된 웹페이지 입니다.</h1>
          <ul>
              <li><button onClick={goRspGame}>가위 바위 보!</button></li>
              <li><button onClick={goNumBaseBallGame}>숫자야구</button></li>
              <li><button>기능3</button></li>
              <li><button>기능4</button></li>
              <li><button>기능5</button></li>
              <li><button>기능6</button></li>
          </ul>
        </div>
    );
}
export default makeMainUi;