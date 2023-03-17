import { Text, StyleSheet, View, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/Feather';
import MultipleButton from './Component/MultipleButton';
import Constant from '../Config/Constant';

const MobileNumber = ({ navigation }) => {
    const [isnumber, setIsNumber] = useState(false);
    return (
        <ScrollView style={styles.MainContainer}
            contentContainerStyle={{ paddingBottom: 50 }}
        >

            <Image
                style={{ height: "40%", aspectRatio: 4, alignSelf: 'center' }}
                resizeMode={'contain'}
                source={require('../Assets/Images/ndvbg.png')} />
            {/* <Image
                style={{ height: "15%", width: "60%", aspectRatio: 5,marginTop:60,alignSelf:'center'}}
                resizeMode={'contain'}
                source={require('../Assets/Images/Logo.png')} /> */}
            <Text style={styles.textStyle}>Enter Number</Text>
            <Text style={styles.textStyle2}>Enter your mobile number to continue with Log In</Text>

            <View style={[styles.searchSection, isnumber && { borderWidth: 1, borderColor: 'black' }]}>
                <FontAwesome5 style={styles.searchIcon} name="phone" size={20} color="#000" />
                <TextInput
                    style={[styles.input, isnumber && { borderLeftWidth: 1, borderColor: 'black' }]}
                    placeholder="Enter Your Phone Number"
                    placeholderTextColor={'grey'}
                    maxLength={10}
                    keyboardType={'numeric'}
                    onBlur={() => setIsNumber(false)}
                    onFocus={() => setIsNumber(true)}
                    //  onChangeText={(searchString) => { this.setState({ searchString }) }}
                    underlineColorAndroid="transparent"
                />
            </View>

            {/* <TouchableOpacity style={styles.buttonStyle1}
                onPress={() => navigation.navigate('Otp')}>
                    <Text style={{fontSize:15,color:'white',  fontFamily:'Poppins-Bold',}}>Get OTP</Text>
                    </TouchableOpacity>
         */}
            <MultipleButton
                onPress={() => navigation.navigate('Otp')}
                textColor='white'
                width='90%'
                bgColor='skyblue'
                marginTop={10}
                padding={14}
                borderRadius={8}
                label={'Get OTP'}
            />
            {/* <MultipleButton
        label={'Get OTP'}
        textColor={'white'}
        bgColor={'skyblue'}
        /> */}

        </ScrollView>

    )
}

export default MobileNumber;
const styles = StyleSheet.create({
    MainContainer:
    {
        flex: 1,
        backgroundColor: Constant.color.WHITE,
        //justifyContent: 'center',
        // alignItems: 'center'
    },
    searchSection: {
        // flex: 1,
        width: "90%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff',
        marginTop: 50,
        marginBottom: 20,
        // borderWidth: 0.2,
        borderWidth: 0.7,
        borderColor: 'grey',

    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: '#fff',
        borderWidth: 0,
        borderLeftWidth: 0.7,
        borderColor: 'grey',
    },
    // textStyle: {
    //     maxWidth: 250,
    //     fontSize: 25,
    //     alignSelf:'center',
    //     marginTop: 10,
    //     fontFamily:'Poppins-Bold',
    //     color:Constant.color.BLACK,
    // },
    // textStyle1: {
    //     maxWidth: 250,
    //     fontSize: 20,
    //     alignSelf: 'center',
    //     textAlign: 'center',
    //     marginTop: 10,
    //     marginBottom: 15,
    //     color:Constant.color.BLACK,
    // },
    textStyle: {
        height: undefined,
        fontSize: 30,
        letterSpacing: 0.3,
        fontFamily: 'Poppins-Bold',
        alignSelf: 'center',
        maxWidth: 300,
        lineHeight: 40,
        marginTop: 15,
        marginBottom: 15,
        textAlign: 'center',
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
    buttonStyle1: {
        padding: 10,
        marginTop: 15,
        backgroundColor: "skyblue",
        alignItems: "center",
        width: "85%",
        fontFamily: 'Poppins-Bold',
    },
})