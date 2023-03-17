import { Dimensions, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import MultipleButton from './Component/MultipleButton';
import Constant from '../Config/Constant'
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group/lib/RadioGroup';

const { height, width } = Dimensions.get('window');
const AddNewAddress = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  const [radioButtons, setRadioButtons] = useState([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Home',
      value: 'option1'
    },
    {
      id: '2',
      label: 'Office',
      value: 'option2'
    }
  ]);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  return (

    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={{ width: width * 0.9, marginBottom: 0, marginLeft: 10, marginRight: 10, }}>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Full Name*"
              placeholderTextColor={'gray'}
              underlineColorAndroid='transparent'
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Flat/House No/Building"
              placeholderTextColor={'gray'}
              underlineColorAndroid='transparent'
            />
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="Street Address/Colony Details*"
              placeholderTextColor={'gray'}
              underlineColorAndroid='transparent'
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Landmark(optional)"
              placeholderTextColor={'gray'}
              underlineColorAndroid='transparent'
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Pincode*"
              keyboardType='numeric'
              maxLength={6}
              placeholderTextColor={'gray'}
              underlineColorAndroid='transparent'
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="City*"
              placeholderTextColor={'gray'}
              underlineColorAndroid='transparent'
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="State"
              placeholderTextColor={'gray'}
              underlineColorAndroid='transparent'
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <View style={{ flex: 0.14, alignItems: 'center', borderBottomWidth: 0.5, flexWrap: 'wrap', }}>
              <Text style={{ flex: 1, color: 'grey', marginTop: 14, }}>+91</Text>
            </View>
            <View style={{ flex: 0.9, backgroundColor: 'white', marginLeft: 10, borderBottomWidth: 0.5, flexDirection: 'row', justifyContent: 'space-between' }}>
              <View>
                <TextInput
                  style={styles.input2}
                  placeholder="Mobile No*"
                  keyboardType='numeric'
                  maxLength={10}
                  placeholderTextColor={'gray'}
                  underlineColorAndroid='transparent'
                />
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
            <Text style={styles.text1}>Alternate No</Text>
            <Text style={styles.text2}>(Optional)</Text>
          </View>



          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <View style={{ flex: 0.14, borderBottomWidth: 0.5, alignItems: 'flex-start', }}>
              <Text style={{ flex: 1, color: 'grey', marginTop: 12 }}>+91</Text>
            </View>
            <View style={{ flex: 0.9, backgroundColor: 'white', marginLeft: 10, borderBottomWidth: 0.5, flexDirection: 'row', justifyContent: 'space-between' }}>
              <View>
                <TextInput
                  style={styles.input3}
                  placeholder="Mobile No*"
                  keyboardType='numeric'
                  maxLength={10}
                  placeholderTextColor={'gray'}
                  underlineColorAndroid='transparent'
                />
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
            <Text style={styles.text2}>Address Type</Text>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
              layout='row'
              // color={isSelected ? 'red' : 'blue'}
              // color={'red'}
              // style={{backgroundColor: isSelected ? 'blue':'grey'}}
              // backgroundColor={'red'}
            />
          </View>

        </View>
        <View style={{ flexDirection: 'row', flex: 1, width: '90%', aspectRatio: 0.8 }}>
          <View style={{ height: '25%', width: '55%' }}>
            <MultipleButton
              label={'Cancel'}
              // bgColor={'skyblue'}
              textColor={'skyblue'}
              padding={5}
              fontSize={18}
              // width={'50%'}
              marginTop={15}
              // marginBottom={5}
              borderRadius={5}
            />
          </View>

          <View style={{ height: '25%', width: '55%', }}>
            <MultipleButton
              label={'Continue'}
              bgColor={'skyblue'}
              padding={5}
              fontSize={18}
              // width={'50%'}
              marginTop={15}
              // marginBottom={5}
              borderRadius={5}
              onPress={() => navigation.navigate('Address')}
            />
          </View>
        </View>
      </ScrollView>
    </View>

  )
}

export default AddNewAddress

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constant.color.WHITE,

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    width: width * 0.9,
    paddingLeft: 5,
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    color: Constant.color.BLACK,
  },
  input2: {
    // paddingLeft: 15,
    // paddingLeft: 5,
    borderWidth: 0,
    borderColor: 'grey',
    color: Constant.color.BLACK,
  },
  input3: {
    paddingLeft: 5,
    borderWidth: 0,
    // borderBottomWidth: 0.5,
    borderColor: 'grey',
    color: Constant.color.BLACK,
  },
  text1: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 15,
    color: '#01A2F0',
  },
  text2: {
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 5,
    fontSize: 15,
    color: 'grey',
  },
})