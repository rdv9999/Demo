import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions,Image,TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Constant from '../Config/Constant';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MultipleButton from '../Screens/Component/MultipleButton';
const { height,width } = Dimensions.get('window')
const Order = (props) => {

  const Array=[
    {
      id: 1,
      Name:'New Mehgha Printed Kurti with Duppta',
      img:require('../Assets/Images/photo.png'),
      amount:1590,
      qty:2,
      status:'Pending',
      routeName : 'Address',
    }
  ];

  const { navigation } = props
  const handlerClick = (item) => {
    navigation.navigate(item.routeName, { ...item })
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', width: width, marginTop: 5, backgroundColor: 'skyblue', borderBottomWidth: 0.1, justifyContent: 'space-evenly', }}>
        <MultipleButton
          label={'In-progress'}
          textColor='white'
          alignSelf={'center'}
          elevation={2}
          padding={14}
          borderColor={'skyblue'}
          bgColor={'skyblue'}
          width={'100%'}
        />
        <MultipleButton
          label={'History'}
          textColor='white'
          borderColor={'skyblue'}
          bgColor={'skyblue'}
          elevation={2}
          padding={14}
          width='100%'
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1}}>       
        <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => handlerClick(item)}
        >
          
          <FlatList
          data={Array}
          keyExtractor={(item)=>{item.id}}
          // onPress={()=>handlerClick(item)}
          
          renderItem={({item})=>{
            return(
              <View style={styles.Cardcontainer}
              >
              <View style={{ flex: 0.33, borderWidth: 0.3,borderColor:'white',height:height*0.18,width:width*0.25,margin:5,borderRadius:12}}>
                <Image 
                source={item.img}
                style={{
                  height:'95%',
                  width:'100%',
                  // margin:5,
                  borderRadius:12,
                }}
                resizeMode={'contain'}
                />
              </View>
              <View style={{ flex: 0.77,borderWidth: 0.3, paddingHorizontal: 6,marginLeft:5,marginTop:5,borderColor:'white' }}>
                <Text
                numberOfLines={2}
                style={styles.text1}
                >{item.Name}</Text>
            
                <View style={{flexDirection:'row'}}>
                  <Text style={styles.text2}>Price:</Text>
                  <FontAwesome
                  style={{
                       
                      alignSelf:'center',
                      padding:5,
                  }}
                            name='rupee' size={18} color="red" />
                  <Text style={styles.text3}>{item.amount}</Text>
                  <View style={{flexDirection:'row',marginLeft:10}}>
                    <Text style={styles.text2}>Qty:</Text>
                    <Text style={[styles.text3,{marginLeft:5}]}>{item.qty}</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row',paddingVertical:18}}>
                  <Text style={styles.text2}>Delivery Status:</Text>
                  <Text style={styles.text4}>{item.status}</Text>
                </View>
              </View>
          </View>
            )
          }}
          />
      
        </TouchableOpacity>

        <View style={styles.Cardcontainer}>
            
            <View style={{ flex: 0.77,borderWidth: 0.3, paddingHorizontal: 6,marginLeft:5,marginTop:5,borderColor:'white' }}>
              <Text
              numberOfLines={2}
              style={styles.text1}
              >New Megha Printed Kurti with Duppta</Text>
          
              <View style={{flexDirection:'row'}}>
                <Text style={styles.text2}>Price:</Text>
                <FontAwesome
                style={{
                     
                    alignSelf:'center',
                    padding:5,
                }}
                          name='rupee' size={18} color="red" />
                <Text style={styles.text3}>1590</Text>
                <View style={{flexDirection:'row',marginLeft:10}}>
                  <Text style={styles.text2}>Qty:</Text>
                  <Text style={[styles.text3,{marginLeft:5}]}>4</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',paddingVertical:18}}>
                <Text style={styles.text2}>Delivery Status:</Text>
                <Text style={styles.text4}>Pending</Text>
              </View>
            </View>
            <View style={{flex: 0.33,}}>
            <View style={{ flex: 0.45, borderWidth: 0.3,borderColor:'white',height:height*0.20,width:width*0.20,margin:5,borderRadius:12}}>
              <Image 
              source={require('../Assets/Images/photo.png')}
              style={{
                height:'100%',
                width:'70%',
                // margin:5,
                borderRadius:12,
              }}
              resizeMode={'contain'}
              />

            </View>

            <View style={{ flex: 0.45, borderWidth: 0.3,borderColor:'white',height:height*0.20,width:width*0.20,margin:5,borderRadius:12}}>
              <Image 
              source={require('../Assets/Images/photo.png')}
              style={{
                height:'100%',
                width:'70%',
                // margin:5,
                borderRadius:12,
              }}
              resizeMode={'contain'}
              />
              <TouchableOpacity style={{position:'absolute',width:'45%',alignSelf:'center'}}>
              <Text style={{fontSize:13,fontFamily:'Poppins-Light',color:'white',textAlign:'center'}}>+2 More</Text>
              </TouchableOpacity>
            </View>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Order

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Constant.color.WHITE,
    // fontFamily: Constant.fonts.raju,
  },

  Cardcontainer: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      height: 15,
      width: 15
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    backgroundColor: '#FFF',
    // padding: 10,
    flexDirection: 'row',
    // height: 120,
    width: width * 0.95,
    height: height*0.19,
    alignSelf: 'center',
    borderRadius: 10,
    margin: 10,
  },
  text1:{
    fontSize:18,
    marginBottom:5,
    color:Constant.color.GREY,
    lineHeight:25,
  },
  text2:{
    fontSize:16,
    color:Constant.color.GREYLIGHT,
  },
  text3:{
    fontSize:16,
    fontFamily:'Poppins-SemiBold',
    color:Constant.color.GREY,
  },
  text4:{
    fontSize:16,
    fontFamily:'Poppins-SemiBold',
    color:Constant.color.SKYBLUE,
  }
})