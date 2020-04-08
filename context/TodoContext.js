import { ADD_TODO, REMOVE_TODO, GET_TODOS } from './types'
import React, { createContext, useReducer } from 'react'
import { AsyncStorage } from 'react-native'
import todoReducer from './TodoReducer'

const TODO_KEY = 'todo-for-user';

const initialState = {
    todos: [

    ]
}

export const TodoContext = createContext(initialState);

export const TodoContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    async function addTodo(todo) {
        try {
            let todos = await AsyncStorage.getItem(TODO_KEY);
            if (todos == null) {
                todos = [todo]
            } else {
                todos = JSON.parse(todos);
                todos = [todo, ...todos]
            }

            await AsyncStorage.setItem(TODO_KEY, JSON.stringify(todos));
            dispatch({
                type: ADD_TODO,
                payload: todo
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    async function removeTodo(id) {
        let todos = await AsyncStorage.getItem(TODO_KEY);
        todos = JSON.parse(todos);
        todos = todos.filter(todo => todo.id != id);
        await AsyncStorage.setItem(TODO_KEY, JSON.stringify(todos));
        dispatch({
            type: REMOVE_TODO,
            payload: id
        })
    }
    async function getAllTodos() {
        try {
            const todos = await AsyncStorage.getItem(TODO_KEY);
            if (todos != null) {

                let data = JSON.parse(todos);
                // console.log(data);
                dispatch({
                    type: GET_TODOS,
                    payload: data
                })
            } else {
                dispatch({
                    type: GET_TODOS,
                    payload: []
                })
            }
        } catch (error) {
            console.log(error.message);
            return;
        }
    }

    return (
        <TodoContext.Provider value={{
            ...state,
            addTodo,
            getAllTodos,
            removeTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}


