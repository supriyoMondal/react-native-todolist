import React from 'react'
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const ViewTodo = ({ todo, deleteTodo }) => {
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
                <MaterialIcons name="delete" size={20} color="#333" />
            </TouchableOpacity>

            <Text style={styles.text} >{todo.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
    },
    text: {
        paddingHorizontal: 10
    }
})

export default ViewTodo;
