import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './authorization/LogIn';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <WelcomeScreen />
      </View>
      <LoginScreen />
      <View style={styles.signupButtonContainer}>
        <Button title="Or Sign Up" onPress={() => {}} color="blue" style={styles.signupButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkblue',
  },
  signupButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 120,
    height: 40,
    backgroundColor: 'white',
  },
  signupButton: {
    width: 150,
  },
  logo: {
    marginTop: 200,
  },
});

export default App;
