import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { Entypo, Feather } from '@expo/vector-icons';
import { Storage } from 'aws-amplify';

export default PhoneCamera = () => {
  /*
  textract code start
  */
 const extract = () => {
  var textract = new AWS.Textract({ region: 'us-east-1' });
  const params = {
    Document: {
      s3object: {
        Bucket: 'neil-thakur-test-bucket',
        Name: 'S7 Class Schedule.png'
      }
    }
  };
  //FeatureTypes: ['TABLES', 'FORMS',
  console.log ("NEIL-3")
  textract.detectDocumentText (params, (err, data) => {
    if(err) {
      console. log('Error', err);
    } else {
      console. log ('Text detected:', data.Blocks. map (block => block. Text). join('\n')) ;
  }});
 }

  const generatePictureKey = () => {
    const timestamp = Date.now();
    const randomNumber = Math.floor(Math.random() * 1000000);
    return `${timestamp}-${randomNumber}.jpeg`;
  };
  const fetchImageFromUri = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
  };
  const uploadPicture = async ( uri ) => {
    const key = generatePictureKey();
    console.log("PicUri: " + uri);
    const img = await fetchImageFromUri(uri);
    try {
      const result = await Storage.put(key, img, {
        contentType: 'image/jpeg'
      });
      console.log(result);
      return result.key;
    } catch (error) {
      console.error(error);
      throw error;
    }
    extract()
  };
  
  const pickImage = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      return;
    }
  // {mediaTypes: ImagePicker.MediaTypeOptions.Images,}
    const picture = await ImagePicker.launchImageLibraryAsync();
    if (!picture.cancelled) {
      //const asset = await MediaLibrary.createAssetAsync(picture.uri );
      //const fileUri = asset.uri;
      const fileUri = picture.uri;
  
      const uploadedPictureKey = await uploadPicture(fileUri);
      console.log(`The picture was uploaded with the key: ${uploadedPictureKey}`);
    }
  };
  
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();  
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

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

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <Feather style={styles.uploadButton} name="upload" size={60} color="white" onPress={pickImage}/>
        <Entypo name="circle" size={60} color="white" onPress={takePic}/>
      </View>
      <View
        style={styles.uploadButton}
        ></View>
      
      <StatusBar style="auto" />
    </Camera>
  );
};

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
  }
  
});