import { Text, StyleSheet, View, Image, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import React, { Component } from 'react'
import FontAwesome5 from 'react-native-vector-icons/Feather';
import MultipleButton from './Component/MultipleButton'
import Constant from '../Config/Constant';
const Forgetpassword = ({ navigation }) => {

    return (
        // <ScrollView 
        // style={styles.MainContainer}
        // contentContainerStyle={{ paddingBottom: 50}}
        // >
        // <KeyboardAvoidingView 
        //     style={styles.MainContainer}>
        <ScrollView
            style={styles.MainContainer}
            contentContainerStyle={{ paddingBottom: 50 }}>
            {/* <Image
                style={{ height: "10%", width: "60%", aspectRatio: 5, marginTop: 60,alignSelf:'center' }}
                resizeMode={'contain'}
                source={require('../Assets/Images/Logo.png')} /> */}
            {/* <Image
                style={{ height: "10%", width: "60%", aspectRatio: 5, marginTop: 60, alignSelf: 'center' }}
                resizeMode={'contain'}
                source={require('../Assets/Images/Logo.png')} /> */}

            <Image style={{ height: "25%", aspectRatio: 3, alignSelf: 'center' }}
                source={require('../Assets/Images/ndvbg.png')}
                resizeMode={'contain'} />
            <Text style={styles.textStyle}>Find Your Account</Text>


            <View>
                <Image
                    style={{ height: undefined, width: "75%", aspectRatio: 1, alignSelf: 'center' }}
                    resizeMode={'contain'}
                    source={require('../Assets/Images/forgetimage.png')} />
            </View>


            <View style={styles.searchSection}>
                <FontAwesome5 style={styles.searchIcon} name="phone" size={20} color="#000" />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Your Phone Number"
                    placeholderTextColor={'grey'}
                    //  onChangeText={(searchString) => { this.setState({ searchString }) }}
                    underlineColorAndroid="transparent"
                />
            </View>
            <MultipleButton
                label={'Get OTP'}
                bgColor='skyblue'
                width='90%'
                marginTop={10}
                borderRadius={8}
                padding={14}
                onPress={() => navigation.navigate('Otp')}
            />
            {/* <TouchableOpacity 
            onPress={()=>navigation.navigate('Otp')}
            style={styles.buttonStyle1}><Text>Get OTP</Text></TouchableOpacity> */}

        </ScrollView>
        // </KeyboardAvoidingView>
    )
}

export default Forgetpassword;
const styles = StyleSheet.create({
    MainContainer:
    {
        flex: 1,
        backgroundColor: Constant.color.WHITE,
        // alignItems: 'center'
    },
    // buttonStyle1: {
    //     padding: 15,
    //     marginBottom: 5,
    //     fontSize: 100,
    //     backgroundColor: "skyblue",
    //     alignItems: "center",
    //     width: "85%",
    //     Radius: 4,
    //     top: 15,
    // },
    searchSection: {
        // flex: 1,
        width: "90%",
        alignSelf: 'center',
        flexDirection: 'row',
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 10,
        borderWidth: 0.5,
        borderColor: 'grey',
        marginBottom: 10,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        // paddingTop: 10,
        // paddingRight: 10,
        // paddingBottom: 10,
        paddingLeft: 5,
        // backgroundColor: '#fff',
        // color: '#424242',
        color: Constant.color.BLACK,
        borderWidth: 0,
        borderLeftWidth: 0.5,
        borderColor: 'grey',
    },
    textStyle: {
        // maxWidth: 250,
        // height: 50,
        marginTop: 10,
        fontSize: 25,
        alignSelf: 'center',
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        color: Constant.color.BLACK,
    },
})