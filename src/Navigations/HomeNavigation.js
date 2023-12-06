import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../Screens/Login'
import Home from '../Screens/Home'

const HomeNavigation = () => {

    const HomeStack = createNativeStackNavigator()

  return (
    <NavigationContainer>
        <HomeStack.Navigator screenOptions={{headerShown:false}} initialRouteName='Login'>
            <HomeStack.Screen name='Login' component={Login}/>
            <HomeStack.Screen name='Home' component={Home}/>
        </HomeStack.Navigator>
    </NavigationContainer>
  )
}

export default HomeNavigation

const styles = StyleSheet.create({})