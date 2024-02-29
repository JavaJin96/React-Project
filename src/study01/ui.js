import React from 'react'

function makeMainUi(){
    return(
        <div className='mainDiv'>
          <h1>react로 생성된 웹페이지 입니다.</h1>
          <ul>
              <button>기능1</button>
              <button>기능2</button>
              <button>기능3</button>
              <button>기능4</button>
              <button>기능5</button>
              <button>기능6</button>
          </ul>
        </div>
    );
}

export default makeMainUi;