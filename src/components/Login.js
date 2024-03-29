import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { setGLOBAL_USERNAME, getGLOBAL_USERNAME } from './GlobalUsername';
import { height } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';

const LoginPage = () => {
  /* REACT-NATIVE HOOK FOR DUMMY PASSWORD */
  const [password, setPassword] = useState('*********');
  
  /* HARDCODED USERNAME ARRAY */
  const usernameItems = [
    {label: 'abc00000', value: 'abc00000'},
    {label: 'aha19004', value: 'aha19004'},
    {label: 'jcp20007', value: 'jcp20007'},
    {label: 'nmt18004', value: 'nmt18004'},
    {label: 'rwb18003', value: 'rwb18003'},
    {label: 'wap21001', value: 'wap21001'},
    {label: 'wib17006', value: 'wib17006'}
];
  
  /* HOOKS FOR DROPDOWN PICKER*/
  const [openUsername, setOpenUsername] = useState(false);
  const [valueUsername, setValueUsername] = useState('nmt18004');
  const [itemsUsername, setItemsUsername] = useState(usernameItems);

  /* SET GLOBAL USERNAME VARIABLE */
  const setAllUsernames = () => {
    setGLOBAL_USERNAME(valueUsername);
  }

  /* SET DEFAULT USERNAME WHEN APP OPENS */
  useEffect(() => {
    setAllUsernames()
  });

  /* HTML & JSX CODE */
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <DropDownPicker
        open={openUsername}
        value={valueUsername}
        items={itemsUsername}
        setOpen={setOpenUsername}
        setValue={(value) => {setValueUsername(value); setAllUsernames();}}
        setItems={setItemsUsername}
        style={styles.drop_down}
        placeholder={'Select username'}
      />
      {valueUsername &&
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value ={password}
        /> 
      }
      {valueUsername &&
        <TouchableOpacity style={styles.button} onPress={setAllUsernames}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      }
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '70%',
    height: 48,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
    borderRadius: 10
  },
  drop_down: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 75,
    width: '70%',
    alignSelf: 'center',

  },
  button: {
    backgroundColor: '#FA9800',
    padding: 10,
    borderRadius: 5,
    width: '35%',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default LoginPage;