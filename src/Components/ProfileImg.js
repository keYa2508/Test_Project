import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Blue, Pink } from '../Constant/Colors'

const ProfileImg = ({source, gender, width, key}) => {
  return (
    <Image style={{
        width:width,
        height:width,
        borderWidth:width*(2/100), 
        borderColor: gender === 'male' ? Blue : Pink,
        borderRadius: width/2
    }}
    key={key}
    src={source}/>
  )
}

export default ProfileImg

const styles = StyleSheet.create({})