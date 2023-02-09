import { React } from 'react';
import { StyleSheet, View } from 'react-native';
import Amplify from 'aws-amplify';
import PhoneCamera from './src/components/PhoneCamera';

export default App = () => {

  return (
    <View style={styles.container}>
      <PhoneCamera />
    </View>
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
