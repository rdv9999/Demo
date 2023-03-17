import { View, Text , FlatList,StyleSheet,image} from 'react-native'
import React from 'react'
import {FlatListSlider} from 'react-native-flatlist-slider';

const images = [
  {
   image:'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
   desc: 'Silent Waters in the mountains in midst of Himilayas',
  },
 {
   image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
   desc:'Red fort in India New Delhi is a magnificient masterpeiece of humans',
 },
 {
  image:'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  desc: 'Silent Waters in the mountains in midst of Himilayas',
 },
{
  image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
  desc:'Red fort in India New Delhi is a magnificient masterpeiece of humans',
},
{
  image:'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  desc: 'Silent Waters in the mountains in midst of Himilayas',
 },
{
  image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
  desc:'Red fort in India New Delhi is a magnificient masterpeiece of humans',
},
 ]
const CardFlatlist = () => {

    return (
    <View>
    <FlatListSlider
    data={images}
    width={275}
    timer={5000}
    // component={<Preview />}
    onPress={item => alert(JSON.stringify(item))}
    indicatorActiveWidth={40}
    contentContainerStyle={{paddingHorizontal: 16}}
  />
    </View>
  )
}
export default CardFlatlist;

