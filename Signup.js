import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Constant from '../Config/Constant';
import { useTogglePasswordVisibility } from './Component/useTogglePasswordVisibility';
import { UseTogglepassword2 } from './Component/UseTogglepassword2';
import axios from 'axios';

const Signup = ({ navigation }) => {

    // const [mobile, setmobile] = useState("");
    // const [isError, setIsError] = useState(false);
    const [isSelected, setSelection] = useState(false);

    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
    const { passwordVisibility2, rightIcon2, handlePasswordVisibility2 } = UseTogglepassword2();
    // const [password, setPassword] = useState('');
    // const [confirmpassword, setConfirmPassword] = useState('');


    const [isFocused, setIsFocused] = useState(false);
    const [isemailfocused, setIsEmailFocused] = useState(false);
    const [isnumberfocused, setIsNumberFocused] = useState(false);
    const [ispswfocused, setIsPswFocused] = useState(false);
    const [ispswcfocused, setIsPswcFocused] = useState(false);


    const [isname, setIsName] = useState('');
    // const [isnamebad, setIsNameBad] = useState(false);
    const [email, setEmail] = useState('');
    // const [isembad, setIsEmBad] = useState(false);
    const [isnum, setIsNum] = useState('');
    // const [isnumbad, setIsNumBad] = useState(false);
    const [ispsw1, setIsPsw1] = useState('');
    // const [ispsw1bad, setIsPsw1Bad] = useState(false);
    const [ispsw2, setIsPsw2] = useState('');
    // const [ispsw2bad, setIsPsw2Bad] = useState(false);


    //  const validate = () => {
    // };

    const baseURL = 'https://project.sridixtechnology.com/ishitahouse/api/';
    const endPoint = 'register';

    const register = async () => {

        if (isname.length === 0) {
            // alert('Please Enter Name')
            setIsName(true)
            return;
        } else {
            setIsName(false)
        }
        if (email.length === 0) {
            // alert('Please Enter Email')
            setEmail(true)
            return;
        } else {
            setEmail(false)
        }
        if (isnum.length === 0) {
            // alert('Please Enter Number')
            setIsNum(true)
            return;
        } else {
            setIsNum(false)
        }
        if (ispsw1.length === 0) {
            // alert('Please Enter Password')
            setIsPsw1(true)
            return;
        }
        else {
            setIsPsw1(false)
        }
        if (ispsw2.length === 0) {
            // alert('Please Enter Confirm Password')
            setIsPsw2(true)
            return;
        } else {
            setIsPsw2(false)
        }

        await axios.post(baseURL + endPoint, {
            "device_id": "01b9ce44c1a07b7f",
            "is_mobile": "0",
            "user_email": email,
            "user_mobile": isnum,
            "user_name": isname,
            "user_password": ispsw1,
            "user_refer_code": ""
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Header-Key': 'ish-02-2022'
            }
        })
            .then((Response) => {
                console.log(Response.data);

                // if (isname == '') {
                //     setIsNameBad(true);
                // } else {
                //     setIsNameBad(false);
                // }
                // if (isem == '') {
                //     setIsEmBad(true);
                // } else {
                //     setIsEmBad(false);
                // }
                // if (isnum == '') {
                //     setIsNumBad(true);
                // } else {
                //     setIsNumBad(false);
                // }
                // if (ispsw1 == '') {
                //     setIsPsw1Bad(true);
                // } else {
                //     setIsPsw1Bad(false);
                // }
                // if (ispsw2 == '') {
                //     setIsPsw2Bad(true);
                // } else {
                //     setIsPsw2Bad(false);
                // }

                if (Response.data.Status == 200) {
                    navigation.navigate('Login')
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <ScrollView
            style={styles.MainContainer}
            contentContainerStyle={{ paddingBottom: 50 }}
        >
            {/* <View > */}
            {/* <Image style={{ height: '10%', width: "70%", aspectRatio: 5, marginTop: 40, }}
                source={require('../Assets/Images/Logo.png')}
                resizeMode={'contain'} /> */}

            <Image style={{ height: "25%", aspectRatio: 4, alignSelf: 'center' }}
                source={require('../Assets/Images/ndvbg.png')}
                resizeMode={'contain'} />
            <Text style={[styles.textStyle]}>Welcome to Login</Text>
            <Text style={[styles.textStyle2]}>Please enter below details to login to your account</Text>

            <View style={{ marginTop: 10, }}>
                <View style={[styles.searchSection, isFocused && { borderWidth: 1, borderColor: 'black' }]}>
                    <AntDesign style={styles.searchIcon} name="user" size={20} color="#000" />
                    <TextInput
                        style={[styles.input, isFocused && { borderLeftWidth: 1, borderColor: 'black' }]}
                        placeholder="Name"
                        value={isname}
                        onChangeText={(text) => { setIsName(text); }}
                        placeholderTextColor={'gray'}
                        onBlur={() => setIsFocused(false)}
                        onFocus={() => setIsFocused(true)}
                        //  onChangeText={(searchString) => { this.setState({ searchString }) }}
                        underlineColorAndroid="transparent"
                    />
                </View>
                {isname === true && (<Text style={{ marginTop: 10, marginLeft: 25, color: 'red' }}>Please Enter Your Name</Text>)}
                <View style={[styles.searchSection, isemailfocused && { borderWidth: 1, borderColor: 'black' }]}>
                    <MaterialCommunityIcons style={styles.searchIcon} name="email-outline" size={20} color="#000" />
                    <TextInput
                        style={[styles.input, isemailfocused && { borderLeftWidth: 1, borderColor: 'black' }]}
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => { setEmail(text); }}
                        placeholderTextColor={'gray'}
                        onBlur={() => setIsEmailFocused(false)}
                        onFocus={() => setIsEmailFocused(true)}
                        //  onChangeText={(searchString) => { this.setState({ searchString }) }}
                        underlineColorAndroid="transparent"
                    />
                </View>
                {email === true && (<Text style={{ marginTop: 10, marginLeft: 25, color: 'red' }}>Please Enter Your Email</Text>)}
                <View style={[styles.searchSection, isnumberfocused && { borderWidth: 1, borderColor: 'black' }]}>
                    <Feather style={styles.searchIcon} name="phone" size={18} color="#000" />
                    <TextInput
                        maxLength={10}
                        style={[styles.input, isnumberfocused && { borderLeftWidth: 1, borderColor: 'black' }]}
                        placeholder="Mobile Number"
                        placeholderTextColor={'gray'}
                        keyboardType="numeric"
                        value={isnum}
                        onChangeText={(text) => { setIsNum(text); }}
                        onBlur={() => setIsNumberFocused(false)}
                        onFocus={() => setIsNumberFocused(true)}
                        underlineColorAndroid="transparent"
                    />
                </View>
                {isnum === true && (<Text style={{ marginTop: 10, marginLeft: 25, color: 'red' }}>Please Enter Your Number</Text>)}
                <View style={[styles.searchSection, ispswfocused && { borderWidth: 1, borderColor: 'black' }]}>
                    {/* <Octicons style={styles.searchIcon} name="lock" size={25} color="#000" /> */}
                    <Ionicons style={styles.searchIcon} name="lock-closed-outline" size={20} color="#000" />
                    <TextInput
                        style={[styles.input, ispswfocused && { borderLeftWidth: 1, borderColor: 'black' }]}
                        name='password'
                        placeholder='Enter password'
                        placeholderTextColor={'gray'}
                        autoCapitalize='none'
                        value={ispsw1}
                        onChangeText={(text) => { setIsPsw1(text); }}
                        autoCorrect={false}
                        onBlur={() => setIsPswFocused(false)}
                        onFocus={() => setIsPswFocused(true)}
                        textContentType='newPassword'
                        secureTextEntry={passwordVisibility}
                        // value={password}
                        enablesReturnKeyAutomatically
                    // onChangeText={text => setPassword(text)}
                    />
                    <View style={{ position: 'absolute', alignSelf: 'center', paddingLeft: 280, }}>
                        <Pressable onPress={handlePasswordVisibility}>
                            <MaterialCommunityIcons name={rightIcon} size={22} color='grey' />
                        </Pressable>
                    </View>
                </View>
                {ispsw1 === true && (<Text style={{ marginTop: 10, marginLeft: 25, color: 'red' }}>Please Enter Your Password</Text>)}
                <View style={[styles.searchSection, ispswcfocused && { borderWidth: 1, borderColor: 'black' }]}>
                    {/* <Octicons style={styles.searchIcon} name="lock" size={25} color="#000" /> */}
                    <Ionicons style={styles.searchIcon} name="lock-closed-outline" size={20} color="#000" />
                    <TextInput
                        style={[styles.input, ispswcfocused && { borderLeftWidth: 1, borderColor: 'black' }]}
                        name='comfirmpassword'
                        placeholder='Comfirm-password'
                        placeholderTextColor={'gray'}
                        autoCapitalize='none'
                        autoCorrect={false}
                        onBlur={() => setIsPswcFocused(false)}
                        onFocus={() => setIsPswcFocused(true)}
                        textContentType='newPassword'
                        secureTextEntry={passwordVisibility2}
                        // value={confirmpassword}
                        value={ispsw2}
                        onChangeText={(text) => { setIsPsw2(text); }}
                        enablesReturnKeyAutomatically
                    // onChangeText={text => setConfirmPassword(text)}
                    />
                    <View style={{ position: 'absolute', alignSelf: 'center', paddingLeft: 280, }}>
                        <Pressable onPress={handlePasswordVisibility2}>
                            <MaterialCommunityIcons name={rightIcon2} size={22} color='grey' />
                        </Pressable>
                    </View>
                </View>
                {ispsw2 === true && (<Text style={{ marginTop: 10, marginLeft: 25, color: 'red' }}>Please Enter Your Confirm Password</Text>)}
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    style={styles.checkbox}
                    value={isSelected}
                    onValueChange={() => setSelection(!isSelected)}
                    // color={isSelected ? "skyblue" : undefined}
                    // borderWidth={0}
                    tintColors={{ true: 'skyblue', false: 'black' }}
                />
                <Text style={styles.label}>Uou are agreeing to Ishita’s user agreement and privacy  policy.</Text>
            </View>
            <TouchableOpacity style={[{ backgroundColor: isSelected ? "skyblue" : "grey", alignSelf: 'center', width: '90%', margin: 5, borderRadius: 8 }]}
                disabled={!isSelected}
                // onPress={() => navigation.navigate('BottomNavigation')}
                onPress={() => register()}
            >
                <Text style={styles.buttonTextStyle}>Sign Up</Text>
            </TouchableOpacity>

            {/* <MultipleButton
            onPress={()=>navigation.navigate('Signup')}
            textColor='white'
            bgColor='skyblue'
            label={'Sign Up'}
          // onPress={()=> navigation.navigate('Signup')}
          />  */}
            <Text style={styles.textStyle3}>If you have already account, please Log In</Text>

            {/* </View> */}
        </ScrollView>
    );
};

export default Signup;
const styles = StyleSheet.create({
    MainContainer:
    {
        flex: 1,
        backgroundColor: Constant.color.WHITE,
    },

    checkboxContainer: {
        flexDirection: 'row',
        paddingBottom: 5,
        marginLeft: 12,
        // borderColor:'red',
        // color:Constant.color.BLACK,
    },
    checkbox: {
        left: 0,
        alignSelf: 'flex-end',
        transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
        // borderColor:'red',
        margin: 5,
        // color:Constant.color.BLACK,
    },
    label: {
        margin: 5,
        fontSize: 12,
        width: "100%",
        maxWidth: 250,
        left: 0,
        // textAlign:'center',
        alignSelf: 'flex-end',
        // aspectRatio:6,
        color: Constant.color.BLACK,
    },
    // commonStyle: {
    //     width: "84%",
    //     height: "10%",
    //     aspectRatio: 6,
    //     fontSize: 30,
    //     letterSpacing: 0.3,
    //     fontWeight: "bold",
    //     alignSelf: 'center',
    //     bottom: 10,
    //     top: 10,
    //     color:Constant.color.BLACK,
    // },
    // textStyle: {
    //     //maxWidth: 250,
    //     width: "65%",
    //     // height: "10%",
    //     aspectRatio: 4,
    //     fontSize: 15,
    //     alignSelf: 'center',
    //     textAlign: 'center',
    //     // bottom: 15,
    //     top: 5,
    //     color:Constant.color.BLACK,
    // },
    textStyle: {
        height: undefined,
        fontSize: 25,
        letterSpacing: 0.3,
        fontFamily: 'Poppins-Bold',
        alignSelf: 'center',
        // maxWidth: 300,
        width: '80%',
        lineHeight: 40,
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
        color: Constant.color.BLACK,
    },
    textStyle2: {
        // maxWidth: 235,
        width: '75%',
        height: undefined,
        fontSize: 18,
        lineHeight: 25,
        alignSelf: 'center',
        textAlign: 'center',
        color: Constant.color.BLACK,
    },
    searchSection: {
        // // flex: 1,
        // width: "84%",
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        // alignSelf:'center',
        // backgroundColor: '#fff',
        // marginTop:10,
        // borderWidth: 0.2,
        // color:Constant.color.BLACK,

        // flex: 1,
        width: "90%",
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 15,
        //   borderWidth: 0.2,
        borderWidth: 0.5,
        borderColor: 'grey',
    },
    searchIcon: {
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
    },
    input: {
        // flex: 1,
        // paddingTop: 10,
        // paddingRight: 10,
        // paddingBottom: 10,
        // paddingLeft: 10,
        // // backgroundColor: '#fff',
        // // color: '#424242',
        // borderWidth:0.2,
        // color:Constant.color.BLACK,

        flex: 1,
        // paddingTop: 10,
        // paddingRight: 5,
        // paddingBottom: 10,
        paddingLeft: 5,
        // color: '#424242',
        // borderWidth: 0.2,
        borderWidth: 0,
        borderLeftWidth: 0.7,
        borderColor: 'grey',
        color: Constant.color.BLACK,
    },
    buttonTextStyle: {
        textAlign: 'center',
        padding: 5,
        margin: 5,
        fontSize: 15,
        color: 'white',
        fontFamily: 'Poppins-Bold',
        alignSelf: 'center',
    },
    textStyle3: {
        // maxWidth:260,
        width: "70%",
        //height:"10%",
        marginTop: 5,
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
        alignSelf: 'center',
        // color:Constant.color.BLACK,
    },
    // btnStyle:{
    //    // backgroundColor: isSelected ? "skyblue" : "grey"
    //    backgroundColor:"skyblue",
    //    width:"84%",
    // //    left:15,
    //    alignSelf:'center',
    // },
})