import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Constant from '../../Config/Constant';
const { width } = Dimensions.get('window')


const SettingButton = ({ label, iconRight, iconLeft, onPress,type,name,size }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        // onPress={()=>navigation.navigate('Myprofile')}
        style={styles.cardContainer2}
        activeOpacity={0.5}
      >

        <View style={{ alignSelf: 'center' }}>
        
        <View>
           {/* icon : <Icon type={icontype} name={iconname} size={size}/> */}
           <AntDesign
            name={iconRight}
            size={20}
            color={'grey'}
          />
        </View>
          
        </View>
        <Text style={{ fontSize: 16, marginLeft: 20, alignSelf: 'center', color: Constant.color.GREY }}>{label}</Text>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignSelf: 'center', marginRight: 20 }}>
          <AntDesign
            name={iconRight}
            size={20}
            color={'grey'}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SettingButton

const styles = StyleSheet.create({
  // ButtonText: {
  //     fontSize: 15,
  //     fontFamily: 'Lato-Black',

  //   },
  //   buttonStyle: {
  //     flex: 0.48,
  //     // marginBottom: 5,
  //     // backgroundColor: "white",
  //     // alignItems: "center",
  //     borderWidth: 1,
  //     // borderColor: 'skyblue',
  //     alignItems: "center",
  //     alignSelf: 'center',
  //     // borderRadius: 8,
  //     // padding: 10,
  //     // marginBottom: 10,
  //     // fontSize: 25,
  //   }

  cardContainer2: {
    flex: 1,
    flexDirection: 'row',
    width: width * 0.9,
    aspectRatio: 5.7,
    padding: 10,
    alignSelf: 'center',
    alignContent: 'center',
    borderWidth: 0.5,
    borderRadius: 8,
    marginTop: 10,
    elevation: 5,
    borderColor: Constant.color.WHITE,
    backgroundColor: Constant.color.WHITE,
  },
})