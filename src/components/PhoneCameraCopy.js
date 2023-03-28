import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, Alert } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { Entypo, Feather } from '@expo/vector-icons';
import { Storage } from 'aws-amplify';
import { RNS3 } from 'react-native-aws3';
import credentials from '../../aws-credentials.json';
import AWS from 'aws-sdk/dist/aws-sdk-react-native';
import { S3, Textract } from 'aws-sdk';


export default PhoneCamera = () => {

  const photoName = 'pasta-1.jpg'; 

  const fetchImageFromUri = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
  };

  const uploadPicture = async (tmpURI) => {
    const NEILaccessKeyId = credentials.accessKeyId;
    const NEILsecretAccessKey = credentials.secretAccessKey;
    const NEILregion = credentials.region;

    const options = {
      /* keyPrefix: 'uploads/', */
      bucket: 'neil-thakur-test-bucket-2',
      region: NEILregion,
      accessKey: NEILaccessKeyId,
      secretKey: NEILsecretAccessKey,
      successActionStatus: 201,
    };
    const file = {
      uri: tmpURI,
      name: photoName,
      type: 'image/jpeg',
    };
    const response = await RNS3.put(file, options).then(response => {
      if (response.status !== 201) {
        throw new Error("FAILURE: Failed to upload image to S3!");
      }
      else {
        console.log(
          "SUCCESS: Successfully uploaded image to S3! \n\tS3 Bucket URL: ",
          response.body.postResponse.location
        );
      }
    })
    .catch(error => { console.log(error) })
    .progress((e) => console.log(e.loaded / e.total));
    return photoName;
  }

  const getTextractAnalysis = async () => {
    const NEILaccessKeyId = credentials.accessKeyId;
    const NEILsecretAccessKey = credentials.secretAccessKey;
    const NEILregion = credentials.region;

    //hard code AWS credentials
    AWS.config.update({
      accessKeyId: NEILaccessKeyId,
      secretAccessKey: NEILsecretAccessKey,
      region: NEILregion
    });

    const params = {
      Document: {
        S3Object: {
          Bucket: 'neil-thakur-test-bucket-2',
          Name: photoName
        },
      },
    };
    var lowercaseArray = [];
    var textract = new AWS.Textract({ region: 'us-east-1' });
    const response = await textract.detectDocumentText(params, (err, data) => {
      if (err) {
        console.log('FAILURE: Error analyzing photo:', err);
      } else {
        // // detectDocumentText() --> detects text in a document
        console.log("Got response from Textract! Now parsing...");    
        const blocks = data.Blocks;
        var textArray = []
        for (let i = 0; i < blocks.length; i++) {
          if(blocks[i].BlockType === 'LINE') {
            textArray.push(blocks[i].Text);
          }
        }
        lowercaseArray = textArray.map(function(item){
          return item.toLowerCase();
        })
        console.log(lowercaseArray);
      }
    });
    return lowercaseArray;
  }
  
  /* linked to upload button */
  const pickImage = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      return;
    }
    const picture = await ImagePicker.launchImageLibraryAsync();
    if (!picture.cancelled) {
      const fileUri = picture.uri;
      const uploadedPictureKey = await uploadPicture(fileUri);
      console.log(`The picture was uploaded with the key: ${uploadedPictureKey}`);
      const lowercaseArray = await getTextractAnalysis();
      console.log('SUCCESS: Recieved AWS Textract document analysis of S3 object!\n');
      const tmp123 = await uploadTextractAnalysisToDynamoDB(lowercaseArray);
    }
  };
  
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();  
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

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
  }
  
});