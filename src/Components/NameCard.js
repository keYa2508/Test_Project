import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ProfileImg from './ProfileImg';
import {DarkMode, Height, Width} from '../Constant/Hooks';
import {Black, Gray, White} from '../Constant/Colors';

const NameCard = ({data, key, onPress}) => {
  const {name, img, gender, email} = data;
  return (
    <TouchableOpacity key={key} style={styles.nameCard} onPress={onPress}>
      <ProfileImg source={img} width={Width(15)} key={key} gender={gender} />
      <View>
        <Text style={styles.Text}>
          {name?.title + '. ' + name?.first + ' ' + name?.last}
        </Text>
        <Text style={{color: DarkMode() ? White : Black}}>{email}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NameCard;

const styles = StyleSheet.create({
  nameCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Width(3),
    paddingVertical: Height(1),
    gap: Width(3),
    paddingLeft: Width(10),
    borderBottomColor: DarkMode() ? Gray : Black,
    borderBottomWidth: 1,
  },
  Text: {
    fontSize: Width(4),
    fontWeight: '900',
    color: DarkMode() ? White : Black,
  },
});
