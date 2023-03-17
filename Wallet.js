import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MultipleButton from '../Screens/Component/MultipleButton'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Constant from '../Config/Constant'
const { height, width } = Dimensions.get('window')
const Wallet = () => {

  const Detail = [
    {
      id: 1,
      Date: '25-02-2023',
      cardname: 'Add Money in Wallet',
      amt: 2000,
      detailcard: 'DebitCard ****4526',
    },
    {
      id: 2,
      Date: '25-02-2023',
      cardname: 'Add Money in Wallet',
      amt: 1000,
      detailcard: 'DebitCard ****4526',

    },
    {
      id: 3,
      Date: '25-02-2023',
      cardname: 'Add Money in Wallet',
      amt: -4000,
      detailcard: 'DebitCard ****4526',

    },
  ]
  return (
    <View style={styles.container}>

      <View style={{ alignSelf: 'center' }}>
        <Text style={styles.text1}>You Have</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <FontAwesome5
              style={{ alignSelf: 'center', marginRight: 5 }}
              name='rupee-sign'
              size={28}
              color='skyblue'
            />
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={styles.text2}>2000</Text>
          </View>
        </View>
        <Text style={styles.text3}>In Your Wallet</Text>
      </View>

      <View style={{ width: '40%', alignSelf: 'center', borderRadius: 5 }}>
        <TouchableOpacity style={styles.btnStyle}
          activeOpacity={0.5}
          // onPress={() => navigation.navigate('AddNewAddress')}
        >
          <View>
            <Ionicons
              style={{ marginLeft: 10 }}
              name={'add-circle'}
              size={25}
              color={'white'}
            />
          </View>
          <View>
            <Text style={styles.textStyle}>Add Money</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ padding: 10, borderTopWidth: 0.8, borderBottomWidth: 0.8, marginTop: 30 }}>
        <Text style={{ alignSelf: 'center', fontFamily: 'Poppins-Bold', color: 'black', fontSize: 16 }}>Recent Transactions</Text>
      </View>

      <FlatList
        data={Detail}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={{ marginTop: 10, padding: 5, width: '95%', marginLeft: 5, borderBottomWidth: 0.8 }}>
              <View style={{ marginTop: 15 }}>
                <Text style={{ color: 'black' }}>{item.Date}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: 'black' }}>{item.cardname}</Text>
                <Text style={{ color: item.amt >= 0 ? 'green' : 'red', }}>{item.amt}</Text>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Text style={{ color: 'black' }}>{item.detailcard}</Text>
              </View>
            </View>
          )
        }}
      />
    </View>
  )
}

export default Wallet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constant.color.WHITE,
  },

  text1: {
    textAlign: 'center',
    marginTop: 10,
  },
  text2: {
    fontSize: 35,

    color: 'skyblue',
    fontFamily: 'Poppins-Black',
    // alignSelf:'center',
    // textAlign:'center',
    // alignSelf:'center'
  },
  text3: {
    textAlign: 'center'
  },
  btnStyle: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginVertical: 15,
    borderWidth: 0.5,
    borderColor: 'white',
    borderRadius: 5,
    paddingVertical: 8,
    width: '100%',
    backgroundColor: 'skyblue',

  },
  textStyle: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    marginLeft: 4,
  }
})