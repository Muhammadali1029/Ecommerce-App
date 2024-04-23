import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'dotenv/config'; // Import dotenv to load .env variables

AppRegistry.registerComponent(appName, () => App);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
