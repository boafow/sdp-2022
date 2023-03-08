import { height, width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const MicronutrientBox = (props) => {
  return (
    
        <View style={styles.container}>
            <Text style={styles.label}>{props.title}</Text>
            <View style={styles.numberContainer}>
                <Text style={styles.number}> {props.amount}</Text>
            </View>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    width: '98%',
    height: 60,
    marginTop: 4,
    borderRadius: 15,
    shadowColor: '#52BB40',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: .25,
    shadowRadius: 5,
  },
  label: {
    padding: 5,
    fontSize: 18,
    color: '#0080C9'
  },
  numberContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 5,
    borderRadius: 10

  },
  number: {
   padding: 10,
   color: '#0080C9'
    
  }
 
});

export default MicronutrientBox;
