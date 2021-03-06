/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//Basic Components
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';

//store
import store from './store/store';

//Custom Components
import TodoApp from './components/todo';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <TodoApp />
        </View>
      </Provider>
    );
  }
}

export default App;