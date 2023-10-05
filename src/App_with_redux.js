import { useState } from 'react';
import './App.css';
import Button from '../../myapp2/src/Button_without_redux';
import {createStore} from 'redux';
import {Provider,useSelector,useDispatch} from 'react-redux';
function reducer(state, action){
  if(action.type === 'changeColor'){
    return {...state, value:action.payload}
  }
  return state;
}

const initialState = {value:"white"}
const store = createStore(reducer, initialState);
function ChangeColor(){
  const dispatch = useDispatch();
  const changedColor = useSelector(state=>state.value);
  return <div>
    <button onClick={()=>{
      dispatch({type:'changeColor', step:"red"});
    }}>change color</button> {changedColor}
  </div>
}

function RedContainer(){
  const dispatch = useDispatch();
  const changedColor = useSelector(state=>state.value);
  return (
    <div>
      <button onClick={()=>{
        dispatch({type:'changeColor', payload :"red"});
      }}>red</button> {changedColor}
    </div>
    )
}

function GreenContainer(){
  const dispatch = useDispatch();
  const changedColor = useSelector(state=>state.value);
  return (
    <div>
      <button onClick={()=>{
        dispatch({type:'changeColor', payload :"green"});
      }}>green</button> {changedColor}
    </div>
    )
}

function BlueContainer(){
  const dispatch = useDispatch();
  const changedColor = useSelector(state=>state.value);
  return (
    <div>
      <button onClick={()=>{
        dispatch({type:'changeColor', payload :"blue"});
      }}>blue</button> {changedColor}
    </div>
    )
}

function PurpleContainer(){
  const dispatch = useDispatch();
  const changedColor = useSelector(state=>state.value);
  return (
    <div>
      <button onClick={()=>{
        dispatch({type:'changeColor', payload :"purple"});
      }}>purple</button> {changedColor}
    </div>
    )
}
//   return (
//     <div className="container" style= {{backgroundColor : color}}>
//       <Button text = "red" onClick={onClick} />
//     </div>
//   );
// }

function App_with_redux() {
  return (
    <Provider store={store}>
      <div>
        <RedContainer />
        <GreenContainer />
        <BlueContainer />
        <PurpleContainer />
      </div>
    </Provider>
  );
}

export default App_with_redux;
