import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, Alert, TextInput, ScrollView, Keyboard } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { Entypo, Feather } from '@expo/vector-icons';
import { RNS3 } from 'react-native-aws3';
import credentials from '../../aws-credentials.json';
import { getS3FileName, getCurrentDate, getCurrentTime } from './S3DateTimeFunctions';
import { getGLOBAL_USERNAME } from './GlobalUsername';

export default PhoneCamera = () => {
  /* REACT-NATIVE STATES FOR CAMERA, PHOTO, FILE, USERNAME, TEXTRACT-JSON */
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();  
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const [fileName, setFileName] = useState(null);
  const userName = getGLOBAL_USERNAME();
  const [textractJSON, setTextractJSON] = useState(null);

  /* REACT-NATIVE HOOK TO GET CAMERA PERMISSIONS */
  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  /* SHOWS AN ERROR MESSAGE ON SCREEN IF CAMERA PERMISSIONS PENDING / NOT GRANTED  */
  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } 
  else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  /* IF PHOTO IS TAKEN, DISPLAY PREVIEW + SAVE BUTTON + DISCARD BUTTON */
  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };
    
    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
        <Button title="Share" onPress={sharePic} />
        {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
        <Button title="Discard" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    );
  }

  /* GET USER INPUT FOR MEAL TIME (BREAKFAST, LUNCH, OR DINNER) */
  const getMealTime = async () => {
    const tmpMealTime = await new Promise((resolve, reject) => {
      Alert.alert(
        'Choose an meal time',
        'Which meal would you like to log this item for?',
        [
          { text: 'Breakfast', onPress: () => {resolve('breakfast');} },
          { text: 'Lunch', onPress: () => {resolve('lunch');} },
          { text: 'Dinner', onPress: () => {resolve('dinner');} },
        ],
      );
    });
    console.log('PhoneCamera.js', tmpMealTime);
    return tmpMealTime;
  }

  /* TAKES TEXTRACTJSON AND UPLOADS TO DYNAMODB VIA API GATEWAY + LAMBDA */
  const saveTextractJSON = async () => {
    const tmpMealTime = await getMealTime();
    var tmpBody = {
      'username': userName,
      'filename': fileName,
      'date': getCurrentDate(),
      'time': getCurrentTime(),
      'mealDetails': textractJSON,
      'mealCalories': JSON.parse(textractJSON)['calories'],
      'mealTime': tmpMealTime
    }
    console.log('PhoneCamera.js', tmpBody);

    var requestOptions = {
      method: 'POST',
      body: JSON.stringify(tmpBody)
    }
    console.log('\n');
    console.log('PhoneCamera.js', requestOptions);

    const url = 'https://y3xs5g62z3.execute-api.us-east-1.amazonaws.com/test/addMealRecord';
    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log('PhoneCamera.js', data);
      const statusCode = data['statusCode'];
      if(statusCode === 200){
        setTextractJSON(null);
      }
    })
    .catch(error => console.error(error));
  }
  
  /* IF WE RECEIVE JSON FROM FETCHTEXTRACTRESULTS API, RENDER EDITABLE TEXT  */
  if (textractJSON) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{height: '45%', width: '75%'}}>
          <Text style={{textAlign: 'center'}}>Double tap to edit or close keyboard</Text>
          <Text style={{textAlign: 'center'}}>---</Text>
          <ScrollView style={styles.jsonEditor}>
            <TextInput style={{fontSize: 20}}
              value={textractJSON}
              onChangeText={setTextractJSON}
              multiline={true}
              onSubmitEditing={() => Keyboard.dismiss()}
              blurOnSubmit={true}
              returnKeyType={'done'}
            />
          </ScrollView>
        </View>
        <Button title="Log to Console" onPress={() => console.log('PhoneCamera.js', textractJSON)} />
        <Button title="Save to Meal History" onPress={saveTextractJSON}/>
        <Button title="Cancel" onPress={() => setTextractJSON(undefined)} />
      </SafeAreaView>
    );
  }

  /* UPLOADS PHOTO FILE TO S3; EACH USER HAS PHOTOS STORED IN THEIR OWN FOLDER */
  const uploadPictureToS3 = async (tmpURI, tmpFileName) => {
    const tmpKeyPrefix = userName + '/';
    const fileName = getS3FileName(tmpFileName);

    const options = {
      keyPrefix: tmpKeyPrefix,
      bucket: credentials.bucket,
      region: credentials.region,
      accessKey: credentials.accessKeyId,
      secretKey: credentials.secretAccessKey,
      successActionStatus: 200,
    };
    const file = {
      uri: tmpURI,
      name: fileName,
      type: 'image/jpeg',
    };
    const response = await RNS3.put(file, options).then(response => {
      if (response.status !== 200) {
        throw new Error("PhoneCamera.js: FAILURE: Failed to upload image to S3!");
      }
      else {
        console.log("PhoneCamera.js: SUCCESS: Successfully uploaded image to S3! \n\tS3 Bucket URL: ", response.headers.location);
      }
    })
    .catch(error => { console.log('PhoneCamera.js', error) })
    .progress((e) => console.log('PhoneCamera.js', 'S3 Upload Progress:', (e.loaded / e.total).toLocaleString('en-US', { style: 'percent' })));
    return fileName;
  }

  /* LINKED TO CIRCULAR SNAPCHAT STYLE PHOTO BUTTON */
  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };
    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  /* LINKED TO UPLOAD BUTTON; TRIGGERS S3 UPLOAD VIA UPLOADPICTURE(); FETCHES TEXTRACT RESULT VIA API */
  const pickImage = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      return;
    }
    const picture = await ImagePicker.launchImageLibraryAsync();
    
    if (!picture.cancelled)  {
      const fileURI = picture.uri;
      let uploadedPictureKey = '';
      Alert.prompt('Enter nutrition label name', null, (tmpFileName) => {
        (async () => {
          /* UPLOAD IMAGE TO S3 AND RETURN FILE NAME */
          uploadedPictureKey = await uploadPictureToS3(fileURI, tmpFileName);
          setFileName(uploadedPictureKey);

          /* FETCHES TEXTRACT RESULT VIA API */
          var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          const url = `https://y3xs5g62z3.execute-api.us-east-1.amazonaws.com/test/getTextractResults?username=${userName}&filename=${uploadedPictureKey}`
          console.log('PhoneCamera.js', '\n' + url);
          await fetch(url, requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log('PhoneCamera.js', data); 
            setTextractJSON(JSON.stringify(data, null, 2));
          })
          .catch(error => console.error(error));
        })();
      });
    }

    if (picture.cancelled) {
      setFileName(null);
    }
  };

  /* CONTAINS HTML CODE FOR CAMERA + CIRCLE BUTTON + UPLOAD BUTTON */
  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <Feather style={styles.uploadButton} name="upload" size={60} color="white" onPress={pickImage}/>
        <Entypo name="circle" size={60} color="white" onPress={takePic}/>
      </View>
      <View style={styles.uploadButton}>
      </View>
      <StatusBar style="auto" />
    </Camera>
  );
};

/* STYLESHEET */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    padding: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1
  },
  uploadButton:{
    alignSelf: 'flex-end',
    paddingRight: 20
  },
  jsonEditor: {
    borderColor: 'black', 
    borderBottomWidth: 5, 
    borderTopWidth: 5, 
    borderLeftWidth: 5, 
    borderRightWidth: 5
  }
});