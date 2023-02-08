import { StatusBar } from 'expo-status-bar';
import { React } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Amplify from 'aws-amplify';
import Card from './Card'
import LoginPage from './Login';
import Dashboard from './Dashboard';
import Camera from './Camera';

export default function App() {
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
    <View><Camera /></View>
    
  );
    
    

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
    justifyContent: 'center',
  },
  camera: {
    flex : 1,
    borderRadius: 20,

  }
});
