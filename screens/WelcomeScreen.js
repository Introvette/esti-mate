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
        backgroundColor: 'orange',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 5,
        fontSize: 24,
    },
  });

export default WelcomeScreen;
