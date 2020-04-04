import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
const ViewTodo = ({ todo, deleteTodo }) => {
    return (
        <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
            <Text style={styles.item}>{todo.title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})

export default ViewTodo;
