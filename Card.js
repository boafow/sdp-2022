import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default Card = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.name}</Text>
      <Text>remaining: {props.targetValue - props.currValue} {props.units}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 100,
  },
});