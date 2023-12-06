import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({Name, style, TxtStyle, onPress}) => {
  return (
    <TouchableOpacity style={[style,{justifyContent:'center',alignItems:'center'}]} onPress={onPress}>
      <Text style={TxtStyle}>{Name}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})