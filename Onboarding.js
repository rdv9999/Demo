import { Text, StyleSheet, View, Image,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import MultipleButton from './Component/MultipleButton'
import Constant from '../Config/Constant'
const Onboarding =({navigation})=> {
  // const names=[
  //   {
  //     index: "1",
  //     name:"Discover the latest womens wear",
  //   },
  //   {
  //     index: "2",
  //     name:"Discover the latest womens wear",
  //   },
  //   {
  //     index: "3",
  //     name:"Discover the latest womens wear",
  //   },
  // ];
    return (
      <SafeAreaView style={styles.MainContainer}>
      
      <View>
        <Image
        style={styles.image}
        source={require('../Assets/Images/photo.png')}
        resizeMode={'stretch'}
        />
       <LinearGradient colors={['rgba(0,0,0,0.1)','transparent','white']} style={styles.linearGradient}>
          
          </LinearGradient>
        {/* <Image 
        style={styles.image1}
        source={require('../Assets/Images/ishitaold.png')}
        resizeMode={'contain'}/> */}
               <Image 
        style={styles.image1}
        source={require('../Assets/Images/ndvbg.png')}
        resizeMode={'contain'}/>
    
      </View>
      <View>
        {/* <FlatList 
        style={[styles.commonStyle,styles.textStyle]}
        keyExtractor={(key)=>{
          return key.index;
        }}
             horizontal
             data={names}
             renderItem={(item)=>{
              console.log(item.name);
              return <Text style={[styles.commonStyle,styles.textStyle]}>{item.name}</Text>
             }}        
        
        /> */}
       <Text  style={styles.textStyle}
       >Discover the latest womens wear</Text>
      </View>
      <View>
        {/* <TouchableOpacity style={[styles.commonStyle,styles.buttonStyle1]} 
        onPress={()=> navigation.navigate('Login')} >
          <Text style={{color:'skyblue',  fontFamily:'Poppins-Bold',}}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.commonStyle,styles.buttonStyle]} onPress={()=> navigation.navigate('Signup')}>
          <Text style={{color:'white',  fontFamily:'Poppins-Bold',}}>Create Account</Text>
        </TouchableOpacity>
         */}
         <View style={{height:80}}>
         <MultipleButton
         onPress={()=>navigation.navigate('Login')}
        textColor='skyblue'
        marginTop={10}
        padding={10}
        borderRadius={8}
        label={'Login'}
        /> 
          </View>
          <View style={{height:80,}}>
          <MultipleButton
            onPress={()=>navigation.navigate('Signup')}
            textColor='white'
            bgColor='skyblue'
            marginTop={5}
            borderRadius={8}
            padding={10}
            label={'Create Account'}
          // onPress={()=> navigation.navigate('Signup')}
          /> 
         </View>
      </View>
    </SafeAreaView>
    );
  };
export default Onboarding;

const styles = StyleSheet.create({
  MainContainer:
    {
        flex: 1,
        backgroundColor:Constant.color.WHITE,
        // fontFamily:'Lato-Black',
    },  
  image:{
        width:"100%", 
        height:undefined,
        aspectRatio:0.9,
    },
    linearGradient: {
      //flex: 1,
      paddingLeft: 15,
      position:'absolute',
      width:'100%',
      height:'100%',
      paddingRight: 15,
      borderRadius: 5,
    },
      image1:{
        position: 'absolute',
        alignSelf:'center',
        width: "100%", 
        height:240,
        bottom:5,
        // position: 'absolute',
        // alignSelf:'center',
        // width: "100%", 
        // height:185,
        // bottom:25,
    },
    textStyle:{
       fontSize:30,
      //fontWeight:"bold",
       textAlign:"center",
       alignSelf:"center",
       fontFamily:'Poppins-Medium',
      //  padding:30,
       marginBottom:30,
       color:Constant.color.BLACK,
    },
    // buttonStyle1:{
    //   padding:10,
    //   marginBottom:10,
    //   backgroundColor:"white",
    //   alignItems:"center",
    //   width:340,
    //   color: 'yellow',
    //   top:10,
    //   marginTop:45,
    //   borderWidth:1,
    //   borderColor:'skyblue',
    // },
    // buttonStyle:{
    //   alignItems:"center",
    //   width:340,
    //   padding:10,
    //   backgroundColor:"skyblue",
    //   top:10,
    // },
  
})