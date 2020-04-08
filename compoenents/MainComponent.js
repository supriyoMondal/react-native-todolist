import React, { useEffect, Fragment, useContext } from 'react';
import { StyleSheet, Alert, Keyboard, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Header from './Header'
import ViewTodo from './ViewTodo';
import TodoForm from './TodoForm';
import { TodoContext } from '../context/TodoContext'

const getRandomKey = () => Math.floor(Math.random() * 1000 * Math.random() + 123);

export default MainComponent = () => {

    const { todos, removeTodo, addTodo, getAllTodos } = useContext(TodoContext);

    const deleteTodo = id => {
        Alert.alert('Warning!', 'This Todo will be deleted', [
            { text: 'Ok Delete it', onPress: () => { removeTodo(id) } },
            { text: "Don't Delete", onPress: () => { } }
        ])
    }
    const addingTodo = title => {
        let newTodo = { title, id: getRandomKey() };
        addTodo(newTodo);
    }

    useEffect(() => {
        getAllTodos();
    }, [])
    return (
        <Fragment>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <Header />
                    <View style={styles.content}>
                        <TodoForm addTodo={addingTodo} />
                        <View style={styles.list}>
                            <ScrollView>
                                {todos.map(todo => (
                                    <ViewTodo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>

            {/* <Sandbox /> */}
        </Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        flex: 1
    },
    list: {
        marginTop: 20,
        flex: 1
    }
});
