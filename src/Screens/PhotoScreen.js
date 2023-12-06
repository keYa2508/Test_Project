/* eslint-disable react-native/no-inline-styles */
import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {DarkMode, Height, Width} from '../Constant/Hooks';
import {Black, White} from '../Constant/Colors';
import {FetchImage} from '../Constant/Storage';

const PhotoScreen = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    getImageData();
  }, []);

  const getImageData = async () => {
    try {
      const value = await FetchImage();
      setData(value);
    } catch (e) {
      console.log('Error', e);
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{flex: 1, width: Width(100)}}
        renderItem={({item, index}) => {
          return <img src={data} alt="Images" />;
        }}
      />
    </View>
  );
};

export default PhotoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DarkMode() ? Black : White,
  },
  Img: {
    width: Width(90),
    height: Height(80),
  },
});
