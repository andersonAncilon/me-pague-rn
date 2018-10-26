import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './src/views/login';

const MyNavigator = new createStackNavigator({
  LoginPage: Login
});

export default class App extends React.Component {
  render() {
    return (
      <MyNavigator/>
    );
  }
}

