import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
export default Card = (props) => {
  return (
    <View style={styles.container}>
      <Text style= {{color: '#0080C9'}}>{props.name}</Text>
      <CircularProgress
        radius={100}
        value={(props.currValue / props.targetValue) * 100}
        textColor='#52BB40'
        fontSize={20}
        valueSuffix={'%'}
        activeStrokeColor={'#52BB40'}
        inActiveStrokeColor={'#FA9800'}
        inActiveStrokeOpacity={0.2}
        inActiveStrokeWidth={6}
        duration={3000}
        onAnimationComplete={() => props.targetValue - props.currValue}
      />
      <Text style={{color: '#0080C9'}}>Remaining: {props.targetValue - props.currValue} {props.units}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF' ,
    borderRadius: 5,
    shadowColor: '#52BB40',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: .5,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5
  },
});