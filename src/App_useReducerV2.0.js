import { useState , useReducer } from 'react';

// reducer => 복잡한 state를 관리

// dispatch => reducer에게 state 관리를 요구

// action => 요구하는 내용(우리 예제의 경우 up or down)
//           type, payload 를 포함한 객체

// action의 타입을 const 로 등록하여 더 깔끔하게 정리
const ACTION_TYPES = {
  up : "up",
  down : "down"
}
const reducer = (state, action) => {
  console.log("현재 전달된 값", state, action.type, action.payload);
  switch(action.type) {
    case ACTION_TYPES.up :
      // 비즈니스 로직
      return state + action.payload;
    case ACTION_TYPES.down:
      // 비즈니스 로직
      return state - action.payload;
    default :
      return state;
  }
};

function App_reducer() {
  const [number, setNumber] = useState(0);
  const [numberTotal, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useReducer Test</h2>
      <p>숫자 10씩 변경</p>
      <p>현재 숫자 : {numberTotal} </p>
      <input type="number"
       value={number}
       onChange = {(e) => setNumber(parseInt(e.target.value))}
       step ="10" />
      <button onClick={
        () => {
          dispatch({type:ACTION_TYPES.up, payload : number});
        }
      }>up</button>
      <button onClick={
        () => {
          dispatch({type:ACTION_TYPES.down, payload : number});
        }
      }>down</button>
    </div>
  )
}

export default App_reducer;
