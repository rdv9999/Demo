import { View, Text, Image,FlatList,Dimensions} from 'react-native'
import React from 'react'
// import HomePage from '../HomePage'?
// import {FlatListSlider} from 'react-native-flatlist-slider';
// import '../../Assets/Images/1.png'

const FlatlistImage = ({image = []}) => {

  const numColumns=2
  // const WIDTH = Dimensions.get('window').width

// const imag1 = [

//   ]
  const ItemDivider = ({children}) => {
    return (
      <View
        style={{
          height: 10,
          // flexWrap: 'wrap'
        }}
      />
    );
  }
    return (
    <View 
    //style={{padding:10}}
    >
      
   <FlatList
          data={image}
          numColumns={numColumns}
          // ItemSeparatorComponent={(props) => {
          //   console.log('props', props); // here you can access the trailingItem with props.trailingItem
          //   return (<View style={{height: 10, backgroundColor: props.highlighted ? 'red' : 'white',}} />);
          // }}
         ItemSeparatorComponent={ItemDivider}
          
          renderItem={({item}) => {
            // console.log(item);
            return(
              <Image
             source={item.img}
               style={{ height:'47%',width:'47%',aspectRatio:1,marginRight:10,marginLeft:2,alignSelf:'center'}}
               />
            )
          }}
          // keyExtractor={(_, index) =>  index.toString()}
          keyExtractor={(item) => item.id}
        />
    </View>
  )
}
export default FlatlistImage;

