import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React,{useState} from 'react'



const MultipleButton = ({ children, label, textColor = 'white', bgColor = 'white', onBlur,onFocus,onPress, width = '85%', marginTop, fontSize = 15, marginBottom, borderColor = 'skyblue', elevation ,padding,borderRightRadius,borderLeftRadius,borderRadius,}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    // <View>
    <TouchableOpacity style={[style.buttonStyle,isFocused && {borderWidth: 1, borderColor: 'red'}, { 
      backgroundColor: bgColor, 
      width: width, 
      marginTop: marginTop, 
      marginBottom: marginBottom, 
      borderColor: borderColor,
      elevation: elevation ,
      padding:padding,
      borderRadius:borderRadius,
      borderLeftRadius:borderLeftRadius,
      borderRightRadius:borderRightRadius,
      justifyContent:'center',
      
    }]}
    // onBlur={() => setIsFocused(false)}
    onFocus={onFocus}
    onPress={onPress} >
     
    
      <Text style={[style.ButtonText, { color: textColor, fontSize: fontSize }]}>{label}</Text>
     
    </TouchableOpacity>
  
  )
}

export default MultipleButton;
const style = StyleSheet.create({
  ButtonText: {
    fontSize: 15,
    fontFamily: 'Lato-Black',
    
  },
  buttonStyle: {
    flex: 0.48,
    // marginBottom: 5,
    // backgroundColor: "white",
    // alignItems: "center",
    borderWidth: 1,
    // borderColor: 'skyblue',
    alignItems: "center",
    alignSelf: 'center',
    // borderRadius: 8,
    // padding: 10,
    // marginBottom: 10,
    // fontSize: 25,
  }
})