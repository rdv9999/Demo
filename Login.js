import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MultipleButton from './Component/MultipleButton';
import Constant from '../Config/Constant';
import { useTogglePasswordVisibility } from './Component/useTogglePasswordVisibility';

const Login = ({ navigation, props }) => {
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
        useTogglePasswordVisibility();
    
    const [isActive, setActive] = useState(false);

    // const [text,onChangeText] = React.useState('')
    // const [number, onChangeNumber] = React.useState('')

    const [isFocused, setIsFocused] = useState(false);
    const [ispsw, setIsPsw] = useState(false);
    // const [focus,setFocus]=useState(false);
    // const customStyle = focus ? styles.textInputFocus : styles.textInput;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [pssw, setPssw] = useState('');
    // const [badEmail, setBadEmail] = useState(false);
    // const [badPassword, setBadPassword] = useState(false);
    
    // const validate = () => {

    //     if (email == '') {
    //         setBadEmail(true);
    //     } else {
    //         setBadEmail(false);
    //     }
    //     if (password == '') {
    //         setBadPassword(true);
    //     } else {
    //         setBadPassword(false);
    //     }
    // };

    // const baseURL = 'https://project.sridixtechnology.com/ishitahouse/api/';
    const baseURL = 'https://project.sridixtechnology.com/ishitahouse/api/';
    const endPoint = 'login';

    const login = async () => {
        if (email.length === 0) {
            // alert('Please Enter Name')
            setEmail(true)
            return;
        }else{
            setEmail(false)
        }
        if (password.length === 0) {
            // alert('Please Enter Email')
            setPassword(true)
            return;
        }else{
            setPassword(false)
        }
       
    //    console.log( {
    //     "device_id": "20282028",
    //     "is_mobile": "1",
    //     "username": email,
    //     "password": password
    // })
        await axios.post(baseURL + endPoint, {
            "device_id": "20282028",
            "is_mobile": "1",
            "username": email,
            "password": password
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Header-Key': 'ish-02-2022'
            }
        })
            .then((Response) => {
                console.log(Response.data);
             
              if(Response.data.Status == 200){
                alert('Login Successfully')
                // navigation.navigate('DrawerNavigation')
                navigation.replace('DrawerNavigation')
              }
              if(Response.data.Status == 400){
                alert('Un-Successfully')
                // navigation.navigate('DrawerNavigation')
                // navigation.replace('DrawerNavigation')
              }
            //   else{
            //     alert('Login Unsuccess')
            //   }
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
            {/* // <SafeAreaView style={styles.MainContainer}> */}

            <Image style={{ height: "25%",  aspectRatio: 3, alignSelf:'center' }}
                source={require('../Assets/Images/ndvbg.png')}
                resizeMode={'contain'} />
            {/* <Image style={{ height: "10%", width: "70%", aspectRatio: 5, marginTop: 60, alignSelf: 'center' }}
                source={require('../Assets/Images/Logo.png')}
                resizeMode={'contain'} /> */}


            <Text style={[styles.textStyle]}>Welcome to Login</Text>

            <Text style={styles.textStyle2}>Please enter below details to login to your account</Text>

            
            <View style={[styles.searchSection, isFocused && { borderWidth: 1, borderColor: 'black' }]}>

                <AntDesign style={styles.searchIcon} name="user" size={20} color="#000" />
                <TextInput
                    style={[styles.input, isFocused && { borderLeftWidth: 1, borderColor: 'black' }]}
                    placeholder="Email"
                    value={email}
                    onChangeText={(text)=>{setEmail(text);}}
                    // onChangeText={text => setEmail({ text })}
                    placeholderTextColor={'gray'}
                    // style={[props.style, isFocused && {borderWidth: 5, borderColor: 'blue'}]}
                    onBlur={() => setIsFocused(false)}
                    onFocus={() => setIsFocused(true)}
                    //onChangeText={(searchString) => { this.setState({ searchString }) }}
                    underlineColorAndroid='transparent'
                />
            </View>
            {email === true && (<Text style={{ marginTop: 10, marginLeft: 25, color: 'red' }}>Please Enter Email Id</Text>)}
            <View style={[styles.searchSection, ispsw && { borderWidth: 1, borderColor: 'black' }]}>
                {/* <Octicons style={styles.searchIcon} name="lock" size={25} color="#000" /> */}
                <Ionicons style={styles.searchIcon} name="lock-closed-outline" size={20} color="#000" />
                <TextInput
                    style={[styles.input, ispsw && { borderLeftWidth: 1, borderColor: 'black' }]}
                    name='password'
                    placeholder='Enter password'
                    placeholderTextColor={'grey'}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onBlur={() => setIsPsw(false)}
                    onFocus={() => setIsPsw(true)}
                    textContentType='newPassword'
                    secureTextEntry={passwordVisibility}
                    value={password}
                    // value={pssw}
                    // onChangeText1={setPssw}
                    enablesReturnKeyAutomatically
                    onChangeText={text => setPassword(text)}
                />
                <View style={{ position: 'absolute', alignSelf: 'center', paddingLeft: 280, }}>
                    <Pressable onPress={handlePasswordVisibility}>
                        <MaterialCommunityIcons name={rightIcon} size={22} color='grey' />
                    </Pressable>
                </View>

            </View>
            
            {password === true && (<Text style={{ marginTop: 10, marginLeft: 25, color: 'red' }}>Please Enter Password</Text>)}
            <TouchableOpacity
                onPress={() => navigation.navigate('Forgetpassword')}
            ><Text style={{
                alignSelf: 'flex-end',
                marginHorizontal: 10,
                padding: 10,
                bottom: 4,
                color: Constant.color.BLACK
            }}>Forget password?</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={[styles.common, styles.buttonStyle]}
            onPress={()=>navigation.navigate('BottomNavigation')}>
                <Text style={{ fontSize: 15, color:'white',  fontFamily:'Poppins-Bold',}}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.common, styles.buttonStyle]}
                onPress={() => navigation.navigate('MobileNumber')}
            ><Text style={{ fontSize: 15, color:'white',  fontFamily:'Poppins-Bold', }}>Login with Mobile Number</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.common, styles.buttonStyle1]}
                onPress={() => navigation.navigate('Signup')}>
                <Text style={{ fontSize: 15,color:'skyblue',  fontFamily:'Poppins-Bold', }}>Create Account</Text>
            </TouchableOpacity> */}
            <View>
                <MultipleButton
                    // onPress={validate}
                    onPress={() => login()}
                    textColor='white'
                    width='90%'
                    bgColor='skyblue'
                    padding={14}
                    marginBottom={10}
                    borderRadius={8}
                    label={'Login'}
                />
                <MultipleButton
                    onPress={() => navigation.navigate('MobileNumber')}
                    textColor='white'
                    width='90%'
                    padding={14}
                    bgColor='skyblue'
                    marginBottom={10}
                    borderRadius={8}
                    label={'Login With Mobile Number'}
                />
                <MultipleButton
                    onPress={() => navigation.navigate('Signup')}
                    textColor='skyblue'
                    width='90%'
                    padding={14}
                    bgColor='white'
                    borderRadius={8}
                    label={'Create Account'}
                />
            </View>
        </ScrollView>
    );
};
export default Login;

