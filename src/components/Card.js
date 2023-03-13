import React, { useState } from 'react';
import { View, StyleSheet, Text, Modal } from 'react-native';
import CircularProgress, { CircularProgressBase } from 'react-native-circular-progress-indicator';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default Card = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [macroType, setMacroType] = useState('');
  const [macrosEaten, setMacrosEaten] = useState(0);
  const [macroGoal, setMacroGoal] = useState(0);

  const percentage = macrosEaten / macroGoal * 100;

  return (
    <View style={styles.container}>
      <View style={styles.box1}>

        <CircularProgressBase
          activeStrokeWidth={25}
          inActiveStrokeWidth={25}
          inActiveStrokeOpacity={0.2}
          value={(props.calValue / props.calTargetValue) * 100}
          radius={125}
          activeStrokeColor={'#efad32'}
          inActiveStrokeColor={'#efad32'}>

          <CircularProgressBase
            activeStrokeWidth={25}
            inActiveStrokeWidth={25}
            inActiveStrokeOpacity={0.2}
            value={(props.carbValue / props.carbTargetValue) * 100}
            radius={100}
            activeStrokeColor={'#55ba45'}
            inActiveStrokeColor={'#55ba45'}>

            <CircularProgressBase
              activeStrokeWidth={25}
              inActiveStrokeWidth={25}
              inActiveStrokeOpacity={0.2}
              value={(props.proteinValue / props.proteinTargetValue) * 100}
              radius={75}
              activeStrokeColor={'#0295d1'}
              inActiveStrokeColor={'#0295d1'}>

              <CircularProgressBase
                activeStrokeWidth={25}
                inActiveStrokeWidth={25}
                inActiveStrokeOpacity={0.2}
                value={(props.fatValue / props.fatTargetValue) * 100}
                radius={50}
                activeStrokeColor={'#18dcff'}
                inActiveStrokeColor={'#18dcff'} />
            </CircularProgressBase>
          </CircularProgressBase>
        </CircularProgressBase>
      </View>

      <View style={styles.box2}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            setModalVisible(true);
            setMacroType('calories');
            setMacrosEaten(props.calValue);
            setMacroGoal(props.calTargetValue);
          }}>
          <Text style={styles.buttonText}>Calories</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            setModalVisible(true);
            setMacroType('carbs');
            setMacrosEaten(props.carbValue);
            setMacroGoal(props.carbTargetValue);
          }}>
          <Text style={styles.buttonText}>Carbs</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button3}
          onPress={() => {
            setModalVisible(true);
            setMacroType('proteins');
            setMacrosEaten(props.proteinValue);
            setMacroGoal(props.proteinTargetValue);
          }}>
          <Text style={styles.buttonText}>Proteins</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button4}
          onPress={() => {
            setModalVisible(true);
            setMacroType('fats');
            setMacrosEaten(props.fatValue);
            setMacroGoal(props.fatTargetValue);
          }}>
          <Text style={styles.buttonText}>Fats</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} animationType="none">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{macroType.toUpperCase()}</Text>
          <View style={styles.progressContainer}>
            <CircularProgress
              radius={125}
              activeStrokeWidth={25}
              inActiveStrokeWidth={25}
              value={percentage}
              tintColor="#efad32"
              backgroundColor="#3d5875"
              onAnimationComplete={() => console.log('onAnimationComplete')}
              lineCap="round">
              {() => <Text style={styles.progressText}>{percentage.toFixed(1)}%</Text>}
            </CircularProgress>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Macros Eaten: {macrosEaten}g</Text>
            <Text style={styles.infoText}>Macro Goal: {macroGoal}g</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    flex: 2,
    width: '50%',
  },
  box2: {
    flex: 1,
    width: '40%',
  },
  button1: {
    backgroundColor: '#efad32',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  button2: {
    backgroundColor: '#55ba45',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  button3: {
    backgroundColor: '#0295d1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  button4: {
    backgroundColor: '#18dcff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
  },
  modalTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  progressContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  progressText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  infoText: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 10,
  },
  closeButton: {
    backgroundColor: '#efad32',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});
