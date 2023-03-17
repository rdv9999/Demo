import { View, Text, Image, FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'

const { height, width } = Dimensions.get('window')
const Productdetail = () => {

  const [data, setData] = useState([1, 2, 3, 4, 5])
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const ImageArray=[
    {
        img:require('../../Assets/Images/1.png')
    }
  ]
  return (
    <View
    style={{backgroundColor:'white'}}
    >
      <FlatList
        onScroll={e => {
          const x = e.nativeEvent.contentOffset.x;
          setCurrentIndex((x / width).toFixed(0));
        }}
        data={ImageArray}
        horizontal
        pagingEnabled
        contentContainerStyle={{
        paddingVertical : 15,  
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          
          return (
            <View
            style={{
              height: undefined,
              width:width * 0.95,
              aspectRatio : 2.3,
              marginHorizontal : 5,
              borderWidth : 1,
              borderRadius : 5,
              backgroundColor : 'pink'
            }}
           on 
            >
              <Image
                source={item.img}
                resizeMode={'contain'}
                style={{
                  width: '100%',
                  height: '100%'
                }}
              />
            </View>
          )
        }}
        keyExtractor={(item) => item.id}
      />


      <View
        style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {
          data.map((item, index) => {
            return (
              <View
                style={{
                  width: currentIndex == index ? 25 : 6,
                  height: currentIndex == index ? 10 : 7,
                  borderRadius: 8,
                  backgroundColor: currentIndex == index ? 'skyblue' : 'gray',
                  marginLeft: 6,
                  marginRight:6,
                  marginTop: 5,
                  marginBottom:15,
                }}
              >
                 <Image
                source={item.img}
                resizeMode={'contain'}
                style={{
                  width: '100%',
                  height: '100%'
                }}
              />
              </View>
              
            )
          })
        }
      </View>
    </View>
  )
}
export default Productdetail;

