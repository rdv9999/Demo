import { StyleSheet, Text, View, FlatList, Image, SafeAreaView, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React,{useState} from 'react'

import Constant from '../Config/Constant';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MultipleButton from '../Screens/Component/MultipleButton';
import BottomSheet from "react-native-easy-bottomsheet";


import { RadioButton } from 'react-native-paper';

const { height, width } = Dimensions.get('window')

const Kurti = ({navigation}) => {
  const [isVisible, setVisible] = useState(false);
  const [value, setValue] = React.useState('first');
  const [isFocused, setIsFocused] = useState(false);
  const CardArray = [
    {
      id: 1,
      image: require('../Assets/Images/1.png'),
      productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
      productArrival: 'New Arrival',
      amount: 1590,
      amount2: 1500,
    },
    {
      id: 2,
      image: require('../Assets/Images/2.png'),
      productName: 'New Megha Printed Kurti with Duppta',
      productArrival: 'OLD Arrival',
      amount: 159,
      amount2: 150,
    },
    {
      id: 3,
      image: require('../Assets/Images/3.png'),
      productName: 'New Megha Printed Kurti with Duppta',
      productArrival: 'OLD Arrival',
      amount: 159,
      amount2: 150,
    },
    {
      id: 4,
      image: require('../Assets/Images/4.png'),
      productName: 'New Megha Printed Kurti with Duppta',
      productArrival: 'OLD Arrival',
      amount: 159,
      amount2: 150,
    },
    {
      id: 5,
      image: require('../Assets/Images/5.png'),
      productName: 'New Megha Printed Kurti with Duppta',
      productArrival: 'OLD Arrival',
      amount: 159,
      amount2: 150,
    },
    {
      id: 6,
      image: require('../Assets/Images/6.png'),
      productName: 'New Megha Printed Kurti with Duppta',
      productArrival: 'OLD Arrival',
      amount: 159,
      amount2: 150,
    },
    {
      id: 7,
      image: require('../Assets/Images/7.png'),
      productName: 'New Megha Printed Kurti with Duppta',
      productArrival: 'OLD Arrival',
      amount: 159,
      amount2: 150,
    },
  ];
  // const ItemDivider = ({children}) => {
  //   return (
  //     <View
  //       style={{
  //         height: 10,
  //         // flexWrap: 'wrap'
  //       }}
  //     />
  //   );
  // }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', width: width, marginTop: 5, backgroundColor: 'white', borderBottomWidth: 0.1, justifyContent: 'space-evenly', borderColor: 'lightgrey' }}>
        <MultipleButton
          label={'Sort By'}
          onPress={() => { setVisible(true); }}
          textColor='black'
          alignSelf={'center'}
          // marginTop={5}
          // marginBottom={5}
          elevation={2}
          padding={14}
          borderColor={'white'}
          bgColor={'white'}
          width={'100%'}
        />
        <MultipleButton
          label={'Filter'}
          onPress={() => navigation.navigate('FilterBy')}
          textColor='black'
          borderColor={'white'}
          elevation={2}
          padding={14}
          width={'100%'}
        />
      </View>
      {/* <View style={[{flexDirection:'row'}]}>
      <View style={[styles.btnStyle]}>
        <MultipleButton
          label={'Sort By'}
          textColor='black'
          alignSelf={'center'}
          // marginTop={5}
          // marginBottom={5}
          elevation={2}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          padding={14}
          borderColor={'white'}
          bgColor={'white'}
          width={'100%'}
        />
        </View>
        <View style={[styles.btnStyle]}>
        <MultipleButton
          label={'Filter'}
          textColor='black'
          borderColor={'white'}
          elevation={2}
          padding={14}
          // onBlur={() => setIsFocused(false)}
          // onFocus={() => setIsFocused(true)}
          width='100%'
        />
      </View>
      </View> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}>

        {/* {
             CardArray.map((item,index)=>{
                return (
                  <View style={styles.Cardcontainer}>
                   <TouchableOpacity>
                   <TouchableOpacity
                   style={{ 
                    position:'absolute',
                    marginTop: 5,
                    paddingRight:5,
                    zIndex: 1,
                    justifyContent: 'center',
                    alignSelf: 'flex-end',
                   }}
                   >
                    <AntDesign 
                    
                    //color={focused ? 'skyblue' : 'black'}
                      name="hearto" size={20} color="skyblue" />
                  </TouchableOpacity>

                    <View>
                    <Image
                  source={item.image}
                  //https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80
                  style={{
                    height: undefined,
                    width: '100%',
                    aspectRatio: 1,
                    // borderRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    
                   }}
                  resizeMode={'contain'}
                />
                    </View>
                    <View style={{ maxWidth: 140, }}>
              <Text style={styles.TextStyle1}
                // adjustsFontSizeToFit minimumFontScale={1}   comment this line 
                numberOfLines={2}
                 >{item.productName}</Text>
              <Text style={styles.TextStyle2}>{item.productArrival}</Text>
              <View style={styles.searchIcon}>
                <FontAwesome
                  name="rupee" size={14} color="red" />
                <Text style={[styles.TextStyle4,]}>{item.amount}</Text>
                <FontAwesome 
                  name="rupee" size={12} color="grey" />
                <Text style={[styles.TextStyle5, { color: 'grey', textDecorationLine: 'line-through', paddingLeft: 2, }]}>{item.amount2}</Text>
              </View>
            </View>
                   </TouchableOpacity>
                  </View>
                )
             })
              
           } */}
        <FlatList
          data={CardArray}
          numColumns={2}
          keyExtractor={(item) => item.id}
          // ItemSeparatorComponent={ItemDivider}
          renderItem={({ item }) => {
            return (
              <View style={{padding:4}}>
                <View style={styles.Cardcontainer}>
                  <TouchableOpacity>
                    <View>
                      <Text
                        style={{
                          position: 'absolute',
                          // marginTop: 5,
                          paddingRight: 5,
                          zIndex: 1,
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 10,
                          borderBottomLeftRadius: 10,
                          padding: 5,
                          fontSize: 15,
                          color:Constant.color.WHITE,
                          fontFamily:'Poippins-Bold',
                          justifyContent: 'center',
                          alignSelf: 'flex-start',
                          backgroundColor: 'red',
                        }}
                      >-50%</Text>
                      <Image
                        source={item.image}
                        // source={{Uri='https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}}
                        style={{
                          height: undefined,
                          width: width * 0.47,
                          aspectRatio: 1,
                          // borderRadius: 12,
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                          aspectRatio: 1,
                        }}
                        resizeMode={'contain'}
                      />
                    </View>
                    <View style={{ maxWidth: 140, }}>
                      <Text style={styles.TextStyle1}
                        // adjustsFontSizeToFit minimumFontScale={1}   comment this line 
                        numberOfLines={2}
                      >{item.productName}</Text>
                      <Text style={styles.TextStyle2}>{item.productArrival}</Text>
                      <View style={styles.searchIcon}>
                        <FontAwesome
                          name='rupee' size={14} color="red" />
                        <Text style={[styles.TextStyle4,]}>{item.amount}</Text>
                        <FontAwesome
                          name="rupee" size={12} color="grey" />
                        <Text style={[styles.TextStyle5, { color: 'grey', textDecorationLine: 'line-through', paddingLeft: 2, }]}>{item.amount2}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )
          }}
        />

<View style={styles.centeredView}>
          <BottomSheet
            bottomSheetTitle={"Sort By"}
            // bottomSheetTitle={"CLear"}
            bottomSheetIconColor="black"
            bottomSheetStyle={{
              backgroundColor: "white",
              maxHeight: "50%",
              minHeight: "40%",
              // width:'30%'
            }}
            bottomSheetTitleStyle={{ color: 'black', fontSize: 18, }}
            onRequestClose={() => setVisible(!isVisible)}
            bottomSheetVisible={isVisible}
          >
            <ScrollView
            >
              <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                >
                  {/* <View style={{alignSelf:'flex-start'}}>
                  <RadioGroup
                    radioButtons={radioButtons}
                    onPress={onPressRadioButton}
                    layout='column'
                  />
                </View> */}

                  {/* <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    <View>
                      <Text>First</Text>
                      <RadioButton value="first" />
                    </View>
                    <View>
                      <Text>Second</Text>
                      <RadioButton value="second" />
                    </View>
                  </RadioButton.Group> */}

                  <RadioButton.Group 
                  
                  onValueChange={newValue=>setValue(newValue)} value={value}>
                  <View style={{flexDirection:'row'}}>
                      <RadioButton value="Newset" />
                      <Text style={{alignSelf:'center'}}>Newest</Text>
                    </View>
                    
                    <View style={{flexDirection:'row'}}>
                      <RadioButton value="Feature" />
                      <Text style={{alignSelf:'center'}}>Feature</Text>
                    </View>

                    <View style={{flexDirection:'row'}}>
                      <RadioButton value="Lowest Price" />
                      <Text style={{alignSelf:'center'}}>Lowest Price</Text>
                    </View>

                    <View style={{flexDirection:'row'}}>
                      <RadioButton value="Higest Price" />
                      <Text style={{alignSelf:'center'}}>Higest Price</Text>
                    </View>
                  </RadioButton.Group>
                </ScrollView>

              </View>
            </ScrollView>
          </BottomSheet>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Kurti

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // backgroundColor: '#fff',
    backgroundColor: Constant.color.WHITE,
    fontFamily: Constant.fonts.raju,
    // padding: 5
    // paddingLeft: 3,
    // paddingRight: 3,
  },
  Cardcontainer: {
    flex: 1,
    width:width * 0.47,
    backgroundColor: Constant.color.WHITE,
    elevation: 5,
    // marginLeft: 3,
    borderWidth: 1,
    borderRadius: 8,
    // borderColor: '#dddddd',
    borderColor: Constant.color.WHITE,
    // marginHorizontal:6,
    // marginTop: 2,
    marginBottom: 3,
    marginHorizontal: 1
    },
  searchIcon: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 5,
    paddingRight: 0,
    paddingLeft: 5,
    width: 145,
  },

  TextStyle4: {
    // fontSize: 15,
    fontSize: Constant.spacing[4],
    color: 'red',
    paddingLeft: 4,
    paddingRight: 6,
  },
  TextStyle5: {
    // fontSize: 15,
    fontSize: Constant.spacing[2],
    color: 'red',
    paddingLeft: 4,
    paddingRight: 6,
  },

  // searchIcon2: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'flex-end',
  //   alignSelf: 'center',
  // },

  TextStyle1: {
    flex: 1,
    width: 125,
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    flexWrap: 'wrap',
    marginLeft: 4,
    // color: '#212121',
    color: Constant.color.GREY,
  },

  TextStyle2: {
    fontSize: 10,
    flexWrap: 'wrap',
    fontFamily: 'Poppins-Medium',
    flex: 1,
    width: 125,
    marginLeft: 4,
    marginBottom: 12,
    // color: '#B6B6B6',
    color:Constant.color.GREYLIGHT,
  },
   btnStyle:{
    // flexDirection: 'row', 
    width: width*0.5,
    height:height*0.1,
    marginTop:2, 
    backgroundColor: 'white',
    borderBottomWidth:0.1, 
    justifyContent: 'space-evenly',
    borderColor:'lightgrey'
   }
})






// import { Text, StyleSheet, View ,FlatList,Image,TouchableOpacity,ScrollView} from 'react-native'
// import React, { Component } from 'react'
// // const { height, width } = Dimensions.get('window')
// import Button from './Component/Button'
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// // import FlatlistImage from './Component/FlatListImage';
// import ProductCard from './Component/ProductCard';
// const ShopScreen = () => {

//     return (
//     <View>
//       <Text>Hello</Text>
//       {/* <ScrollView> */}
//         <TouchableOpacity>
//                 <ProductCard/>
//         </TouchableOpacity>

//       {/* </ScrollView> */}
//     </View>
//     )
//   }
// export default ShopScreen;

// const styles = StyleSheet.create({})
