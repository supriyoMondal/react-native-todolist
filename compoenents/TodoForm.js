import React, { Fragment, useState } from 'react'
import { StyleSheet, Alert, Button, TextInput } from 'react-native'
const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('');
    return (
        <Fragment>
            <TextInput
                style={styles.input}
                placeholder="new todo"
                onChangeText={text => setTitle(text)}
                defaultValue={title}
            />
            <Button title="add Todo"
                color='coral'
                onPress={() => {
                    if (title.length > 2) {
                        addTodo(title);
                        setTitle('');
                    } else {
                        Alert.alert('OOPS!', 'Todos must be over 3 chars long.', [
                            { text: 'Understood', onPress: () => { } }
                        ])
                    }
                }} />
        </Fragment>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})

export default TodoForm
