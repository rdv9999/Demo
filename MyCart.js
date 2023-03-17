import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image, TouchableOpacity, FlatList, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import Constant from '../Config/Constant';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MultipleButton from '../Screens/Component/MultipleButton';
import BottomSheet from "react-native-easy-bottomsheet";



const { height, width } = Dimensions.get('window')
const MyCart = (props) => {
  const [isVisible, setVisible] = useState(false);
  const Array = [
    {
      id: 1,
      Name: 'New Mehgha Printed Kurti with Duppta',
      img: require('../Assets/Images/photo.png'),
      amount: 1590,
      qty: 2,
      status: 'Pending',
      routeName: 'Address',
    },
    {
      id: 2,
      Name: 'New Mehgha Printed Kurti with Duppta',
      img: require('../Assets/Images/photo.png'),
      amount: 1590,
      qty: 1,
      status: 'Pending',
      routeName: 'Address',
    },
  ];
  const [ispsw, setIsPsw] = useState(false);
  const { navigation } = props
  const handlerClick = (item) => {
    navigation.navigate(item.routeName, { ...item })
  }
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => handlerClick(item)}
        >

          <FlatList
            data={Array}
            keyExtractor={(item) => { item.id }}
            // onPress={()=>handlerClick(item)}

            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={styles.Cardcontainer}
                >
                  <View style={{ flex: 0.33, borderWidth: 0.3, borderColor: 'white', height: height * 0.18, width: width * 0.25, margin: 5, borderRadius: 12 }}>
                    <Image
                      source={item.img}
                      style={{
                        height: '95%',
                        width: '100%',
                        // margin:5,
                        borderRadius: 12,
                      }}
                      resizeMode={'contain'}
                    />
                  </View>
                  <View style={{ flex: 0.77, borderWidth: 0.3, paddingHorizontal: 6, marginLeft: 5, marginTop: 5, borderColor: 'white' }}>
                    <Text
                      numberOfLines={2}
                      style={styles.text1}
                    >{item.Name}</Text>

                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.text2}>Price:</Text>
                      <FontAwesome
                        style={{
                          alignSelf: 'center',
                          padding: 5,
                        }}
                        name='rupee' size={18} color="red" />
                      <Text style={styles.text3}>{item.amount}</Text>
                      <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                        <Text style={styles.text2}>Qty:</Text>
                        <Text style={[styles.text3, { marginLeft: 5 }]}>{item.qty}</Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: 18 }}>
                      <Text style={styles.text2}>Delivery Status:</Text>
                      <Text style={styles.text4}>{item.status}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }}
          />

        </TouchableOpacity>

        <View style={styles.Cardcontainer2}>
          <View style={{ padding: 10 }}>
            <View>
              <Text>Promo Code</Text>
            </View>

            <View style={{ width: '95%', height: '100%' }}>
              <TextInput
                style={[styles.input, ispsw && { borderWidth: 1, borderColor: 'black' }]}
                placeholder='Enter code'
                placeholderTextColor={'grey'}
                onBlur={() => setIsPsw(false)}
                onFocus={() => setIsPsw(true)}
              // value={pssw}
              // onChangeText1={setPssw}
              />

              <View style={{ position: 'absolute', alignSelf: 'flex-end', top: 15, right: 15 }}>
                <TouchableOpacity>
                  <Text style={{color:'black'}}>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <MultipleButton
          //onPress={() => refRBSheet.current.open()}
          onPress={() => { setVisible(true); }}
          textColor='white'
          width='80%'
          bgColor='skyblue'
          padding={14}
          marginBottom={10}
          borderRadius={8}
          label={'Checkout'}
        />

        <View style={styles.centeredView}>
          <BottomSheet
            bottomSheetTitle={"MyCart"}
            bottomSheetIconColor="black"
            bottomSheetStyle={{
              backgroundColor: "white",
              maxHeight: "50%",
              minHeight: "20%",
            }}
            bottomSheetTitleStyle={{ color: 'black' ,fontSize:18}}
            onRequestClose={() => setVisible(!isVisible)}
            bottomSheetVisible={isVisible}
          >
            <ScrollView>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text5}>Promo Code Discount</Text>
                <View style={{ flexDirection: 'row' }}>
                  <FontAwesome
                    style={{
                      alignSelf: 'center',
                      bottom: 2,
                    }}
                    name='rupee' size={18} color="black" />
                  <Text style={styles.text6}>149</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text5}>Delivery Charge</Text>
                <Text style={styles.text6}>free</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text5}>Total</Text>
                <View style={{ flexDirection: 'row' }}>
                  <FontAwesome
                    style={{
                      alignSelf: 'center',
                      bottom: 2,
                    }}
                    name='rupee' size={18} color="black" />
                  <Text style={styles.text6}>149</Text>
                </View>
              </View>
            </ScrollView>
          </BottomSheet>
          {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {setVisible(true);}}
      >
        <Text style={styles.textStyle}>Checkout</Text>
      </Pressable> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MyCart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Constant.color.WHITE,
    // fontFamily: Constant.fonts.raju,
  },

  Cardcontainer: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      height: 15,
      width: 15
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    backgroundColor: '#FFF',
    // padding: 10,
    flexDirection: 'row',
    // height: 120,
    width: width * 0.95,
    height: height * 0.19,
    alignSelf: 'center',
    borderRadius: 10,
    margin: 10,
  },
  text1: {
    fontSize: 18,
    marginBottom: 5,
    color: Constant.color.GREY,
    lineHeight: 25,
  },
  text2: {
    fontSize: 16,
    color: Constant.color.GREYLIGHT,
  },
  text3: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: Constant.color.GREY,
  },
  text4: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: Constant.color.SKYBLUE,
  },
  Cardcontainer2: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      height: 15,
      width: 15
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    backgroundColor: '#FFF',
    // padding: 10,
    // flexDirection: 'row',
    // height: 120,
    width: width * 0.95,
    height: height * 0.15,
    alignSelf: 'center',
    borderRadius: 10,
    margin: 10,
  },
  input: {
    // flex: 1,
    // paddingLeft: 5,
    // backgroundColor: '#fff',
    //color: '#424242',
    borderWidth: 0.5,
    // borderLeftWidth: 0.7,
    // borderLeftWidth:1,
    borderColor: 'grey',
    // placeholderTextColor: 'grey',
    color: Constant.color.BLACK,
  },


  centeredView: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // marginTop: 22,
  },
  // button: {
  //   // borderRadius: 20,
  //   padding: 10,
  //   elevation: 2,
  // },
  // buttonOpen: {
  //   backgroundColor: "skyblue",
  // },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  text5: {
    fontSize: 18,
    color: 'grey'
  },

  text6: {
    fontSize: 18,
    padding: 5,
    color: 'black',
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  }
})