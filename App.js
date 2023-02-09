import { React } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Amplify from 'aws-amplify';
import PhoneCamera from './src/components/PhoneCamera';

export default App = () => {

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <PhoneCamera />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    borderRadius: 20,

  }
});
