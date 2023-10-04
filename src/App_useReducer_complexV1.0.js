import { useState , useReducer } from 'react';
import Todo from './Todo';
import ACTION_TYPES from './ACTION_TYPES';
// Todo list 의 수정 버전

// reducer => 복잡한 state를 관리
const reducer = (state, action) => { 
  switch(action.type) {
    case ACTION_TYPES.add : 
      const todo = action.payload.todo;
      const newTodo = {
        id : Date.now(),
        todo ,
        isFinished : false 
      }
      return {
        count : state.count + 1,
        todoList : [...state.todoList, newTodo],
      }
    case ACTION_TYPES.delete : 
      return {
        count : state.count - 1,
        todoList : state.todoList.filter(element =>
          element.id !== action.payload.id),
      }
    case ACTION_TYPES.finish : 
      return {
        count : state.count ,
        todoList : state.todoList.map(element => {
          if(element.id === action.payload.id){
            return {...element, isFinished : !element.isFinished}
          }
          return element;
        })
      }
    default :
      return state;
  }
}

// dispatch => reducer에게 state 관리를 요구

// action => 요구하는 내용(우리 예제의 경우 up or down)

// action의 타입을 const 로 등록하여 더 깔끔하게 정리

const initialState = {
  count : 0,
  todoList : []
    // {
    //   id : Date.now(),
    //   todo : [], // "mini project plan",
    //   isFinished : false,
    // }
}

function App_reducer_complex() {
  const [todo, setTodo] = useState("");
  const [todoListInfo, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>useReducer TodoList</h2>
      <p>총 todolist 수 : {todoListInfo.count} </p>
      <input type="text"
       value={todo}
       onChange = {(e) => setTodo(e.target.value)}
       placeholder = "할 일을 입력해주세요." />
      <button onClick={
        () => {
          dispatch({type:ACTION_TYPES.add, payload : {todo}});
        }
      }>add</button>
      {todoListInfo.todoList.map(element => {
        return (
          <Todo 
            key={element.id} 
            todo={element.todo}
            dispatch={dispatch}
            id={element.id}
            isFinished={element.isFinished}
          />)
        })}
    </div>
  )
}

export default App_reducer_complex;
