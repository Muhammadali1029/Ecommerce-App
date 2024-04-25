import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TestScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test Account Screen</Text>
      <Text>This is a temporary screen for testing purposes.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default TestScreen;
