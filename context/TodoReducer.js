import { ADD_TODO, REMOVE_TODO, GET_TODOS } from './types'

export default (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id != action.payload)
            }
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload
            }

        default:
            return state;
    }
}