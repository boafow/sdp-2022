import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { setGLOBAL_USERNAME, getGLOBAL_USERNAME } from './GlobalUsername';

const LoginPage = () => {
  //const [username, setUsername] = useState('');
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
  const [valueUsername, setValueUsername] = useState('abc00000');
  const [itemsUsername, setItemsUsername] = useState(usernameItems);

  /* SET GLOBAL USERNAME VARIABLE */
  const setAllUsernames = () => {
    console.log(valueUsername);
    setGLOBAL_USERNAME(valueUsername);
    console.log(getGLOBAL_USERNAME());  
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {/* <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      /> */}
      <DropDownPicker
                open={openUsername}
                value={valueUsername}
                items={itemsUsername}
                setOpen={setOpenUsername}
                setValue={(value) => {setValueUsername(value); setAllUsernames();}}
                setItems={setItemsUsername}
                // maxHeight={75}
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
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  drop_down: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 75
  },
  button: {
    backgroundColor: '#FA9800',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default LoginPage;