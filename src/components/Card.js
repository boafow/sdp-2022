import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
export default Card = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.name}</Text>
      <CircularProgress
        radius={90}
        value={(props.currValue / props.targetValue) * 100}
        textColor='#222'
        fontSize={20}
        valueSuffix={'%'}
        inActiveStrokeColor={'#2ecc71'}
        inActiveStrokeOpacity={0.2}
        inActiveStrokeWidth={6}
        duration={3000}
        onAnimationComplete={() => props.targetValue - props.currValue}
      />
      <Text>remaining: {props.targetValue - props.currValue} {props.units}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#008080',
    borderRadius: 5,
    shadowColor: '#001',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5
  },
});