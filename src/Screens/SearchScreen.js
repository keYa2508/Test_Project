/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SearchBar} from 'react-native-screens';
import {Black, Gray, White} from '../Constant/Colors';
import {DarkMode, Height, Width} from '../Constant/Hooks';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {getApiData, getApiSearchData} from '../Services/ApiService';
import {createFilter} from 'react-native-search-filter';
import NameCard from '../Components/NameCard';
import filter from 'lodash.filter';
import {useNavigation} from '@react-navigation/native';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const navigation = useNavigation();

  const getData = async () => {
    // setLoading(true)
    const response = await getApiData();
    if (response) {
      const res = response.results;
      if (res) {
        const dataArray = [];
        for (let index = 0; index < res.length; index++) {
          const element = res[index];
          const singleData = {
            id: index,
            name: {
              title: element.name.title,
              first: element.name.first,
              last: element.name.last,
            },
            gender: element.gender,
            address:
              element.location.street.number +
              ',' +
              element.location.street.name +
              ',' +
              element.location.city +
              ',' +
              element.location.state +
              ',' +
              element.location.country +
              '-' +
              element.location.postcode,
            coordinates:
              element.location.coordinates.latitude +
              ',' +
              element.location.coordinates.longitude,
            email: element.email,
            dob: element.dob.date,
            age: element.dob.age,
            registeredDate: element.registered.date,
            registeredAge: element.registered.age,
            cellNo: element.cell,
            teleNo: element.phone,
            img: element.picture.medium,
            nationality: element.nat,
            userName: element.login.username,
          };
          dataArray.push(singleData);
          // console.log(singleData,"Search")
        }
        setData(dataArray);
        console.log(dataArray);
      }
    }
    // setLoading(false)
  };

  useEffect(() => {
    getData();
    console.log('Start');
  }, []);

  const contains = (user, query) => {
    const {name} = user;
    const {first, last} = name;
    if (first.includes(query) || last.includes(query)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSearch = query => {
    setSearch(query);
    const formatedQuery = query.toLowerCase();
    const filteredData = filter(data, user => {
      return contains(user, formatedQuery);
    });
    setSearchData(filteredData);
    console.log('SearcgData', searchData);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.SearchBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Fontisto color={Gray} name="angle-left" size={24} />
        </TouchableOpacity>
        <TextInput
          style={styles.Input}
          placeholder="Search Here..."
          placeholderTextColor={Gray}
          clearButtonMode="always"
          value={search}
          onChangeText={text => handleSearch(text)}
        />
      </View>
      <FlatList
        data={search ? searchData : data}
        style={{flex: 1, width: Width(100), paddingLeft: Width(10)}}
        renderItem={({item, index}) => {
          return <NameCard data={item} key={index} />;
        }}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: Width(2),
    paddingVertical: Height(1),
    backgroundColor: DarkMode() ? Black : White,
  },
  Input: {
    padding: Width(2),
    fontSize: 14,
    width: Width(80),
    color: Gray,
  },
  SearchBar: {
    backgroundColor: '#DCA968',
    paddingHorizontal: Width(2),
    borderRadius: Width(3),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
