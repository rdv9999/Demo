import { Text, StyleSheet, View, Image, SafeAreaView, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Constant from '../Config/Constant'
import MultipleButton from './Component/MultipleButton'
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';

const { height, width } = Dimensions.get('window')

const MyProfile = ({navigation}) => {
  const name = "(optional)"

  const baseURL = 'https://project.sridixtechnology.com/ishitahouse/api/';
  const endPoint = 'deleteaccount';

  const logout = async () => {
      await axios.post(baseURL + endPoint, {
        "device_id":"20282028",
        "is_mobile":"0",
        "user_id": "92"
      }, {
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Header-Key': 'ish-02-2022'
          }
      })
          .then((Response) => {
              console.log(Response.data);
              // if(Status == 200){
              //     navigation.navigate('BottomNavigation')
              // }
              // if (email == '') {
              //     setBadEmail(true);
              // } else {
              //     setBadEmail(false);
              // }
              // if (password == '') {
              //     setBadPassword(true);
              // } else {
              //     setBadPassword(false);
              // }
          
            if(Response.data.Status == 200){
              navigation.navigate('Login')
            }
          })
          .catch((error) => {
              console.log(error);
          })
      }
  return (
    <SafeAreaView style={styles.container}>
     
      {/* <ScrollView
style={{flex:1}}
contentContainerStyle={{paddingBottom:100,backgroundColor:'red'}}
> */}

      <View
        style={styles.cardContainer}
      //style={{flex:1 , width:width*0.9,alignSelf:'center',height:undefined,aspectRatio:3,borderWidth:0.5,borderRadius:10}}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.profileImage}
            source={require('../Assets/Images/photo.png')}
            resizeMode={'contain'}
          />
        </View>

        <View>
          <View>
            <View style={{ marginTop: 80, width: width * 0.8, marginBottom: 0 }}>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Your Name"
                  placeholderTextColor={'gray'}
                  underlineColorAndroid='transparent'
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Your Email"
                  placeholderTextColor={'gray'}
                  underlineColorAndroid='transparent'
                />
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>

              <View style={{ flex:0.14,alignItems:'center',borderBottomWidth:0.5,flexWrap:'wrap',}}>
                  <Text style={{flex:1,color:'grey',marginTop:14,}}>+91</Text>
                </View>
                 <View style={{flex:0.9,backgroundColor:'white',marginLeft:10,borderBottomWidth:0.5,flexDirection:'row',justifyContent:'space-between'}}>
                <View>
                  <TextInput
                    style={styles.input2}
                    placeholder="Mobile No*"
                    keyboardType='numeric'
                    maxLength={10}
                    placeholderTextColor={'gray'}
                    underlineColorAndroid='transparent'
                  />
                </View>

                {/* <View style={{flex:0.4, flexDirection: 'row', alignItems: 'center'}}>
                  <View>
                    <Text style={{color:'green'}}>Verified</Text>
                  </View>

                  <View>
                    <AntDesign
                      name='checkcircle'
                      size={15}
                      color={'green'}
                    />
                  </View>
                </View> */}
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
                <Text style={styles.text1}>Alternate No</Text>
                <Text style={styles.text2}>(Optional)</Text>
              </View>
              


              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              
              <View style={{ flex:0.14,borderBottomWidth:0.5,alignItems:'flex-start',}}>
                  <Text style={{flex:1,color:'grey',marginTop:12}}>+91</Text>
                </View>
                 <View style={{flex:0.9,backgroundColor:'white',marginLeft:10,borderBottomWidth:0.5,flexDirection:'row',justifyContent:'space-between'}}>
                <View>
                  <TextInput
                    style={styles.input3}
                    placeholder="Mobile No*"
                    keyboardType='numeric'
                    maxLength={10}
                    placeholderTextColor={'gray'}
                    underlineColorAndroid='transparent'
                  />
                </View>
                </View>
              </View>


              {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flexDirection:'row',alignItems:'center',flex:0.6}}>
                    <View style={{borderBottomWidth:0.5,marginTop:30,}}>
                      <Text>+91</Text>
                    </View>
                    <View style={{borderBottomWidth:0.5}}>
                    <TextInput
                    style={styles.input3}
                    placeholder="Mobile No*"
                    keyboardType='numeric'
                    maxLength={10}
                    placeholderTextColor={'gray'}
                    underlineColorAndroid='transparent'
                  />
                    </View>
                  </View>
              </View> */}
              
              
            </View>
            <View style={{height:'22%'}}>            
              <MultipleButton
              // onPress={()=>navigation.navigate('Onboarding')}
              onPress={logout}
            label={'LOGOUT'}
            bgColor={'skyblue'}
            padding={5}
            fontSize={16}
            width={'50%'}
            marginTop={15}
            // marginBottom={5}
            borderRadius={12}
            />
            </View>

          </View>
        </View>
      </View>

      {/* </ScrollView> */}

    </SafeAreaView>
  );
};
export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constant.color.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    height: undefined,
    aspectRatio: 1,
    width: 150,
    alignSelf: 'center',
    borderWidth: 1.2,
    borderRadius: 150 / 2,
    zIndex: 1,
    // position:'absolute',
  },
  imageContainer: {
    alignSelf: 'center',
    top: -80,
    zIndex: 1,
    position: 'absolute',
  },
  cardContainer: {
    alignItems: 'center',
    width: width * 0.9,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: Constant.color.WHITE,
    elevation: 5,
    backgroundColor: Constant.color.WHITE,
  },
  input: {
    width: width * 0.8,
    paddingLeft: 5,
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    color: Constant.color.BLACK,
  },
  input2: {
    // paddingLeft: 15,
    // paddingLeft: 5,
    borderWidth: 0,
    borderColor: 'grey',
    color: Constant.color.BLACK,
  },
  input3: {
    paddingLeft: 5,
    borderWidth: 0,
    // borderBottomWidth: 0.5,
    borderColor: 'grey',
    color: Constant.color.BLACK,
  },
  text1: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 15,
    color: '#01A2F0',
  },
  text2: {
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 5,
    fontSize: 15,
    color: 'grey',
  },
})