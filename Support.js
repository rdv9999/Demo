import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constant from '../Config/Constant'
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MultipleButton from './Component/MultipleButton';
const { height, width } = Dimensions.get('window')

const Support = () => {

  const Array = [
    {
      id: 1,
      name: 'Ishita House',
      address: '707-708, Nathubhai Tower, Jivan jyot Front of Honda showroom, Udhna, Surat,Gujarat 394210',
      email: 'customercare@ishitahouse.com',
      time: '09:00 AM to 06:00 PM (Mon-Sun)',
    },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={{ flexDirection: 'row', marginTop: 20, paddingBottom: 15, borderBottomWidth: 3, borderColor: 'skyblue' }}>
          <SimpleLineIcons
            style={{ marginHorizontal: 5, marginLeft: 20}}
            name={'user-female'}
            size={25}
            color={'grey'}
          />
          <Text style={styles.text1}>Contact Detail</Text>
        </View>

        {
          Array.map((item, index) => {
            return (
              <View style={{ padding: 10 }}>

                <Text style={styles.text2}>Customer Care</Text>
                <View>
                  <Text style={styles.text3}>{item.name}</Text>
                  <Text style={styles.text4}>{item.address}</Text>
                </View>

                <View>
                  <View style={{ flexDirection: 'row', marginTop: 15, }}>
                    <MaterialCommunityIcons
                      style={{ marginHorizontal: 5, marginLeft: 15 }}
                      name={'email-outline'}
                      size={25}
                      color={'grey'}
                    />
                    <Text style={styles.text5}>{item.email}</Text>
                  </View>

                  <View style={{ flexDirection: 'row', marginTop: 15, }}>
                    <MaterialCommunityIcons
                      style={{ marginHorizontal: 5, marginLeft: 15 }}
                      name={'clock-time-four-outline'}
                      size={25}
                      color={'grey'}
                    />
                    <Text style={styles.text6}>{item.time}</Text>
                  </View>
                </View>

                <View style={{ height: 80, width: '30%', marginLeft: 8 }}>
                  <MultipleButton
                    label={'Call Now'}
                    fontSize={15}
                    borderRadius={8}
                    width={'100%'}
                    height={'100%'}
                    marginTop={15}
                    textColor={'white'}
                    bgColor={'#01A2F0'}
                  />

                </View>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}

export default Support

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constant.color.WHITE,
  },
  cardContainer: {
    width: width * 0.95,
    height: 370,
    alignSelf: 'center',
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: Constant.color.WHITE,
    elevation: 6,
    shadowColor: 'grey',
    marginTop: 15,
    backgroundColor: Constant.color.WHITE,
    // backgroundColor: 'yellow'
  },
  text1: {
    width: '88%',
    fontSize: 15,
    marginLeft: 10,
    top: 3,
    color: 'black',
    fontFamily: 'Lato-Bold',
    // lineHeight: 20,
  },
  text2: {

    fontSize: 15,
    marginLeft: 10,
    marginTop: 5,
    color: 'black',
    fontFamily: 'Poppins-Regular',
    // lineHeight: 20,
  },
  text3: {

    fontSize: 14,
    marginLeft: 10,
    marginTop: 5,
    color: 'black',
    fontFamily: 'Poppins-Bold',
    // lineHeight: 20,
  },
  text4: {

    fontSize: 14,
    marginLeft: 10,
    maxWidth: 250,
    marginTop: 5,
    color: 'black',
    fontFamily: 'Lato-Light',
    // lineHeight: 20,
  },
  text5: {
    width: '88%',
    fontSize: 14,
    // marginTop: 3,
    alignSelf:'center',
    marginLeft: 8,
    color: 'skyblue',
    fontFamily: 'Lato-Bold',
    // lineHeight: 20,
  },
  text6: {
    width: '88%',
    fontSize: 14,
    // marginTop: 3,
    marginLeft: 8,
    color: 'black',
    alignSelf:'center',
    fontFamily: 'Lato-Bold',
  },
})