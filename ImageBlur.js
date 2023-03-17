import { Text, StyleSheet, View,TouchableOpacity,Image } from 'react-native'
import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'
const ImageBlur = () => {
  
    return (
        <View style={styles.container}>
          <Image
        style={styles.image}
        source={require('../Assets/Images/photo.png')}
        resizeMode={'stretch'}
        />
          <LinearGradient colors={['rgba(0,0,0,0.1)','white','rgba(0,0,0,0.1)']} style={styles.linearGradient}>
          
          </LinearGradient>

      </View>
    )
  }

  export default ImageBlur;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       // backgroundColor: '#F5FCFF',

      },
      linearGradient: {
        flex: 1,
        paddingLeft: 15,
        position:'absolute',
        width:'100%',
        height:'100%',
        paddingRight: 15,
        borderRadius: 5,
      },
      image:{
        width:"100%", 
        height:undefined,
        aspectRatio:1,
    },
})