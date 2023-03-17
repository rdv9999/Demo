import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

import Constant from '../../Config/Constant';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const { height, width } = Dimensions.get('window')

const SearchFilter = ({ data, input, setInput }) => {
  return (
    <View>
      <View style={styles.cardStyle}>  
                <View style={[{ flexDirection: 'row', justifyContent: 'space-between', padding:10,marginRight:20 }]}>
                  <Text>Recent Search</Text>
                  <Text>clear</Text>
                </View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (input === "") {
            return (
              // <View>
              //   <Text>{item.name}</Text>
              //   </View>
              <View>
                
                <View style={{ padding: 5, marginTop: 3, marginBottom: 3 }}>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <View style={{ alignSelf: 'center' }}>
                     
                      <Entypo
                        name={'back-in-time'}
                        size={20}
                        color={'grey'}
                      />
                    </View>
                    <Text style={{ fontSize: 16, marginLeft: 20, alignSelf: 'center', color: Constant.color.GREY }}>{item.name}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignSelf: 'center', marginRight: 20 }}>

                      <AntDesign
                        name={'arrowright'}
                        size={20}
                        color={'grey'}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
             
              </View>
            )
          }

          if(item.name.toLowerCase().includes(input.toLowerCase())){
            return (
              // <View>
              //   <Text>{item.name}</Text>
              //   </View>
              <View>
                
                <View style={{ padding: 5, marginTop: 3, marginBottom: 3 }}>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <View style={{ alignSelf: 'center' }}>
                     
                      <Entypo
                        name={'back-in-time'}
                        size={20}
                        color={'grey'}
                      />
                    </View>
                    <Text style={{ fontSize: 16, marginLeft: 20, alignSelf: 'center', color: Constant.color.GREY }}>{item.name}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignSelf: 'center', marginRight: 20 }}>

                      <AntDesign
                        name={'arrowright'}
                        size={20}
                        color={'grey'}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
             
              </View>
            )
          }

        }}
      />
    </View>
    </View>

  )
}

export default SearchFilter

const styles = StyleSheet.create({
  cardStyle: {
    marginTop: 20,
    // marginBottom:20,
    width: '95%',
    justifyContent: 'center',
    alignSelf: 'center',
    // padding: 10,
   
    borderWidth: 0.5,
    elevation: 4,
    borderRadius: 12,
    borderColor: Constant.color.WHITE,
    backgroundColor: Constant.color.WHITE,
  }
})