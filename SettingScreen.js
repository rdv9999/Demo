import { Text, StyleSheet, View, Image, SafeAreaView, Dimensions, ScrollView, TouchableOpacity,StatusBar } from 'react-native'
import React from 'react'
import Constant from '../Config/Constant'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const { height, width } = Dimensions.get('window')

const SettingScreen = ( props) => {

  const settingCard = [
    {
      id: 1,
      IconName: () => {
        return (
          <Ionicons
            name={'location-sharp'}
            size={20}
            color={'grey'}
          />
        )
      },
      settingName: 'MyAddress',
      routeName : 'Address',
      IconName2: () => {
        return (
          <AntDesign
            name={'arrowright'}
            size={20}
            color={'grey'}
          />
        )
      }
    },

    {
      id: 2,
      IconName: () => {
        return (
          <Entypo
            name={'news'}
            size={20}
            color={'grey'}
          />
        )
      },
      settingName: 'MyOrder',
      routeName : 'Order',
      IconName2: () => {
        return (
          <AntDesign
            name={'arrowright'}
            size={20}
            color={'grey'}
          />
        )
      }
    },

    {
      id: 3,
      IconName: () => {
        return (
          <AntDesign
            name={'wallet'}
            size={20}
            color={'grey'}
          />
        )
      },
      settingName: 'Wallet',
      routeName : 'Wallet',
      IconName2: () => {
        return (
          <AntDesign
            name={'arrowright'}
            size={20}
            color={'grey'}
          />
        )
      }
    },

    {
      id: 4,
      IconName: () => {
        return (
          <FontAwesome
            name={'users'}
            size={20}
            color={'grey'}
          />
        )
      },
      settingName: 'Refer & Earn',
      routeName : 'ReferEarn',
      IconName2: () => {
        return (
          <AntDesign
            name={'arrowright'}
            size={20}
            color={'grey'}
          />
        )
      }
    },

    {
      id: 5,
      IconName: () => {
        return (
          <AntDesign
            name={'exclamationcircle'}
            size={20}
            color={'grey'}
          />
        )
      },
      settingName: 'Term & Condition',
      routeName : 'TermCondition',
      IconName2: () => {
        return (
          <AntDesign
            name={'arrowright'}
            size={20}
            color={'grey'}
          />
        )
      }
    },

    {
      id: 6,
      IconName: () => {
        return (
          <AntDesign
            name={'questioncircle'}
            size={20}
            color={'grey'}
          />
        )
      },
      settingName: 'Support',
      routeName : 'Support',
      IconName2: () => {
        return (
          <AntDesign
            name={'arrowright'}
            size={20}
            color={'grey'}
          />
        )
      }
    },
    {
      id: 7,
      IconName: () => {
        return (
          <MaterialCommunityIcons
            name={'logout'}
            size={20}
            color={'grey'}
          />
        )
      },
      settingName: 'Logout',
      routeName:'Login',
      IconName2: () => {
        return (
          <AntDesign
            name={'arrowright'}
            size={20}
            color={'grey'}
          />
        )
      }
    },
  ]

  
  return (
    <SafeAreaView style={styles.container}>

      <View>

        <View style={styles.container2} />

        <View style={styles.imageContainer}>
          <Image
            style={styles.profileImage}
            source={require('../Assets/Images/photo.png')}
            resizeMode={'contain'}
          />
        </View>
      </View>
      <ScrollView
        style={{ flex: 1 }}
      >

<View
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingVertical: 15 }}
        >
          <View
            style={styles.cardContainer}
          //style={{flex:1 , width:width*0.9,alignSelf:'center',height:undefined,aspectRatio:3,borderWidth:0.5,borderRadius:10}}
          >
            <View>
              <View
              //style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 16, alignSelf: 'center' }}
              >
                <View>
                  <Text style={styles.text1}>Rajat Vyawhare</Text>
                  <View style={{
                    flexDirection: 'row',
                    marginTop: 5,
                    // justifyContent: 'center',
                    fontSize: 15,
                    // marginTop: 5,
                    alignSelf: 'center',
                  }}>
                    <Ionicons
                      name={'location-sharp'}
                      size={15}
                      color={'grey'}
                    />
                    <Text style={[{ marginLeft: 5, color: Constant.color.GREY }]}>Gujarat</Text>
                  </View>
                  <View>
                    <Text style={styles.text2}>SridixTechonology@gmail.com</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          </View>
        <View>

{

  settingCard.map((item, index) => {
    const Tag = item.IconName;
    const Tag2 = item.IconName2;
    const { navigation } = props
    const handlerClick = (item) => {
      /*
         all the content of item (name, and type) will be passed in
         props of the other page component
      */
      // navigation.navigate("Address", { ...item })
      navigation.navigate(item.routeName, { ...item })
    }
    return (
      <View key={index}>
        <TouchableOpacity
          onPress={() => handlerClick(item)}
          // onPress={()=>navigation.navigate('Myprofile')}
          style={styles.cardContainer2}
          activeOpacity={0.5}
        >

          <View style={{ alignSelf: 'center' }}>
            <Tag />
          </View>
          <Text style={{ fontSize: 16, marginLeft: 20, alignSelf: 'center', color: Constant.color.GREY }}>{item.settingName}</Text>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignSelf: 'center', marginRight: 20 }}>
            <Tag2 />
          </View>
        </TouchableOpacity>
      </View>
    )
  })
}

</View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constant.color.WHITE,
  },

  container2: {
    marginTop: -400,
    alignSelf: 'center',
    // position: 'absolute',
    height: undefined,
    width: width * 1.5,
    aspectRatio: 1,
    borderRadius: width,
    backgroundColor: '#01A2F0'
  },
  profileImage: {
    height: undefined,
    aspectRatio: 1,
    width: 150,
    alignSelf: 'center',
    borderWidth: 1.2,
    borderRadius: 150 / 2,
  },

  imageContainer: {
    //flex: 2,
    //height:height*2,    
    //width:'10%',
    //aspectRatio: 0.4,
    // position:'absolute',
    // flex:0.26,
    // marginTop:'30%',
    // marginBottom:15,
    // borderWidth: 1.2,
    // borderRadius: 150 / 2,
    // borderRadius: 75,
    // elevation: 5,
    // alignSelf: 'center',
    // justifyContent: 'center',
    // borderColor:'#01A2F0',
    // backgroundColor: 'white',
    // position: 'absolute',
    marginBottom: 10,
    // alignSelf:'center',
    // // height:'88%',
    // top : 
    // zIndex:1,
    marginTop: -100
  },
  cardContainer: {
    // flex: 1,
    // position:'absolute',
    // padding: 10,
    // marginTop:20,
    // position:'relative',
    alignItems: 'center',
    width: width * 0.9,
    aspectRatio: 3,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: Constant.color.WHITE,
    elevation: 7,
    backgroundColor: Constant.color.WHITE,
  },
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

  text1: {
    top: 5,
    fontSize: 25,
    alignSelf: 'center',
    // color:Constant.color.SKYBLUE,
    color: '#01A2F0',
  },
  text2: {
    fontSize: 15,
    marginTop: 5,
    alignSelf: 'center',
    color: Constant.color.GREY,
  }
})