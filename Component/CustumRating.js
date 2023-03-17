import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'

const CustumRating = () => {
  const [defaultRating,setDefaultRating]=useState(2);
  const [maxRating, setMaxRating] = useState([1,2,3,4,5]);

  // const starImgFilled='https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
  const starImgFilled='https://iconsplace.com/wp-content/uploads/_icons/000000/256/png/rating-star-icon-256.png'
  // const startImgCorner='https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'
  const startImgCorner='https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699070_960_720.png'
  const CustumRatingBar = () => {
    return(
     <View style={styles.CustumRatingBarStyle}>
     {
         maxRating.map((item,key)=>{
             return(
                 <TouchableOpacity
                   activeOpacity={0.7}
                   key={item}
                   onPress={()=>setDefaultRating(item)}
                 >
                     <Image
                      style={styles.starImgStyle}
                       source={
                         item <= defaultRating
                         ? {uri: starImgFilled}
                         : {uri: startImgCorner}
                       }
                     resizeMode={'cover'}
                     />
                 </TouchableOpacity>
             )
         })
     }
     </View>
     )
   }

    return (
     <View style={styles.container}>
        <CustumRatingBar/>
     </View>
  )
}

export default CustumRating

const styles = StyleSheet.create({

    container:{
        padding:5,
        justifyContent:'center'
    },
    CustumRatingBarStyle:{
        // justifyContent:'center',
        flexDirection:'row',
        marginTop:10,
        borderColor:'black',
    },
    starImgStyle:{
        width:30,
        height:30,
        // resizeMode:'cover'
    }
})