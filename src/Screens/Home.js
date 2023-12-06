/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {getApiData} from '../Services/ApiService';
import {DarkMode, Height, Width} from '../Constant/Hooks';
import {Black, Blue, Gray, Green, White} from '../Constant/Colors';
import NameCard from '../Components/NameCard';
import {useNavigation} from '@react-navigation/native';
import {PersonCard_Nav} from '../Navigations';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(false);
  // const [selectGender, setSelectGender] = useState({male:false,female:false})
  const [genderSelect, setGenderSelect] = useState(false);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
      headerSearchBarOptions: {
        placeholder: 'Search...',
        onChangeText: e => handleSearch(e.nativeEvent.text),
        onCancelButtonPress: () => getData(),
        onSearchButtonPress: () => setPage(6),
      },
      headerBackButtonMenuEnabled: true,
    });
  }, [navigation]);

  const handleSearch = text => {
    if (text) {
      // const filteredData = filter(data, user => {
      // return contains(user, formatedQuery);
      // });
      const filteredData = data.filter(x => {
        const {name} = x;
        const {first, last} = name;
        return (
          first.toLowerCase().includes(text.toLowerCase()) ||
          last.toLowerCase().includes(text.toLowerCase())
        );
      });
      setData(filteredData);
    } else {
      getData();
    }
  };

  // const contains = (user, query) => {
  //   const {name} = user;
  //   const {first, last} = name;
  //   if (first.includes(query) || last.includes(query)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  const getData = async () => {
    setRefresh(true);
    const gender = genderSelect ? 'female' : 'male';
    // const response = await getApiData(page)
    const response = await getApiData(gender);
    console.log(response);
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
            coordinates: {
              lat: element.location.coordinates.latitude,
              lng: element.location.coordinates.longitude,
            },
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
        }
        setData(dataArray);
        console.log(data);
      }
    }
    setRefresh(false);
  };

  // const selectMale = () => {
  //     if(selectGender.male){
  //         setSelectGender((prev) =>{
  //             return {
  //                 ...prev,
  //                 male:!prev.male,
  //                 female:false
  //             }
  //         })
  //         getData()
  //     }
  //     else{
  //         setSelectGender((prev) =>{
  //             return {
  //                 ...prev,
  //                 male:!prev.male,
  //                 female:false
  //             }
  //         })
  //         getSearchData('male')
  //     }
  // }
  // const selectFemale = () => {
  //     if(selectGender.female){
  //         setSelectGender((prev) =>{
  //         return {
  //             ...prev,
  //             female:!prev.female,
  //             male:false
  //         }
  //     })
  //     getData()
  // }
  // else{
  //     setSelectGender((prev) =>{
  //         return {
  //             ...prev,
  //             female:!prev.female,
  //             male:false
  //         }
  //     })
  //     getSearchData('female')
  // }
  // }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // useEffect(() => {
  //     getData()
  // }, [page])
  useEffect(() => {
    getData();
  }, [genderSelect]);

  // useEffect(() => {
  //     if(selectGender.male || selectGender.female){}
  //     else{
  //         getData()
  //     }
  // },[selectGender.male,selectGender.female])

  const nextPage = () => {
    if (page < 6) {
      // setSelectGender((prev) => {
      //     return {
      //         ...prev,
      //         male:false,
      //         female:false
      //     }
      // })
      setPage(page + 1);
    }
  };

  const onRefresh = () => {
    // setSelectGender((prev) => {
    //     return {
    //         ...prev,
    //         male:false,
    //         female:false
    //     }
    // })
    getData();
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            alignSelf: 'center',
          }}>
          <Text style={{color: DarkMode() ? White : Blue, fontSize: 24}}>
            Loading...
          </Text>
          <ActivityIndicator
            color={DarkMode() ? White : Blue}
            size={Width(10)}
          />
        </View>
      ) : (
        <View>
          {/* <View style={{flexDirection:'row',gap:Width(10),alignItems:'center',justifyContent:'center',padding:Height(1)}}>
                <BouncyCheckbox
                size={24}
                fillColor={Green}
                unfillColor="#FFFFFF"
                text="Male"
                textStyle={{ fontSize:18,textDecorationLine:'none',color:DarkMode() ? White : Black }}
                isChecked={selectGender.male}
                onPress={(isChecked) => {selectMale()}}
                disableBuiltInState
                />
                <BouncyCheckbox
                size={24}
                fillColor={Green}
                unfillColor="#FFFFFF"
                text="Female"
                textStyle={{ fontSize:18,textDecorationLine:'none', color:DarkMode() ? White : Black }}
                isChecked={selectGender.female}
                onPress={(isChecked) => {selectFemale()}}
                disableBuiltInState
                />
            </View> */}
          {data.length > 0 && (
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: DarkMode() ? White : Blue, fontSize: 20}}>
                Male
              </Text>
              <Switch
                trackColor={{
                  false: DarkMode() ? White : Gray,
                  true: DarkMode() ? White : Gray,
                }}
                thumbColor={genderSelect ? Green : Blue}
                value={genderSelect}
                onValueChange={() => setGenderSelect(!genderSelect)}
              />
              <Text style={{color: DarkMode() ? White : Blue, fontSize: 20}}>
                Female
              </Text>
            </View>
          )}
          {data.length > 0 ? (
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              style={{flex: 1, width: Width(100)}}
              renderItem={({item, index}) => {
                return (
                  <NameCard
                    data={item}
                    key={index}
                    onPress={() =>
                      navigation.navigate(PersonCard_Nav, {data: item})
                    }
                  />
                );
              }}
              keyExtractor={item => item.id.toString()}
              alwaysBounceVertical
              onRefresh={() => {
                onRefresh();
              }}
              refreshing={refresh}
              onEndReached={() => nextPage()}
              onEndReachedThreshold={0.3}
              ListFooterComponent={
                loading ? null : page === 6 ? (
                  <View style={{width: Width(100), height: Height(5)}} />
                ) : (
                  <ActivityIndicator
                    size={30}
                    color={DarkMode() ? White : Blue}
                  />
                )
              }
            />
          ) : (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: Height(10),
              }}>
              <AntDesign
                name="unknowfile1"
                color={DarkMode() ? White : Blue}
                size={Width(30)}
              />
              <Text style={{color: DarkMode() ? White : Blue, fontSize: 24}}>
                No Data
              </Text>
            </View>
          )}
        </View>
      )}
      {/* <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity onPress={() => previousePage()} style={styles.Active}>
                <AntDesign name='left' size={15}/>
            </TouchableOpacity>
            <Text>{page}</Text>
            <TouchableOpacity onPress={() => nextPage()} style={styles.Active}>
                <AntDesign name='right' size={15}/>
            </TouchableOpacity>
        </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DarkMode() ? Black : White,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    paddingHorizontal: Width(0.5),
    paddingVertical: Height(1),
    backgroundColor: Green,
    width: Width(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Width(2),
    marginBottom: Height(10),
  },
  Active: {
    padding: Width(1),
    borderRadius: 50,
  },
});

export default Home;
