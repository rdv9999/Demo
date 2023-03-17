import { Text, StyleSheet, View, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Constant from '../Config/Constant'

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import SearchFilter from './Component/SearchFilter';

const { height, width } = Dimensions.get('window')
const SearchScreen = () => {

  const words=[
    {
        name:'rajat',
        id:'1',
    },
    {
      name:'dharmesh',
      id:'2',
  },
  {
    name:'nayan',
    id:'3',
},
{
  name:'khan',
  id:'4',
},
{
  name:'parth',
  id:'5',
},

{
  name:'gujarat',
  id:'6',
},
{
  name:'parth',
  id:'7',
},
{
  name:'gavrau',
  id:'8',
},
  ];
  const [input,setInput]=useState("");
  // console.log(input);
  return (
    <View style={{ flex: 1, backgroundColor: Constant.color.WHITE }}>
      <View
        style={{
          padding: 5,
          marginTop: 10,
          flexDirection: 'row',
          width: '95%',
          backgroundColor: 'white',
          borderRadius: 10,
          alignItems: 'center',
          alignSelf: 'center',
          elevation: 3,
        }}
      >
        <Feather
          name="search"
          size={20}
          color="grey"
          style={{ marginLeft: 1, marginRight: 4 }}
        />
        <TextInput
          value={input}
          onChangeText={(text)=>
            setInput(text)
          }
          style={{ fontSize: 18 }}
          placeholder='search'
          placeholderTextColor={'grey'}
        />
      </View>

<SearchFilter
data={words}
input={input}
setInput={setInput}
/>

      
    </View>
  )
}
export default SearchScreen;

const styles = StyleSheet.create({

  // cardStyle: {
  //   marginTop: 20,
  //   marginBottom:20,
  //   width: '95%',
  //   justifyContent: 'center',
  //   alignSelf: 'center',
  //   // padding: 10,
  //   borderColor: 'red',
  //   borderWidth: 0.5,
  //   elevation: 4,
  //   borderRadius: 12,
  //   borderColor: Constant.color.WHITE,
  //   backgroundColor: Constant.color.WHITE,

  //   // flex: 1,
  //   // flexDirection: 'row',
  //   // width: '95%',
  //   // aspectRatio: 5.7,
  //   // padding: 10,
  //   // alignSelf: 'center',
  //   // alignContent: 'center',
  //   // borderWidth: 0.5,
  //   // borderRadius: 8,
  //   // marginTop: 10,
  //   // elevation: 5,

  // }
})