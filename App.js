import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CameraPage from './src/Screens/CameraPage';
import PersonCard from './src/Components/PersonCard';
import Home from './src/Screens/Home';
import Login from './src/Screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  Camera_Nav,
  Home_Nav,
  Login_Nav,
  Map_Nav,
  PersonCard_Nav,
  Photo_Nav,
} from './src/Navigations';
import {DarkMode} from './src/Constant/Hooks';
import {Blue, Gray} from './src/Constant/Colors';
import PhotoScreen from './src/Screens/PhotoScreen';
import Maps from './src/Screens/Maps';

const HomeStack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <HomeStack.Navigator
          screenOptions={{
            headerShown: true,
            headerStyle: {backgroundColor: DarkMode() ? Gray : Blue},
          }}
          initialRouteName={Login_Nav}>
          <HomeStack.Screen
            name={Login_Nav}
            component={Login}
            options={{headerShown: false}}
          />
          <HomeStack.Screen name={Home_Nav} component={Home} />
          <HomeStack.Screen name={PersonCard_Nav} component={PersonCard} />
          <HomeStack.Screen name={Camera_Nav} component={CameraPage} />
          <HomeStack.Screen name={Photo_Nav} component={PhotoScreen} />
          <HomeStack.Screen name={Map_Nav} component={Maps} />
        </HomeStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
