import { StyleSheet, View, Image, StatusBar} from 'react-native'
import React from 'react'


const SplashScreen = ()=> {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        <StatusBar hidden={true}
        />
        <Image
        style={styles.image}
        // source={require('../Assets/Images/Splash1.png')}
        source={require('../Assets/Images/ndv.jpg')}
        // resizeMode={'stretch'}
        resizeMode={'contain'}
        />
      </View>
    );
  };

export default SplashScreen;
const styles = StyleSheet.create({
    image:{
        width: "100%", 
        height:"100%",
        ...StyleSheet.absoluteFillObject
    },
})