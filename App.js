import React, { useState, Fragment } from 'react';
import { StyleSheet, Alert, Text, View, ScrollView } from 'react-native';
import Header from './compoenents/Header'
import ViewTodo from './compoenents/ViewTodo';
import TodoForm from './compoenents/TodoForm';
const getRandomKey = () => Math.floor(Math.random() * 1000 * Math.random() + 123);

export default App = () => {

  const [todos, setTodo] = useState([
    { title: "buy coffee", id: getRandomKey() },
    { title: "Complete Todo List", id: getRandomKey() },
    { title: "Call everyone", id: getRandomKey() },
  ])
  const deleteTodo = id => {
    Alert.alert('Warning!', 'This Todo will be deleted', [
      { text: 'Ok Delete it', onPress: () => { setTodo(todos.filter(todo => todo.id != id)) } },
      { text: "Don't Delete", onPress: () => { } }
    ])
  }
  const addTodo = title => {
    let newTodo = { title, id: getRandomKey() };
    setTodo([newTodo, ...todos]);
    return;
  }

  return (
    <Fragment>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <TodoForm addTodo={addTodo} />
          <View style={styles.list}>
            <ScrollView style={styles.scrollView}>
              {todos.map(todo => (
                <ViewTodo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,
    marginBottom: 40
  },
  list: {
    marginTop: 20
  },
  scrollView: {
    maxHeight: 350
  }
});
