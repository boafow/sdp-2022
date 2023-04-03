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

export default PhoneCamera = () => {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();  
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const [fileName, setFileName] = useState(null);
  const [userName, setUserName] = useState('nmt18004');
  const [textractJSON, setTextractJSON] = useState(null);

  /* react-native hook to get camera permissions */
  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  /* shows an error message on screen if camera permissions pending / not granted */
  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } 
  else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  /* if photo is taken, display preview + save button + discard button */
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

  /* takes textractJSON and uploads to DynamoDB via API Gateway + Lambda */
  const saveTextractJSON = async () => {
    var tmpBody = {
      'username': userName,
      'filename': fileName,
      'date': getCurrentDate(),
      'time': getCurrentTime(),
      //'mealDetails': JSON.parse(textractJSON)
      //'mealDetails': JSON.stringify(textractJSON)
      'mealDetails': textractJSON
    }
    console.log(tmpBody);

    var requestOptions = {
      method: 'POST',
      body: JSON.stringify(tmpBody)
    }
    console.log('\n');
    console.log(requestOptions);

    const url = 'https://y3xs5g62z3.execute-api.us-east-1.amazonaws.com/test/addMealRecord';
    await fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const statusCode = data['statusCode'];
      if(statusCode === 200){
        setTextractJSON(null);
      }
    })
    .catch(error => console.error(error));
  }
  
  /* if we receive JSON from fetchTextractResults API, render editable text */
  if (textractJSON) {
    //const [text, setText] = useState('');

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
        <Button title="Log to Console" onPress={() => console.log(textractJSON)} />
        <Button title="Save to Meal History" onPress={saveTextractJSON}/>
        <Button title="Cancel" onPress={() => setTextractJSON(undefined)} />
      </SafeAreaView>
    );
  }

  /* hardcoded keyPrefix=username */
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
        throw new Error("\nFAILURE: Failed to upload image to S3!");
      }
      else {
        console.log("\nSUCCESS: Successfully uploaded image to S3! \n\tS3 Bucket URL: ", response.headers.location);
      }
    })
    .catch(error => { console.log(error) })
    .progress((e) => console.log('S3 Upload Progress:', (e.loaded / e.total).toLocaleString('en-US', { style: 'percent' })));
    return fileName;
  }

  /* linked to circular button */
  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  /* linked to upload button; triggers S3 upload via uploadPicture(); fetches Textract result via API */
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
          /* upload image to S3 and return file name */
          uploadedPictureKey = await uploadPictureToS3(fileURI, tmpFileName);
          setFileName(uploadedPictureKey);

          /* fetches Textract result via API */
          var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          const url = `https://y3xs5g62z3.execute-api.us-east-1.amazonaws.com/test/getTextractResults?username=${userName}&filename=${uploadedPictureKey}`
          console.log('\n' + url);
          await fetch(url, requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log(data); 
            //setTextractJSON(data); 
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

  /*contains HTML code for camera + circle button + upload button */
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

/* stylesheet */
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