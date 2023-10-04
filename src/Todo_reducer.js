import ACTION_TYPES from './ACTION_TYPES';

function Todo_reducer({todo, dispatch}) {
    return (
        <div>
            <span>{todo}</span>
            <button onClick={() =>
                dispatch({type: ACTION_TYPES.del})
            }>삭제</button>
        </div>
    )
}

export default Todo_reducer;