/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native'
import Chat from './src/screens/Chat/Chat';

class App extends React.Component {

  render() {
    return (
      <>
        <StatusBar backgroundColor='#4ea9b7' />
        <Chat />
      </>
    );
  }
};

export default App;
