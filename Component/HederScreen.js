import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
// const [height,width]=Dimensions.get('window');
 
const HederScreen = ({navigation,pagenav,pagenav1}) => {
    return (
        <View style={{ flexDirection: 'row'}}>
          
           <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 12}}>
           <TouchableOpacity 
             onPress={()=> navigation.openDrawer()}
           >
            <Octicons
                name='three-bars' size={30} color="#000" />
                </TouchableOpacity>
            <Image source={require('../../Assets/Images/Logo.png')}
                style={{ height: 50, width: 120, aspectRatio: 1.8, marginLeft: 10 }}
                resizeMode={'contain'} />
                </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignSelf: 'center',}}>
                <TouchableOpacity
                 onPress={()=> navigation.navigate(pagenav1)}
                >
                <FontAwesome5
                    name="shopping-bag" size={30} color="#000" />
                 </TouchableOpacity>
                 <TouchableOpacity
                 navigation={navigation}
                  onPress={()=> navigation.navigate(pagenav)}
                 >
                <Image source={require('../../Assets/Images/HederLogo.png')}
                    style={{ height: 40, width: 60, alignSelf: 'center' ,marginLeft:10}}
                    
                    resizeMode={'contain'} />
                    </TouchableOpacity>
            </View>
        </View>
    )
}

export default HederScreen;