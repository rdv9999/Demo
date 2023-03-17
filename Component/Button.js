import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import Constant from '../../Config/Constant'
import AntDesign from 'react-native-vector-icons/AntDesign';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Button = ({children,label}) => {
  return (
    <View 
       style={{
        flex:1,
        // width:'10%',
        backgroundColor:Constant.color.WHITE,
        marginLeft:3,
        borderWidth:1,
        borderRadius:10,
        borderColor:'#dddddd',
        marginHorizontal:6,
        marginTop:5,
        marginBottom:12}}>
          
      <TouchableOpacity>
        {/* <Text>{label}</Text> */}
        <View style={styles.searchIcon2}>
                  <TouchableOpacity>
                    <AntDesign 
                    //color={focused ? 'skyblue' : 'black'}
                      name="hearto" size={20} color="skyblue" />
                  </TouchableOpacity>
                </View>
        {children}

      </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  

  searchIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    ustifyContent: 'flex-start',
    paddingHorizontal: 12,
    marginBottom: 5,
    paddingRight: 5,
    paddingLeft: 5,
    width: 135,
  },

  TextStyle4: {
    // fontSize: 15,
    fontSize: Constant.spacing[2],
    color: 'red',
  },

  searchIcon2: {
    flex: 1,
    alignSelf:'flex-end',
    position:'absolute',
    marginTop: 5,
    paddingRight:5,
    zIndex: 1
    
  },

  // TextStyle1: {
  //   flex: 1,
  //   width: 125,
  //   fontSize: 12,
  //   fontFamily: 'Poppins-Bold',
  //   flexWrap: 'wrap',
  //   marginLeft: 4,
  //   color: '#212121',
  // },

  // TextStyle2: {
  //   fontSize: 10,
  //   flexWrap: 'wrap',
  //   fontFamily: 'Poppins-Medium',
  //   flex: 1,
  //   width: 125,
  //   marginLeft: 4,
  //   marginBottom: 12,
  //   color: '#B6B6B6',
  // },
  
});