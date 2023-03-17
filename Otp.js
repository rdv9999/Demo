import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import OTPTextInput from 'react-native-otp-textinput'
import MultipleButton from './Component/MultipleButton'
import Constant from '../Config/Constant'
const Otp = ({ navigation }) => {
  let otpInput = useRef(null);

  const clearText = () => {
    otpInput.current.clear();
  }

  const setText = () => {
    otpInput.current.setValue("12345");
  }
  Submit = () => {
    console.log(otpInput)
  }

  const [otp, setOtp] = useState("");

  return (
    <ScrollView style={styles.MainContainer}
      contentContainerStyle={{ paddingBottom: 50 }}>


      <Image
        style={{ height: "30%", aspectRatio: 4, marginTop: 20, alignSelf: 'center' }}
        resizeMode={'contain'}
        source={require('../Assets/Images/ndvbg.png')} />
      {/* <Image
           style={{ height: "15%", width: "60%", aspectRatio: 5,marginTop:60,alignSelf:'center'}}
        resizeMode={'contain'}
        source={require('../Assets/Images/Logo.png')} /> */}

      <Text style={styles.textStyle}>Enter OTP</Text>
      <Text style={styles.textStyle2}>We have sent a OTP on your Registered mobile number 8128***692</Text>

      <View style={{ alignSelf: 'center', width: '85%', marginBottom: 40, paddingTop: 50, }}>
        <OTPTextInput

          //  autoFocusOnLoad
          //  codeInputFieldStyle={styles.underlineStyleBase}
          //  codeInputHighlightStyle={styles.underlineStyleHighLighted}
          ref={e => (otpInput = e)}

          // value={otp}
          handleTextChange={(e) => setOtp(e.ref)}
        />
      </View>
      {/* <TouchableOpacity style={styles.buttonStyle1}>
        <Text style={{fontSize:15, color:'white',  fontFamily:'Poppins-Bold',}}>Get OTP</Text>
        </TouchableOpacity> */}

      <MultipleButton
        onPress={() => navigation.replace('DrawerNavigation')}
        // onPress={()=>Submit()}

        textColor='white'
        width='85%'
        bgColor='skyblue'
        borderRadius={8}
        padding={14}
        label={'Submit'}
      />
    </ScrollView>
  )
}
export default Otp
const styles = StyleSheet.create({

  MainContainer:
  {
    flex: 1,
    backgroundColor: Constant.color.WHITE,
    //justifyContent: 'center',
    // alignItems: 'center'
  },
  // textStyle: {
  //   maxWidth: 250,
  //   height: undefined,
  //   fontSize: 25,
  //   // color:'wh',  
  //   fontFamily: 'Poppins-Bold',
  //   marginTop: 10,
  //   color: 'black',
  //   alignSelf: 'center',
  // },
  // textStyle1: {
  //   maxWidth: 250,
  //   height: undefined,
  //   fontSize: 20,
  //   alignSelf: 'center',
  //   textAlign: 'center',
  //   marginTop: 10,
  //   marginBottom: 15,
  // },
  textStyle: {
    height: undefined,
    fontSize: 30,
    letterSpacing: 0.3,
    fontFamily: 'Poppins-Bold',
    alignSelf: 'center',
    maxWidth: 300,
    // lineHeight:40,
    // marginTop: 20,
    marginBottom: 15,
    // textAlign: 'center',
    color: Constant.color.BLACK,
  },
  textStyle2: {
    maxWidth: 235,
    height: undefined,
    fontSize: 18,
    lineHeight: 25,
    alignSelf: 'center',
    textAlign: 'center',
    color: Constant.color.BLACK,
  },
  // underlineStyleBase: {
  //   width: 30,
  //   height: 45,
  //   borderWidth: 2,
  //   borderBottomWidth: 5,
  // },

  // underlineStyleHighLighted: {
  //   borderColor: "red",
  // },
  // buttonStyle1: {
  //   padding: 10,
  //   top: 15,
  //   marginBottom: 15,
  //   backgroundColor: "skyblue",
  //   alignItems: "center",
  //   width: "85%",
  //   fontWeight: 'bold',
  //   // fontWeight: 'bold',
  // },
})