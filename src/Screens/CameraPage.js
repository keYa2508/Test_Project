/* eslint-disable no-unused-vars */
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraDevices,
  useCameraFormat,
} from 'react-native-vision-camera';
import {Gray, White} from '../Constant/Colors';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {Photo_Nav} from '../Navigations';
import {SaveImage} from '../Constant/Storage';

const CameraPage = () => {
  const device = useCameraDevices('back');
  const formate = useCameraFormat(device, [{photoHdr: true}, {videoHdr: true}]);
  const camera = useRef();
  const navigation = useNavigation();

  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicroPhonePermission = await Camera.requestMicrophonePermission();
  };

  if (device == null) {
    return <ActivityIndicator />;
  }

  const takePicture = async () => {
    try {
      const photo = await camera.current.takePhoto({
        enableShutterSound: false,
        quality: 'High',
      });
      setImgSrc(photo.path);
      await SaveImage(photo.path);
    } catch (e) {
      console.log('Data not stored..... ', e);
    }
  };
  return (
    <View style={styles.Container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        ref={camera}
        photo
        format={formate}
        photoHdr={formate.supportsPhotoHdr}
        videoHdr={formate.supportsVideoHdr}
      />
      <TouchableOpacity
        style={styles.clickButton}
        onPress={() => takePicture()}
      />
      <TouchableOpacity
        style={styles.imgBox}
        onPress={() => navigation.navigate(Photo_Nav)}>
        {imgSrc === '' ? (
          <Feather name="image" size={60} color={Gray} />
        ) : (
          <Image
            source={{uri: 'file://' + imgSrc}}
            alt="Img"
            style={styles.img}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CameraPage;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  clickButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: White,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 30,
  },
  img: {
    width: 60,
    height: 60,
  },
  imgBox: {
    width: 60,
    height: 60,
    position: 'absolute',
    alignSelf: 'flex-start',
    bottom: 20,
    marginLeft: 20,
  },
});
