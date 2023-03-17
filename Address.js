import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Constant from '../Config/Constant'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const { height, width } = Dimensions.get('window')

const Address = ({ navigation }) => {

  const Address = [
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
      Type: 'Home Address',
      Add: '707-708, Nathubhai Tower, Jivan jyot,Front of Honda showroom, Udhna, Surat,Gujarat 394210',
      routeName:'AddNewAddress',
      IconName2: () => {
        return (
          <AntDesign
            name={'edit'}
            size={20}
            color={'skyblue'}
          />
        )
      }
    },
    {
      id: 2,
      IconName: () => {
        return (
          <Ionicons
            name={'location-sharp'}
            size={20}
            color={'grey'}
          />
        )
      },
      Type: 'Office Address',
      Add: '707-708, Nathubhai Tower, Jivan jyot,Front of Honda showroom, Udhna, Surat,Gujarat 394210',
      routeName:'AddNewAddress',
      IconName2: () => {
        return (
          <AntDesign
            name={'edit'}
            size={20}
            color={'skyblue'}
          />
        )
      }
    },
  ]
  return (
    <View style={{ flex: 1, backgroundColor: Constant.color.WHITE }}>
      <View>

        <TouchableOpacity style={styles.btnStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('AddNewAddress')}
        >
          <View>
            <Ionicons
              style={{ marginLeft: 10 }}
              name={'add-circle'}
              size={25}
              color={'skyblue'}
            />
          </View>
          <View>
            <Text style={styles.textStyle}>Add to cart</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>

        {

          Address.map((item, index) => {
            const Tag = item.IconName;
            const Tag2 = item.IconName2;
            // const { navigation } = props
            const handlerClick = (item) => {
              /*
                 all the content of item (name, and type) will be passed in
                 props of the other page component
              */
              // navigation.navigate("Address", { ...item })
              navigation.navigate(item.routeName, { ...item })
            }
            return (
              <View key={index} style={styles.cardContainer2}>
                <TouchableOpacity
                  onPress={() => handlerClick(item)}
                  // onPress={()=>navigation.navigate('Myprofile')}
                  activeOpacity={0.5}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ alignSelf: 'center',marginLeft:10 }}>
                      <Tag />
                    </View>
                    <Text style={{ fontSize: 16, marginLeft: 15, alignSelf: 'center', color: Constant.color.SKYBLUE }}>{item.Type}</Text>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignSelf: 'center', marginRight: 5 }}>
                      <Tag2 />
                    </TouchableOpacity>
                  </View>
                  <Text style={{ fontSize: 16, marginLeft: 35, alignSelf: 'center', color: Constant.color.BLACK }}>{item.Add}</Text>
                </TouchableOpacity>
              </View>
            )
          })
        }

      </View>
    </View>
  )
}

export default Address

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginVertical: 10,
    elevation: 8,
    borderWidth: 0.5,
    borderColor: 'white',
    paddingVertical: 10,
    width: '95%',
    alignSelf: 'center',
  },
  textStyle: {
    color: 'skyblue',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    marginLeft: 4,
  },
  cardContainer2: {
    width: width * 0.95,
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom:10,
    elevation: 8,
    alignSelf: 'center',
    // margin: 5, 
    borderColor: 'white',
    padding: 5,
    paddingTop: 15,
    paddingBottom: 15
  },
})