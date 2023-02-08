import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'

export default Camera = () => {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);
    useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            setHasCameraPermission(cameraStatus.status === 'granted');
        })();
    },[])
    return(
        <Camera style={{ flex: 1 }} type={type} ref={ref => { setCamera(ref) }}>
            <View
                style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                }}
            >
    <TouchableOpacity
      style={{
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
      }}
      onPress={() => {
        setType(
          type === Camera.Constants.Type.back
            ? Camera.Constants.Type.front
            : Camera.Constants.Type.back
        );
      }}>
      <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
    </TouchableOpacity>
  </View>
  <TouchableOpacity onPress={takePicture} style={styles.takePicture}>
  <Text style={styles.takePictureText}> Take Picture </Text>
</TouchableOpacity>

</Camera>


    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    camera: {
        flex : 1,
        borderRadius: 20,
      }
});