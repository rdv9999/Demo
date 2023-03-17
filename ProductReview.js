import { StyleSheet, Text, View, Image, ScrollView, FlatList, Dimensions, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import HederScreen from './Component/HederScreen'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Constant from '../Config/Constant'
import MultipleButton from '../Screens/Component/MultipleButton'
import CustumRating from './Component/CustumRating';
// import StarRating from 'react-native-star-rating-widget';

const { height, width } = Dimensions.get('window')
const ProductReview = ({ navigation},props) => {

  const [rating, setRating] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [data, setData] = useState([1, 2, 3, 4, 5])
  const [currentIndex, setCurrentIndex] = useState(0);
 

  const [isColor, setIsColor] = useState(false);
  const scroll = [
    { id: 1, img: require('../Assets/Images/1.png') },
    { id: 2, img: require('../Assets/Images/1.png') },
    { id: 3, img: require('../Assets/Images/1.png') },
    { id: 4, img: require('../Assets/Images/1.png') },
  ]

  const Detail = [
    {
      id: 1,
      productname: 'New Megha Printed Kurti with Duppta',
      price: 1590,
      mrp: '*MRP incl. of all taxes',
    },
  ];

  // const Des=[
  //   {
  //     id:1,
  //     name1:'Composition and care',
  //     size:'Find Your Size',
  //     check:'Check In-stock availability',
  //     delivery:'Delivery, exchange and return share'
  //   }
  // ]
  const colors = [
    {
      id: 1,
      color: 'red',
    },
    {
      id: 2,
      color: 'yellow',
    },
    {
      id: 3,
      color: 'green',
    },
    {
      id: 4,
      color: 'blue',
    },
  ]
  const CardArray = [
    {
      id: 1,
      image: require('../Assets/Images/photo.png'),
      productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
      productArrival: 'New Arrival',
      amount: 1590,
      amount2: 1500,
    },
    {
      id: 2,
      image: require('../Assets/Images/photo.png'),
      productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
      productArrival: 'New Arrival',
      amount: 1590,
      amount2: 1500,
    },
    {
      id: 3,
      image: require('../Assets/Images/photo.png'),
      productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
      productArrival: 'New Arrival',
      amount: 1590,
      amount2: 1500,
    },
  ]
  return (
    <View>
      <HederScreen
        navigation={navigation}
        pagenav={'MyProfile'}
        pagenav1={'MyCart'}
      />
      <ScrollView
        contentContainerStyle={{ marginBottom: 50 }}
      >


        <View style={[styles.container]}>
          <View>
            <FlatList
              onScroll={e => {
                const x = e.nativeEvent.contentOffset.x;
                setCurrentIndex((x / width).toFixed(0));
              }}
              data={scroll}
              horizontal
              pagingEnabled
              contentContainerStyle={{
                // paddingVertical: 15,
              }}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {

                return (

                  <View
                    style={{
                      height: undefined,
                      width: width,
                      flex: 0,
                      aspectRatio: 1,
                      // marginHorizontal: 5,
                      // borderWidth: 1,
                      // borderRadius: 5,
                      backgroundColor: 'pink'
                    }}
                  // on
                  >
                    <TouchableOpacity
                      style={{
                        position: 'absolute',
                        marginTop: 310,
                        // alignItems:'flex-end',
                        paddingRight: 5,
                        zIndex: 1,
                        justifyContent: 'center',
                        alignSelf: 'flex-end',
                      }}
                    >
                      <AntDesign
                        style={{ marginRight: 10 }}
                        //color={focused ? 'skyblue' : 'black'}
                        name="hearto" size={24} color="skyblue" />
                    </TouchableOpacity>
                    <Image
                      source={item.img}
                      resizeMode={'stretch'}
                      style={{
                        width: '100%',
                        height: '100%'
                      }}
                    />
                  </View>
                )
              }}
              keyExtractor={(item) => item.id}
            />
            <View
              style={{
                flexDirection: 'row',
                width: width,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                height: '190%',
              }}
            >
              {
                data.map((item, index) => {
                  return (
                    <View
                      style={{
                        width: currentIndex == index ? 25 : 6,
                        height: currentIndex == index ? 10 : 7,
                        borderRadius: 8,
                        backgroundColor: currentIndex == index ? 'skyblue' : 'gray',
                        marginLeft: 6,
                        marginRight: 6,
                        // marginTop: 5,
                        // marginBottom: 15,
                      }}
                    >
                      <Image
                        source={item.img}
                        resizeMode={'stretch'}
                        style={{
                          width: '100%',
                          height: '100%'
                        }}
                      />
                    </View>
                  )
                })
              }
            </View>
          </View>
          <View style={{ padding: 8 ,marginBottom:100}}>
            <FlatList
              data={Detail}
              renderItem={({ item }) => {
                return (
                  <View>
                    <Text style={{ fontSize: 22, fontFamily: 'Poppins-Bold', color: 'black' }}
                      numberOfLines={2}
                    >{item.productname}</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <FontAwesome
                        style={{ marginRight: 2, marginTop: 2, alignSelf: 'center' }}
                        //color={focused ? 'skyblue' : 'black'}
                        name="rupee" size={19} color="black" />
                      <Text style={{ fontSize: 22, marginRight: 10, color: 'black' }}>{item.price}</Text>
                      <Text style={{ fontSize: 13, alignSelf: 'flex-end', color: 'grey' }}>{item.mrp}</Text>
                    </View>
                  </View>
                )
              }}
            />

            <View style={{ flexDirection: 'row', width: width * 1, alignSelf: 'center', marginTop: 5, backgroundColor: 'white', borderBottomWidth: 0.1, justifyContent: 'space-evenly', borderColor: 'lightgrey' }}>
              <View style={{ backgroundColor: isFocused ? 'white' : 'grey', width: '40%' }}>
                <MultipleButton
                  label={'Add to Cart'}
                  textColor='skyblue'
                  alignSelf={'center'}
                  // marginTop={5}
                  // marginBottom={5}
                  onFocus={() => setIsFocused(false)}
                  elevation={2}
                  padding={14}
                  borderColor={'white'}
                  bgColor={'white'}
                  width={'100%'}
                />
              </View>
              <View style={{ backgroundColor: isFocused ? 'white' : 'grey', width: '40%' }}>
                <MultipleButton
                  label={'Buy Now'}
                  textColor='white'
                  bgColor='skyblue'
                  // borderColor={'white'}
                  onFocus={()=>setIsFocused(false)}
                  elevation={2}
                  padding={14}
                  width='100%'
                />
              </View>
            </View>
            <View>
              <FlatList
                keyExtractor={(item) => item.id}
                horizontal
                data={colors}
                renderItem={({ item }) => {
                  return (
                    <View>
                      <TouchableOpacity style={[isColor && { borderWidth: 3, backgroundColor: isColor?'white':'white' }, {padding: 5, marginTop: 5, borderRadius: 5 }]}
                      onBlur={() => setIsFocused(false)}
                      onFocus={() => setIsColor(true)}
                      // onFocus={()=>setIsColor(false)}
                      >
                        <View style={[{ height: 40, width: 40, backgroundColor: item.color, borderRadius: 5 }]}
                        // onFocus={() => setIsColor(true)}
                        // onBlur={() => setIsColor(false)}
                        />
                      </TouchableOpacity>


                    </View>
                  )
                }}
              />
            </View>
            <View style={{padding:5}}>
            <Text>Composition and care</Text>
            <Text>Find Your Size</Text>
            <Text>Check In-stock availability</Text>
            <Text>Delivery, exchange and return share</Text>
            </View>

            <View style={{ flexDirection: 'row', width: width * 1, alignSelf: 'center', marginTop: 5,  justifyContent: 'space-evenly'}}>
              <View style={{ backgroundColor: isFocused ? 'white' : 'darkgrey', width: '50%' }}>
                <MultipleButton
                  label={'DESCRIPTION'}
                  textColor='white'
                  alignSelf={'center'}
                  // marginTop={5}
                  // marginBottom={5}
                  onFocus={() => setIsFocused(false)}
                  elevation={2}
                  padding={14}
                  borderColor={'grey'}
                  bgColor={'grey'}
                  width={'100%'}
                  onPress={()=>navigation.navigate('ProductDetail')}
                />
              </View>
              <View style={{ backgroundColor: isFocused ? 'white' : 'darkgrey', width: '50%' }}>
                <MultipleButton
                  label={'REVIEW'}
                  textColor='black'
                  // bgColor='white'
                  // borderColor={'white'}
                  borderColor={'white'}
                  elevation={2}
                  padding={14}
                  width='100%'
                />
              </View>
            </View>
            
            <View style={{marginTop:15}}>
              <Text style={{fontSize:18,color:'black'}}>Write a Review</Text>
              </View>
              <View>
                <Text style={{marginTop:15,color:'grey'}}>Your Review</Text>
                <TextInput
                   style={{borderWidth:0.5,width:width*0.93,borderRadius:5,borderColor:'skyblue'}}
                   numberOfLines={4}
                  placeholder='write your review'
                />
              </View>
             
              <Text style={{marginTop:15,color:'grey'}}>Your Rating</Text>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <CustumRating/>  
              <View style={{width:'30%',alignSelf:'center',marginTop:15}}>          
               <MultipleButton 
               label={'Add Review'}
               textColor={'white'}
               borderRadius={5}
               bgColor={'skyblue'}
               />
               </View>
      </View>
            <View style={styles.textRow}>
          <Text style={styles.HeaderText1}>Similar Products</Text>
         
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {

            CardArray.map((item, index) => {

              const { navigation } = props
              const handlerClick = (item) => {
                /*
                   all the content of item (name, and type) will be passed in
                   props of the other page component
                */
                // navigation.navigate("Address", { ...item })
                navigation.navigate(item.routeName, { ...item })
              }
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
                      >-30%</Text>
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
            })

          }
        </ScrollView>

          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default ProductReview

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: Constant.color.WHITE,

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
    marginTop: 5,
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

})