const styles = StyleSheet.create({
    MainContainer:
    {
        flex: 1,
        backgroundColor: Constant.color.WHITE,
    },

    searchSection: {
        // flex: 1,
        width: "90%",
        // alignItems:'center',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 15,
        borderWidth: 0.5,
        // borderLeftWidth:1,
        // borderRightWidth:0,
        // borderTopWidth:1,
        // borderBottomLeftRadius:5,
        // borderBottomRightRadius:5,
        // borderBottomStartRadius:5,
        // borderBottomColor:'red',
        borderColor: 'grey',
    },
    searchIcon: {
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        // borderWidth: 0.5
    },
    input: {
        flex: 1,
        paddingLeft: 5,
        // backgroundColor: '#fff',
        //color: '#424242',
        borderWidth: 0,
        borderLeftWidth: 0.7,
        // borderLeftWidth:1,
        borderColor: 'grey',
        // placeholderTextColor: 'grey',
        color: Constant.color.BLACK,
    },

    textStyle: {
        height: undefined,
        fontSize: 25,
        letterSpacing: 0.3,
        fontFamily: 'Poppins-Bold',
        alignSelf: 'center',
        // maxWidth: 400,
        width: '80%',
        lineHeight: 40,
        // marginTop: 15,
        marginBottom: 15,
        textAlign: 'center',
        color: Constant.color.BLACK,
    },
    textStyle2: {
        // maxWidth: 20,
        width: '75%',
        height: undefined,
        fontSize: 18,
        lineHeight: 25,
        marginBottom: 25,
        alignSelf: 'center',
        textAlign: 'center',
        color: Constant.color.BLACK,
    },

    inputField: {
        padding: 14,
        fontSize: 22,
        width: '90%'
    },
    // buttonStyle1: {
    //     marginBottom: 5,
    //     backgroundColor: "white",
    //     alignItems: "center",
    //     borderWidth:1,
    //     borderColor:'skyblue',
    // },
    // buttonStyle: {
    //     alignItems: "center",
    //     backgroundColor: "skyblue",
    // },
    // common: {
    //     width: "85%",
    //     alignSelf: 'center',
    //     padding: 10,
    //     marginBottom: 10,
    //     fontSize: 25,
    // },
    // textInput:{
    //     backgroundColor:Constant.color.WHITE,
    //     borderColor:Constant.color.WHITE,
    //     color:Constant.color.BLUE,
    // },
    // textInputFocus:{
    //     backgroundColor:Constant.color.PINK,
    //     borderColor:Constant.color.BLACK,
    //     color:Constant.color.BLACK,
    // },
})