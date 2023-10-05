import { useState } from 'react';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';
import './App.css';
import Button from './Button_without_redux';

function reducer(state, action) {
  if(action.type === "changeColor") {
    return {
      ...state , color:action.payload
    }
  } else {
    return state;
  }
}

const initialState = {color:"yellow"};
let store = createStore(reducer, initialState);

function App_with_redux() {
  return (
    <div>
      <Provider store = {store}>
        <RedContainer text="red" />
        <GreenContainer text="green"/>
        <BlueContainer text="blue"/>
        <PurpleContainer text="purple"/>
      </Provider>
    </div> 
  )
}
{/* <PurpleContainer setColor={setColor} style={style}/> */}

function RedContainer({text}){
  const dispatch = useDispatch();
  const changedColor = useSelector(state => state.color);
  const onClick = () => {
    dispatch({type:"changeColor", payload :"red"});
  }
  const style = {
    backgroundColor : changedColor
  }
  return (
    <div className="container" style= {style}>
      <Button text = {text} onClick={onClick} />
    </div>
  );
}

function GreenContainer({text}){
  const dispatch = useDispatch();
  const changedColor = useSelector(state => state.color);
  const style = {
    backgroundColor : changedColor
  }
  const onClick = () => {
    dispatch({type:"changeColor", payload :"green"});
  }
  return (
    <div className="container" style= {style}>
      <Button text = {text} onClick={onClick} />
    </div>
  );
}

function BlueContainer({text}){
  const dispatch = useDispatch();
  const changedColor = useSelector(state => state.color);
  const style = {
    backgroundColor : changedColor
  }
  const onClick = () => {
    dispatch({type:"changeColor", payload :"blue"});
  }
  return (
    <div className="container" style= {style}>
      <Button text = {text} onClick={onClick} />
    </div>
  );
}

function PurpleContainer({text}){
  const dispatch = useDispatch();
  const changedColor = useSelector(state => state.color);
  const style = {
    backgroundColor : changedColor
  }
  const onClick = () => {
    dispatch({type:"changeColor", payload :"purple"});
  }
  return (
    <div className="container" style= {style}>
      <Button text = {text} onClick={onClick} />
    </div>
  );
}

export default App_with_redux;
