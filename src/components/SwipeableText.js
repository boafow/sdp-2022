import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swipeable from 'react-native-swipeable';

function SwipeableText({ text, onDelete }) {
  const [swipeable, setSwipeable] = useState(null);

  const onSwipeableWillOpen = () => {
    if (swipeable) {
      swipeable.recenter();
    }
  };

  const onRightButtonsOpenRelease = () => {
    if (swipeable) {
      swipeable.recenter();
      onDelete();
    }
  };

  const rightButtons = [
    
    <View style={styles.rightButton}>
      <Text style={styles.rightButtonText}>Delete</Text>
    </View>
  ];

  return (
    <View style={styles.container}>
        <Swipeable
      onRef={setSwipeable}
      onSwipeableWillOpen={onSwipeableWillOpen}
      rightButtons={rightButtons}
      onRightButtonsOpenRelease={onRightButtonsOpenRelease}
        >
        <View style={styles.logText}>
            <View style={styles.foodItemText}>
                {text}
            </View>
        </View>
        </Swipeable>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    overflow: 'hidden'
  },
  rightButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f00',
    marginTop: 3
  },
  rightButtonText: {
    color: '#fff',
    alignSelf: 'flex-start'
  },
  logText:{
    flex: 1,
    marginTop: 3,
    

  },
  foodItemText: {
    marginTop: 4,
    backgroundColor:'//#region F5F5DC',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    minHeight: 35,
    borderRadius: 10,
  },
});

export default SwipeableText;
