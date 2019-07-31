import React, { Fragment } from 'react';
import { StatusBar, Text, View, TextInput, Button } from 'react-native';
import databaase from '../../config/database';

import styles from './styles';

const Login = () => {
  function onUsernameChange(text) {
    console.log('Username is ', text);
  }

  function onPasswordChange(text) {
    console.log('Password is ', text);
  }

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.container}>
        <Text style={styles.textLogin}>LOGIN</Text>
        <Text style={styles.textRegular}>Username</Text>
        <TextInput style={styles.textInput} onChangeText={onUsernameChange} />
        <Text style={styles.textRegular}>Password</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          onChangeText={onPasswordChange}
        />
        <Button title="Login" />
      </View>
    </Fragment>
  );
};

export default Login;
