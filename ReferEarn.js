import { Text, StyleSheet, View, Image, SafeAreaView, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Constant from '../Config/Constant'

import Fontisto from 'react-native-vector-icons/Fontisto';
import MultipleButton from '../Screens/Component/MultipleButton';


const { height, width } = Dimensions.get('window')

const ReferEarn = (props) => {

  return (

    <ScrollView style={styles.container}>
      <View>
        <View>
        <View style={styles.container2} />
        <Text style={styles.text3}>Invite your Friend & Earn Money</Text>
        <Image
          source={require('../Assets/Images/Refer.png')}
          style={styles.profileImage}
        />
        <View style={styles.imageContainer}>
          <View
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingVertical: 15 }}>
            <View
              style={styles.cardContainer}
            >
              <View>
                <View>
                  <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 5, marginLeft: 5 }}>
                    <Fontisto
                      style={{ marginHorizontal: 5 }}
                      name={'wallet'}
                      size={28}
                      color={'skyblue'}
                    />
                    <Text style={styles.text1}>Share your referral link and invite your friend via SMS/EmailWhatsApp. you earn upto ₹10,000</Text>
                  </View>
                </View>

                <View>
                  <View style={{ marginTop: 25, height: '23%', width: '96%', flexDirection: 'row', marginBottom: -10 }}>
                    <Image
                      source={require('../Assets/Images/ImageSupport.png')}
                      style={{
                        height: '100%',
                        width: '100%',
                        marginLeft: 8,
                        alignSelf: 'center',
                      }}
                      resizeMode={'contain'}
                    />
                    {/* <Image
                      source={require('../Assets/Images/L2.png')}
                      style={{
                        height: '100%',
                        width: '33%',
                        alignSelf: 'center',
                      }}
                      resizeMode={'contain'}
                    />
                     <Image
                      source={require('../Assets/Images/L1.jpg')}
                      style={{
                        height: '100%',
                        width: '33%',
                        alignSelf: 'center',
                      }}
                      resizeMode={'contain'}
                    /> */}
                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', textAlign: 'center' }}>
                    <Text style={{ width: '30%', textAlign: 'center',color:'black' }}>Invite your friend to signup</Text>
                    <Text style={{ width: '30%', textAlign: 'center',color:'black' }}>Your friend get a product from us</Text>
                    <Text style={{ width: '30%', textAlign: 'center',color:'black'}}>You and your Friend get rewarded</Text>
                  </View>

                  <View>
                    <View>
                      <Text style={styles.text2}>YOUR REFERRAL CODE</Text>
                    </View>
                    <View>
                      <TextInput
                        style={{ borderStyle: 'dashed', marginTop: 5, borderWidth: 1, width: width * 0.5, alignSelf: 'center', textAlign: 'center', borderColor: 'blue', paddingVertical: 2, borderRadius: 8 }}
                        placeholder='CODE'
                        placeholderTextColor={'grey'}
                        backgroundColor={'skyblue'}
                      />
                    </View>
                    <View>
                      <TouchableOpacity>
                        <Text style={styles.text4}>TAP TO COPY</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ height: 100 }}>
                      <MultipleButton
                        label={'Refer Now'}
                        fontSize={18}
                        marginTop={5}
                        borderRadius={8}
                        width={width * 0.33}
                        textColor={'white'}
                        bgColor={'#01A2F0'}
                      />
                      <Text style={styles.text5}>T&C</Text>
                    </View>
                
                  </View>
                </View>

                {/* <View style={{backgroundColor:'red'}}>
               <Text style={styles.text2}>YOUR REFERRAL CODE</Text>
               
               
               <View>
               <TouchableOpacity>
               <Text style={styles.text4}>TAP TO COPY</Text>
               </TouchableOpacity>
               </View>
              
               <MultipleButton
               label={'Refer Now'}
               fontSize={17}
               width={width*0.3}
               textColor={'white'}
               bgColor={'#01A2F0'}
               />
              
              <Text style={styles.text5}>T&C</Text>
              </View> */}
              </View>

            </View>
          </View>
        </View>
        <View style={{height:20}}  />
        </View>
      </View>
      
    </ScrollView>
  );
};

export default ReferEarn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constant.color.WHITE,
    // backgroundColor:'red',
  },

  container2: {
    // marginTop: -400,
    // marginTop: -390,
    paddingBottom:5,
    // marginTop:5,
    alignSelf: 'center',
    height: undefined,
    width: width * 1.5,
    aspectRatio: 2,
    // borderRadius: width,
    backgroundColor: 'skyblue'
  },
  profileImage: {
    height: undefined,
    aspectRatio: 1,
    height:150,
    // width: 150,
    width: '50%',
    alignSelf: 'center',
    borderWidth: 1.2,
    borderRadius: 0,
    position: 'absolute',
    marginTop: 50,
  },
  text3: {
    alignSelf: 'center',
    width: '58%',
    marginTop: 5,
    lineHeight: 25,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    position: 'absolute',
  },

  imageContainer: {
    marginTop: -60,
  },
  cardContainer: {
    alignItems: 'center',
    width: width * 0.9,
    height: 410,
    // marginTop:60,
    alignSelf: 'center',
    // justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: Constant.color.WHITE,
    elevation: 3,
    backgroundColor: Constant.color.WHITE,
  },
  text1: {
    width: '88%',
    fontSize: 12,
    color: 'black',
    fontFamily: 'Lato-Bold',
    lineHeight: 18,
  },
  text2: {
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
    marginTop: 20,
    color: Constant.color.GREY,
  },
  text4: {
    fontSize: 13,
    // textDecorationLine: 'underline',
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
    fontFamily: 'Poppins-SemiBold',
    color: Constant.color.SKYBLUE,
    marginTop: 15,

  },
  text5: {
    fontSize: 14,
    // fontFamily:'Poppins-Medium',
    alignSelf: 'center',
    fontFamily: 'Poppins-Medium',
    color: Constant.color.SKYBLUE,
    // marginTop:10,
  },
})