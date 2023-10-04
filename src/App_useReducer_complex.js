import { useState , useReducer } from 'react';
import ACTION_TYPES from './ACTION_TYPES';
import Todo from './Todo_reducer';
// Todo list 의 수정 버전

// reducer => 복잡한 state를 관리
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.add : 
      const newTodo = {
        id : Date.now(),
        todo : action.payload.todo,
        completed : false
      }
      return {
        count : state.count + 1,
        todoList : [...state.todoList, newTodo]
      };
    case ACTION_TYPES.del : 
      return state;
    case ACTION_TYPES.completed : 
      return state;  
  }
}

const initialState = {
  count : 0,
  todoList : []
}
// dispatch => reducer에게 state 관리를 요구

// action => 요구하는 내용(우리 예제의 경우 up or down)

// action의 타입을 const 로 등록하여 더 깔끔하게 정리


function App_reducer_complex() {
  const [todo, setTodo] = useState("");
  const [todoListInfo, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Todolist - reducer</h2>
      <p>총 todolist 수 : {todoListInfo.count}</p>
      <input type='text'
       value = {todo}
       onChange = {
        (e) => {setTodo(e.target.value)}
       }
       placeholder='할일을 입력해주세요' />
      <button onClick = {() =>
        {dispatch({type : ACTION_TYPES.add , payload :{todo}})}
      }>add</button>
      {todoListInfo.todoList.map(todos => {
        return (
          <Todo 
          key = {todos.id}
          todo = {todos.todo}
          dispatch = {dispatch} />
        )
      })}
    </div>
  )
}

export default App_reducer_complex;
