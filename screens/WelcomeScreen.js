import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
    return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Esti - Mate</Text>
      </View>
      </SafeAreaView>
    );
  };


  const styles = StyleSheet.create({
    container: {
        paddingVertical: 50,
        paddingHorizontal: 30,
        backgroundColor: 'teal',
        alignItems: 'center',
        borderColor: 'pink',
        borderWidth: 5
    },
  });

export default WelcomeScreen;
