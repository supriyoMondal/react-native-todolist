import React, { useState, Fragment } from 'react';
import { StyleSheet, Alert, Keyboard, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Header from './compoenents/Header'
import ViewTodo from './compoenents/ViewTodo';
import TodoForm from './compoenents/TodoForm';
import Sandbox from './compoenents/Sandbox';
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
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <TodoForm addTodo={addTodo} />
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
