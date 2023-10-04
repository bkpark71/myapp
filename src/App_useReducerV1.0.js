import { useState , useReducer } from 'react';

// reducer => 복잡한 state를 관리
const reducer = (state, action) => {
  console.log("reducer가 호출됨", state, action);
}
// dispatch => reducer에게 state 관리를 요구

// action => 요구하는 내용(우리 예제의 경우 up or down)

function App_reducer() {
  const [number, setNumber] = useState(0);
  const [numberTotal, dispatch] = useReducer(reducer, 0);
  const onClick = (e) => setNumber(parseInt(e.target.value));
  return (
    <div>
      <h2>useReducer Test</h2>
      <p>숫자 10씩 변경</p>
      <p>현재 숫자 : {numberTotal}</p>
      <input type="number"
       value={number}
       onChange = {onClick}
       step ="10" />
      <button onClick={()=>{
        dispatch({type:"up", payload : number});
      }}>up</button>
      <button onClick = {() => {
        dispatch( {type:"down", payload : number})}}>
        down</button>
    </div>
  )
}

export default App_reducer;
