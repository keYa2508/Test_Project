/* eslint-disable react-native/no-inline-styles */
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Black, Green, White} from '../Constant/Colors';
import {DarkMode, Height, Width} from '../Constant/Hooks';
import {bg_Img} from '../Assets';
import {useNavigation} from '@react-navigation/native';
import {Camera_Nav, Home_Nav, Map_Nav} from '../Navigations';

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      <ImageBackground source={bg_Img} style={styles.bgImg}>
        <View
          style={{
            height: Height(40),
            width: Width(100),
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Text style={{color: White, fontSize: Width(10), fontWeight: 'bold'}}>
            Welcome
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(Home_Nav)}>
          <Text style={{color: White, fontSize: Width(5), fontWeight: 'bold'}}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(Camera_Nav)}>
          <Text style={{color: White, fontSize: Width(5), fontWeight: 'bold'}}>
            Camera
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(Map_Nav)}>
          <Text style={{color: White, fontSize: Width(5), fontWeight: 'bold'}}>
            Map
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: DarkMode() ? Black : White,
  },
  bgImg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Height(100),
    width: Width(100),
  },
  button: {
    backgroundColor: Green,
    width: Width(70),
    paddingVertical: Height(2),
    borderRadius: Width(5),
    marginBottom: Height(1),
    alignItems: 'center',
  },
});
