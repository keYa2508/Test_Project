/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProfileImg from './ProfileImg';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import {Black, Blue, Pink, White} from '../Constant/Colors';
import {DarkMode, Height, Width} from '../Constant/Hooks';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import {SafeAreaView} from 'react-native-safe-area-context';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const PersonCard = ({route}) => {
  const {params} = route;
  console.log('params', params);
  const data = params.data;
  console.log(data);

  const IconColor = data?.gender === 'male' ? Blue : Pink;
  const IconSize = 16;

  const styles = StyleSheet.create({
    Container: {
      gap: Height(5),
      padding: Width(2),
      borderWidth: Width(1),
      borderColor: data?.gender === 'male' ? Blue : Pink,
      borderRadius: Width(2),
      margin: Width(2),
    },
    HeadContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      gap: Height(1),
    },
    BodyContainer: {
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: Height(1),
    },
    IconTXT: {
      flexDirection: 'row',
      alignContent: 'center',
      gap: 10,
      paddingHorizontal: Width(1),
    },
    Name: {
      fontSize: 24,
      color: DarkMode() ? White : Black,
      fontWeight: '900',
    },
    UserName: {
      fontSize: 18,
      color: DarkMode() ? White : Black,
      fontWeight: '700',
    },
    Txt: {
      fontSize: 14,
      color: DarkMode() ? White : Black,
      fontWeight: '500',
    },
    TxtBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: DarkMode() ? Black : White}}>
      <LinearGradient
        colors={
          DarkMode()
            ? ['#595958', '#8a8986', '#595958']
            : ['#b0afac', '#d1d1cf', '#b0afac']
        }
        style={styles.Container}>
        <View style={styles.HeadContainer}>
          <ProfileImg
            source={data?.img}
            width={100}
            gender={data?.gender}
            key={1}
          />
          <View style={styles.IconTXT}>
            <Fontisto
              name={data?.gender === 'male' ? 'male' : 'female'}
              size={40}
              color={IconColor}
            />
            <Text style={styles.Name}>
              {data?.name?.title +
                '.' +
                data?.name?.first +
                ' ' +
                data?.name?.last}
            </Text>
          </View>
          <View style={styles.IconTXT}>
            <Fontisto name="at" size={30} color={IconColor} />
            <Text style={styles.UserName}>{data?.userName}</Text>
          </View>
        </View>
        <View style={styles.BodyContainer}>
          <View style={styles.TxtBox}>
            <View style={styles.IconTXT}>
              <Entypo name="cake" color={IconColor} size={IconSize} />
              <Text style={styles.Txt}>Age : {data?.age}</Text>
            </View>
            <Text style={styles.Txt}> </Text>
          </View>
          <View>
            <View style={styles.IconTXT}>
              <Fontisto name="date" color={IconColor} size={IconSize} />
              <Text style={styles.Txt}>
                Date Of Birth : {moment(data?.dob).format('DD MMM, YYYY')}
              </Text>
            </View>
            <Text style={styles.Txt} />
          </View>
          <View>
            <View style={styles.IconTXT}>
              <Entypo name="location" color={IconColor} size={IconSize} />
              <Text style={styles.Txt}>Address : {data?.address}</Text>
            </View>
            <Text style={styles.Txt}> </Text>
          </View>
          <View>
            <View style={styles.IconTXT}>
              <MaterialCommunityIcons
                name="email"
                color={IconColor}
                size={IconSize}
              />
              <Text style={styles.Txt}>Email : {data?.email}</Text>
            </View>
            <Text style={styles.Txt}> </Text>
          </View>
          <View>
            <View style={styles.IconTXT}>
              <MaterialCommunityIcons
                name="cellphone"
                color={IconColor}
                size={IconSize}
              />
              <Text style={styles.Txt}>CellPhone : {data?.email}</Text>
            </View>
            <Text style={styles.Txt}> </Text>
          </View>
          <View>
            <View style={styles.IconTXT}>
              <Foundation name="telephone" color={IconColor} size={IconSize} />
              <Text style={styles.Txt}>TelePhone : {data?.teleNo}</Text>
            </View>
            <Text style={styles.Txt} />
          </View>
          <View>
            <View style={styles.IconTXT}>
              <MaterialCommunityIcons
                name="registered-trademark"
                color={IconColor}
                size={IconSize}
              />
              <Text style={styles.Txt}>
                Registered Date :{' '}
                {moment(data?.registeredDate).format('DD MMM, YYYY')}
              </Text>
            </View>
            <Text style={styles.Txt}> </Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default PersonCard;
