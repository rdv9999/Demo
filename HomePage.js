import { Text, StyleSheet, View, Image, SafeAreaView, TouchableOpacity, ScrollView, FlatList, Dimensions } from 'react-native'
import React, { useState,useEffect } from 'react'
// import Category from './Component/Category';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FlatlistImage from './Component/FlatListImage';
import ScrollImage from './Component/ScrollImage';
import Constant from '../Config/Constant';

const { height, width } = Dimensions.get('window')
const HomePage = (props) => {

  useEffect(()=>{
    console.log(Card);
    let categories = [];
     Card.category.map(item => {
       categories.push(item); //we are pushing categories item from here
      } );
   },[]) 
// console.log(Example)
  // const [data, setData] = useState([1, 2, 3, 4, 5])
  // const [currentIndex, setCurrentIndex] = useState(0);
  const image = [
    { id: 1, img: require('../Assets/Images/s1.png') },
    { id: 2, img: require('../Assets/Images/s2.png') },
    { id: 3, img: require('../Assets/Images/s3.png') },
    { id: 4, img: require('../Assets/Images/s4.png') },
  ]
  const image2 = [
    { id: 5, img: require('../Assets/Images/s5.png') },
    { id: 6, img: require('../Assets/Images/s6.png') },
    { id: 7, img: require('../Assets/Images/s7.png') },
    { id: 8, img: require('../Assets/Images/s8.png') },
  ]
  const scroll = [
    { id: 9, img: require('../Assets/Images/banner5.png') },
    { id: 10, img: require('../Assets/Images/banner4.png') },
    { id: 11, img: require('../Assets/Images/banner3.png') },
    { id: 12, img: require('../Assets/Images/banner2.png') },
  ]
  const stories = [
    {
      id: 1,
      image: require('../Assets/Images/kurti.png'),
      name: 'Kurti',
      routename: 'Kurti'
    },
    {
      id: 2,
      image: require('../Assets/Images/Saree.png'),
      name: 'Saree',
      routename: 'Saree'
    },
    {
      id: 3,
      image: require('../Assets/Images/Suit.png'),
      name: 'Suit',
    },
    {
      id: 4,
      image: require('../Assets/Images/Salwar.png'),
      name: 'Salwar',
    },
    {
      id: 5,
      image: require('../Assets/Images/Blouse.png'),
      name: 'Blouse',
    },
  ]

  const Card = {
    category :[
      {
        id: 1,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1590,
        amount2: 1500,
        routeName: 'ProductDetail',
      },
      {
        id: 2,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1690,
        amount2: 1550,
        routeName: 'ProductDetail',
      },
      {
        id: 3,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1790,
        amount2: 1700,
        routeName: 'ProductDetail',
      },
    ],
    category2:[
      {
        id: 1,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1590,
        amount2: 1500,
        routeName: 'ProductDetail',
      },
      {
        id: 2,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1690,
        amount2: 1550,
        routeName: 'ProductDetail',
      },
      {
        id: 3,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1790,
        amount2: 1700,
        routeName: 'ProductDetail',
      },
    ],
    category3:[
      {
        id: 1,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1590,
        amount2: 1500,
        routeName: 'ProductDetail',
      },
      {
        id: 2,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1690,
        amount2: 1550,
        routeName: 'ProductDetail',
      },
      {
        id: 3,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1790,
        amount2: 1700,
        routeName: 'ProductDetail',
      },
    ],
    category4:[
      {
        id: 1,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1590,
        amount2: 1500,
        routeName: 'ProductDetail',
      },
      {
        id: 2,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1690,
        amount2: 1550,
        routeName: 'ProductDetail',
      },
      {
        id: 3,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1790,
        amount2: 1700,
        routeName: 'ProductDetail',
      },
    ],
    category5:[
      {
        id: 1,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1590,
        amount2: 1500,
        routeName: 'ProductDetail',
      },
      {
        id: 2,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1690,
        amount2: 1550,
        routeName: 'ProductDetail',
      },
      {
        id: 3,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1790,
        amount2: 1700,
        routeName: 'ProductDetail',
      },
    ],
    category6:[
      {
        id: 1,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1590,
        amount2: 1500,
        routeName: 'ProductDetail',
      },
      {
        id: 2,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1690,
        amount2: 1550,
        routeName: 'ProductDetail',
      },
      {
        id: 3,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1790,
        amount2: 1700,
        routeName: 'ProductDetail',
      },
    ],
    category7:[
      {
        id: 1,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1590,
        amount2: 1500,
        routeName: 'ProductDetail',
      },
      {
        id: 2,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1690,
        amount2: 1550,
        routeName: 'ProductDetail',
      },
      {
        id: 3,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1790,
        amount2: 1700,
        routeName: 'ProductDetail',
      },
    ],
    category8:[
      {
        id: 1,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1590,
        amount2: 1500,
        routeName: 'ProductDetail',
      },
      {
        id: 2,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1690,
        amount2: 1550,
        routeName: 'ProductDetail',
      },
      {
        id: 3,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1790,
        amount2: 1700,
        routeName: 'ProductDetail',
      },
    ],
    category9:[
      {
        id: 1,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1590,
        amount2: 1500,
        routeName: 'ProductDetail',
      },
      {
        id: 2,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1690,
        amount2: 1550,
        routeName: 'ProductDetail',
      },
      {
        id: 3,
        image: require('../Assets/Images/photo.png'),
        productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
        productArrival: 'New Arrival',
        amount: 1790,
        amount2: 1700,
        routeName: 'ProductDetail',
      },
    ]
  }

  // const CardArray = [
  //   {
  //     id: 1,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1590,
  //     amount2: 1500,
  //     routeName: 'ProductDetail',
  //   },
  //   {
  //     id: 2,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1690,
  //     amount2: 1550,
  //     routeName: '',
  //   },
  //   {
  //     id: 3,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1790,
  //     amount2: 1700,
  //     routeName: '',
  //   },
  // ];

  // const CardArray2 = [
  //   {
  //     id: 1,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1590,
  //     amount2: 1500,
  //     routeName: '',
  //   },
  //   {
  //     id: 2,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1690,
  //     amount2: 1550,
  //     routeName: '',
  //   },
  //   {
  //     id: 3,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1790,
  //     amount2: 1700,
  //     routeName: '',
  //   },
  // ];

  // const CardArray3 = [
  //   {
  //     // id:1,
  //     // img: require('../Assets/Images/photo.png'),
  //     // product:'Hello',
  //     // productArrive:'New Arrival',
  //     // amt:1590,
  //     // discountamt:200,
  //     id: 1,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1590,
  //     amount2: 1500,
  //     routeName: '',
  //   },
  //   {
  //     id: 2,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1690,
  //     amount2: 1550,
  //     routeName: '',
  //   },
  //   {
  //     id: 3,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1790,
  //     amount2: 1700,
  //     routeName: '',
  //   },
  // ];
  // const CardArray4 = [
  //   {
  //     // id:1,
  //     // img: require('../Assets/Images/photo.png'),
  //     // product:'Hello',
  //     // productArrive:'New Arrival',
  //     // amt:1590,
  //     // discountamt:200,
  //     id: 1,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1590,
  //     amount2: 1500,
  //     routeName: '',
  //   },
  //   {
  //     id: 2,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1690,
  //     amount2: 1550,
  //   },
  //   {
  //     id: 3,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1790,
  //     amount2: 1700,
  //   },
  // ];

  // const CardArray5 = [
  //   {
  //     // id:1,
  //     // img: require('../Assets/Images/photo.png'),
  //     // product:'Hello',
  //     // productArrive:'New Arrival',
  //     // amt:1590,
  //     // discountamt:200,
  //     id: 1,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1590,
  //     amount2: 1500,
  //   },
  //   {
  //     id: 2,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1690,
  //     amount2: 1550,
  //   },
  //   {
  //     id: 3,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1790,
  //     amount2: 1700,
  //   },
  // ];

  // const CardArray6 = [
  //   {
  //     // id:1,
  //     // img: require('../Assets/Images/photo.png'),
  //     // product:'Hello',
  //     // productArrive:'New Arrival',
  //     // amt:1590,
  //     // discountamt:200,
  //     id: 1,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1590,
  //     amount2: 1500,
  //   },
  //   {
  //     id: 2,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1690,
  //     amount2: 1550,
  //   },
  //   {
  //     id: 3,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1790,
  //     amount2: 1700,
  //   },
  // ];

  // const CardArray7 = [
  //   {
  //     // id:1,
  //     // img: require('../Assets/Images/photo.png'),
  //     // product:'Hello',
  //     // productArrive:'New Arrival',
  //     // amt:1590,
  //     // discountamt:200,
  //     id: 1,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1590,
  //     amount2: 1500,
  //   },
  //   {
  //     id: 2,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1690,
  //     amount2: 1550,
  //   },
  //   {
  //     id: 3,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1790,
  //     amount2: 1700,
  //   },
  // ];

  // const CardArray8 = [
  //   {
  //     // id:1,
  //     // img: require('../Assets/Images/photo.png'),
  //     // product:'Hello',
  //     // productArrive:'New Arrival',
  //     // amt:1590,
  //     // discountamt:200,
  //     id: 1,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1590,
  //     amount2: 1500,
  //   },
  //   {
  //     id: 2,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1690,
  //     amount2: 1550,
  //   },
  //   {
  //     id: 3,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1790,
  //     amount2: 1700,
  //   },
  // ];
  // const CardArray9 = [
  //   {
  //     // id:1,
  //     // img: require('../Assets/Images/photo.png'),
  //     // product:'Hello',
  //     // productArrive:'New Arrival',
  //     // amt:1590,
  //     // discountamt:200,
  //     id: 1,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1590,
  //     amount2: 1500,
  //   },
  //   {
  //     id: 2,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1690,
  //     amount2: 1550,
  //   },
  //   {
  //     id: 3,
  //     image: require('../Assets/Images/photo.png'),
  //     productName: 'New Megha Printed Kurti with Duppta vfgfhg bvnbghf fgfhgfghf fghfghf',
  //     productArrival: 'New Arrival',
  //     amount: 1790,
  //     amount2: 1700,
  //   },
  // ]; 
  const [data, setData] = useState([]);
  const baseURL = 'https://project.sridixtechnology.com/ishitahouse/api/';
  const endPoint = 'home';

  const login = async () => { 
    await axios.post(baseURL + endPoint, {
      "device_id": "d00ff9a14123baae",
      "user_id": "6",
      "is_mobile": "0"
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Header-Key': 'ish-02-2022'
      }
    })
      .then((Response) => {
        console.log(Response.data);
        setData(Response.data.Data);

        // if (Response.data.Status == 200) {
        //   alert('Login Successfully')
        //   // navigation.navigate('DrawerNavigation')
        //   navigation.replace('DrawerNavigation')
        // }
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}>

        <ScrollImage scroll={scroll} />
        {/* <View
          style={{ justifyContent: 'center', alignItems: 'center' }}>
         
         
          <FlatList
            // keyExtractor={(key)=>key}
            horizontal
            showsHorizontalScrollIndicator={false}
            indicatorActiveWidth={70}
            // contentContainerStyle={{ paddingHorizontal: 180 }}  //horizontal  space set
            // pagingEnabled
            onScroll={e => {
              const x = e.nativeEvent.contentOffset.x;
              setCurrentIndex((x / width).toFixed(0));
            }}
            data={data}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    background: '#30BBFF30',
                    flexDirection: 'row', 
                    width: width, 
                    height: height / 5, 
                    justifyContent: 'flex-start', 
                    alignItems: 'center'
                  }}
                >

                  <Button>
                    <Image source={require('../Assets/Images/banner5.png')}
                      resizeMode={'contain'}
                      style={{
                        width: '100%',
                        height: undefined,
                        aspectRatio: 2.8
                      }}
                    />
                  </Button>
                  <Button>
                    <Image source={require('../Assets/Images/banner1.png')}
                      resizeMode={'contain'}
                      style={{
                        width: '100%',
                        height: undefined,
                        aspectRatio: 2.8
                      }}
                    />
                  </Button>
                  <Button>
                    <Image source={require('../Assets/Images/banner2.png')}
                      resizeMode={'contain'}
                      style={{
                        width: '100%',
                        height: undefined,
                        aspectRatio: 2.8
                      }}
                    />
                  </Button>
                  <Button>
                    <Image source={require('../Assets/Images/banner3.png')}
                      resizeMode={'contain'}
                      style={{
                        width: '100%',
                        height: undefined,
                        aspectRatio: 2.8
                      }}
                    />
                  </Button> 
             
                   <Image
                    source={require('../Assets/Images/banner5.png')}
                    style={{
                      width: '100%',
                      height: undefined,
                      aspectRatio: 2.8
                    }}
                    resizeMode={'contain'}
                  />
                  <Image
                    source={require('../Assets/Images/banner1.png')}
                    style={{
                      width: '100%',
                      height: undefined,
                      aspectRatio: 2.8
                    }}
                    resizeMode={'contain'}
                  />
                  <Image
                    source={require('../Assets/Images/banner2.png')}
                    style={{
                      width: '100%',
                      height: undefined,
                      aspectRatio: 2.8
                    }}
                    resizeMode={'contain'}
                  />
                   <Image
                    source={require('../Assets/Images/banner3.png')}
                    style={{
                      width: '100%',
                      height: undefined,
                      aspectRatio: 2.8
                    }}
                    resizeMode={'contain'}
                  />
                   <Image
                    source={require('../Assets/Images/banner4.png')}
                    style={{
                      width: '100%',
                      height: undefined,
                      aspectRatio: 2.8
                    }}
                    resizeMode={'contain'}
                  />
                </View>
              );
            }}
          />
        </View>
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
                    height: currentIndex == index ? 12 : 6,
                    borderRadius: 4,
                    backgroundColor: currentIndex == index ? 'skyblue' : 'gray',
                    marginLeft: 5,
                    // top: -60 
                  }}
                >
                </View>
              )
            })
          }
        </View>  */}

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={stories}
          renderItem={({ item }) => {
            const { navigation } = props
            const handlerClick = (item) => {
              navigation.navigate(item.routename, { ...item })
            }
            return (
              <View style={styles.imageRow}>
                {/* <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          > */}
                <TouchableOpacity onPress={() => handlerClick(item)}>
                  <Image
                    source={item.image}
                    style={styles.imageSize}
                    resizeMode={'contain'}
                  />
                  {/* <View style={styles.textStyle}> */}
                  <Text style={styles.textStyle3}
                    // adjustsFontSizeToFit
                    numberOfLines={1}
                  >{item.name}</Text>
                  {/* </View> */}
                </TouchableOpacity>
                {/* </ScrollView> */}
              </View>
            )
          }}
        />

        <View style={styles.textRow}>
          <Text style={styles.HeaderText1}>NEW ARRIVALS</Text>
          <TouchableOpacity>
            <Text style={styles.HeaderText2}>VIEW ALL</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {

            // CardArray.map((item, index) => {
            Card.category.map((item, index) => {

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
                <View style={styles.Cardcontainer}>
                  <TouchableOpacity
                    onPress={() => handlerClick(item)}
                  >
                    <TouchableOpacity
                      style={{
                        position: 'absolute',
                        marginTop: 5,
                        paddingRight: 5,
                        zIndex: 1,
                        justifyContent: 'center',
                        alignSelf: 'flex-end',
                      }}
                    >
                      <AntDesign

                        //color={focused ? 'skyblue' : 'black'}
                        name="hearto" size={20} color="skyblue" />
                    </TouchableOpacity>

                    <View>
                      <Image
                        source={item.image}
                        //https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80
                        style={{
                          height: undefined,
                          width: '100%',
                          aspectRatio: 1,
                          // borderRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,

                        }}
                        resizeMode={'contain'}
                      />
                    </View>
                    <View style={{ maxWidth: 140, }}>
                      <Text style={styles.TextStyle1}
                        // adjustsFontSizeToFit minimumFontScale={1}   comment this line 
                        numberOfLines={2}
                      >{item.productName}</Text>
                      <Text style={styles.TextStyle2}>{item.productArrival}</Text>
                      <View style={styles.searchIcon}>
                        <FontAwesome
                          name="rupee" size={14} color="red" />
                        <Text style={[styles.TextStyle4,]}>{item.amount}</Text>
                        <FontAwesome
                          name="rupee" size={12} color="grey" />
                        <Text style={[styles.TextStyle5, { color: 'grey', textDecorationLine: 'line-through', paddingLeft: 2, }]}>{item.amount2}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            })

          }
        </ScrollView>

        <Image
          source={require('../Assets/Images/banner1.png')}
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 2
          }}
          resizeMode={'contain'}
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
        </ScrollView>
        <View
          //style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 2, }}
          style={styles.textRow}
        >
          <Text style={styles.HeaderText1}>DEAL OF THE DAY</Text>
          <TouchableOpacity>
            <Text style={styles.HeaderText2}>VIEW ALL</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {
            // CardArray2.map((item, index) => {
            Card.category2.map((item, index) => {
              const { navigation } = props
              const handlerClick = (item) => {
                navigation.navigate(item.routeName, { ...item })
              }
              return (
                <View style={styles.Cardcontainer}>
                  <TouchableOpacity onPress={()=>handlerClick(item)}>
                    <TouchableOpacity
                      style={{
                        position: 'absolute',
                        marginTop: 5,
                        paddingRight: 5,
                        zIndex: 1,
                        justifyContent: 'center',
                        alignSelf: 'flex-end',
                      }}
                    >
                      <AntDesign
                        //color={focused ? 'skyblue' : 'black'}
                        name="hearto" size={20} color="skyblue" />
                    </TouchableOpacity>
                    <View>
                      <Image
                        source={item.image}
                        //https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80
                        style={{
                          height: undefined,
                          width: '100%',
                          aspectRatio: 1,
                          // borderRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        }}
                        resizeMode={'contain'}
                      />
                    </View>
                    <View style={{ maxWidth: 140, }}>
                      <Text style={styles.TextStyle1}
                        // adjustsFontSizeToFit minimumFontScale={1}   comment this line 
                        numberOfLines={2}
                      >{item.productName}</Text>
                      <Text style={styles.TextStyle2}>{item.productArrival}</Text>
                      <View style={styles.searchIcon}>
                        <FontAwesome
                          name="rupee" size={14} color="red" />
                        <Text style={[styles.TextStyle4,]}>{item.amount}</Text>
                        <FontAwesome
                          name="rupee" size={12} color="grey" />
                        <Text style={[styles.TextStyle5, { color: 'grey', textDecorationLine: 'line-through', paddingLeft: 2, }]}>{item.amount2}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </ScrollView>
        <Image
          source={require('../Assets/Images/banner3.png')}
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 2,
            marginTop: 5,
            marginBottom: 5,
          }}
          resizeMode={'contain'}
        />
        <View
          //</ScrollView>style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, }}
          style={styles.textRow}
        >
          <Text style={styles.HeaderText1}>TRENDING</Text>
          <TouchableOpacity>
            <Text style={styles.HeaderText2}>VIEW ALL</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {
            // CardArray3.map((item, index) => {
            Card.category3.map((item, index) => {
              const { navigation } = props
              const handlerClick = (item) => {
                navigation.navigate(item.routeName, { ...item })
              }
              return (
                <View style={styles.Cardcontainer}>
                  <TouchableOpacity onPress={()=>handlerClick(item)}>
                    <TouchableOpacity
                      style={{
                        position: 'absolute',
                        marginTop: 5,
                        paddingRight: 5,
                        zIndex: 1,
                        justifyContent: 'center',
                        alignSelf: 'flex-end',
                      }}
                    >
                      <AntDesign
                        //color={focused ? 'skyblue' : 'black'}
                        name="hearto" size={20} color="skyblue" />
                    </TouchableOpacity>
                    <View>
                      <Image
                        source={item.image}
                        //https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80
                        style={{
                          height: undefined,
                          width: '100%',
                          aspectRatio: 1,
                          // borderRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        }}
                        resizeMode={'contain'}
                      />
                    </View>
                    <View style={{ maxWidth: 140, }}>
                      <Text style={styles.TextStyle1}
                        // adjustsFontSizeToFit minimumFontScale={1}   comment this line 
                        numberOfLines={2}
                      >{item.productName}</Text>
                      <Text style={styles.TextStyle2}>{item.productArrival}</Text>
                      <View style={styles.searchIcon}>
                        <FontAwesome
                          name="rupee" size={14} color="red" />
                        <Text style={[styles.TextStyle4,]}>{item.amount}</Text>
                        <FontAwesome
                          name="rupee" size={12} color="grey" />
                        <Text style={[styles.TextStyle5, { color: 'grey', textDecorationLine: 'line-through', paddingLeft: 2, }]}>{item.amount2}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </ScrollView>

        <View
          //style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, }}
          style={styles.textRow}
        >
          <Text style={styles.HeaderText1}>BUY 2 GET 1 FREE</Text>
          <TouchableOpacity>
            <Text style={styles.HeaderText2}>VIEW ALL</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {
            // CardArray4.map((item, index) => {
            Card.category4.map((item, index) => {
              const { navigation } = props
              const handlerClick = (item) => {
                navigation.navigate(item.routeName, { ...item })
              }
              return (
                <View style={styles.Cardcontainer}>
                  <TouchableOpacity onPress={()=>handlerClick(item)}>
                    <TouchableOpacity
                      style={{
                        position: 'absolute',
                        marginTop: 5,
                        paddingRight: 5,
                        zIndex: 1,
                        justifyContent: 'center',
                        alignSelf: 'flex-end',
                      }}
                    >
                      <AntDesign
                        //color={focused ? 'skyblue' : 'black'}
                        name="hearto" size={20} color="skyblue" />
                    </TouchableOpacity>

                    <View>
                      <Image
                        source={item.image}
                        //https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80
                        style={{
                          height: undefined,
                          width: '100%',
                          aspectRatio: 1,
                          // borderRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        }}
                        resizeMode={'contain'}
                      />
                    </View>
                    <View style={{ maxWidth: 140, }}>
                      <Text style={styles.TextStyle1}
                        // adjustsFontSizeToFit minimumFontScale={1}   comment this line 
                        numberOfLines={2}
                      >{item.productName}</Text>
                      <Text style={styles.TextStyle2}>{item.productArrival}</Text>
                      <View style={styles.searchIcon}>
                        <FontAwesome
                          name="rupee" size={14} color="red" />
                        <Text style={[styles.TextStyle4,]}>{item.amount}</Text>
                        <FontAwesome
                          name="rupee" size={12} color="grey" />
                        <Text style={[styles.TextStyle5, { color: 'grey', textDecorationLine: 'line-through', paddingLeft: 2, }]}>{item.amount2}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </ScrollView>
        <Image
          source={require('../Assets/Images/banner2.png')}
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 2
          }}
          resizeMode={'contain'}
        />
        <View
          // style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, }}
          style={styles.textRow}
        >
          <Text style={styles.HeaderText1}>FOR YOUR CHOICE</Text>
          <TouchableOpacity>
            <Text style={styles.HeaderText2}>VIEW ALL</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {
            // CardArray5.map((item, index) => {
            Card.category5.map((item, index) => {
              const { navigation } = props
              const handlerClick = (item) => {
                navigation.navigate(item.routeName, { ...item })
              }
              return (
                <View style={styles.Cardcontainer}>
                  <TouchableOpacity onPress={()=>handlerClick(item)}>
                    <TouchableOpacity
                      style={{
                        position: 'absolute',
                        marginTop: 5,
                        paddingRight: 5,
                        zIndex: 1,
                        justifyContent: 'center',
                        alignSelf: 'flex-end',
                      }}
                    >
                      <AntDesign
                        //color={focused ? 'skyblue' : 'black'}
                        name="hearto" size={20} color="skyblue" />
                    </TouchableOpacity>

                    <View>
                      <Image
                        source={item.image}
                        //https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80
                        style={{
                          height: undefined,
                          width: '100%',
                          aspectRatio: 1,
                          // borderRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        }}
                        resizeMode={'contain'}
                      />
                    </View>
                    <View style={{ maxWidth: 140, }}>
                      <Text style={styles.TextStyle1}
                        // adjustsFontSizeToFit minimumFontScale={1}   comment this line 
                        numberOfLines={2}
                      >{item.productName}</Text>
                      <Text style={styles.TextStyle2}>{item.productArrival}</Text>
                      <View style={styles.searchIcon}>
                        <FontAwesome
                          name="rupee" size={14} color="red" />
                        <Text style={[styles.TextStyle4,]}>{item.amount}</Text>
                        <FontAwesome
                          name="rupee" size={12} color="grey" />
                        <Text style={[styles.TextStyle5, { color: 'grey', textDecorationLine: 'line-through', paddingLeft: 2, }]}>{item.amount2}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </ScrollView>

        <FlatlistImage image={image} />
        {/* <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../Assets/Images/s1.png')}
            style={{ height: 40, width: '47%', margin: 5, aspectRatio: 1 }}
            resizeMode={'contain'}
          />
          <Image
            source={require('../Assets/Images/s2.png')}
            style={{ height: 40, width: '47%', margin: 5, aspectRatio: 1 }}
            resizeMode={'contain'}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../Assets/Images/s3.png')}
            style={{ height: 40, width: '47%', margin: 5, aspectRatio: 1 }}
            resizeMode={'contain'}
          />

          <Image
            source={require('../Assets/Images/s4.png')}
            style={{ height: 40, width: '47%', margin: 5, aspectRatio: 1 }}
            resizeMode={'contain'}
          />
        </View> */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, }}>
          <Text style={styles.HeaderText1}>Valentine Special</Text>
          <TouchableOpacity>
            <Text style={styles.HeaderText2}>VIEW ALL</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {
            // CardArray6.map((item, index) => {
            Card.category6.map((item, index) => {
              const { navigation } = props
              const handlerClick = (item) => {
                navigation.navigate(item.routeName, { ...item })
              }
              return (
                <View style={styles.Cardcontainer}>
                  <TouchableOpacity onPress={()=>handlerClick(item)}>
                    <TouchableOpacity
                      style={{
                        position: 'absolute',
                        marginTop: 5,
                        paddingRight: 5,
                        zIndex: 1,
                        justifyContent: 'center',
                        alignSelf: 'flex-end',
                      }}
                    >
                      <AntDesign
                        //color={focused ? 'skyblue' : 'black'}
                        name="hearto" size={20} color="skyblue" />
                    </TouchableOpacity>
                    <View>
                      <Image
                        source={item.image}
                        //https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80
                        style={{
                          height: undefined,
                          width: '100%',
                          aspectRatio: 1,
                          // borderRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        }}
                        resizeMode={'contain'}
                      />
                    </View>
                    <View style={{ maxWidth: 140, }}>
                      <Text style={styles.TextStyle1}
                        // adjustsFontSizeToFit minimumFontScale={1}   comment this line 
                        numberOfLines={2}
                      >{item.productName}</Text>
                      <Text style={styles.TextStyle2}>{item.productArrival}</Text>
                      <View style={styles.searchIcon}>
                        <FontAwesome
                          name="rupee" size={14} color="red" />
                        <Text style={[styles.TextStyle4,]}>{item.amount}</Text>
                        <FontAwesome
                          name="rupee" size={12} color="grey" />
                        <Text style={[styles.TextStyle5, { color: 'grey', textDecorationLine: 'line-through', paddingLeft: 2, }]}>{item.amount2}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </ScrollView>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, }}>
          <Text style={styles.HeaderText1}>Pocket Friendly</Text>
          <TouchableOpacity>
            <Text style={styles.HeaderText2}>VIEW ALL</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {
            // CardArray7.map((item, index) => {
            Card.category7.map((item, index) => {
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
                <View style={styles.Cardcontainer}>
                  <TouchableOpacity onPress={()=>handlerClick(item)}>
                    <TouchableOpacity
                      style={{
                        position: 'absolute',
                        marginTop: 5,
                        paddingRight: 5,
                        zIndex: 1,
                        justifyContent: 'center',
                        alignSelf: 'flex-end',
                      }}
                    >
                      <AntDesign
                        //color={focused ? 'skyblue' : 'black'}
                        name="hearto" size={20} color="skyblue" />
                    </TouchableOpacity>
                    <View>
                      <Image
                        source={item.image}
                        //https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80
                        style={{
                          height: undefined,
                          width: '100%',
                          aspectRatio: 1,
                          // borderRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        }}
                        resizeMode={'contain'}
                      />
                    </View>
                    <View style={{ maxWidth: 140, }}>
                      <Text style={styles.TextStyle1}
                        // adjustsFontSizeToFit minimumFontScale={1}   comment this line 
                        numberOfLines={2}
                      >{item.productName}</Text>
                      <Text style={styles.TextStyle2}>{item.productArrival}</Text>
                      <View style={styles.searchIcon}>
                        <FontAwesome
                          name="rupee" size={14} color="red" />
                        <Text style={[styles.TextStyle4,]}>{item.amount}</Text>
                        <FontAwesome
                          name="rupee" size={12} color="grey" />
                        <Text style={[styles.TextStyle5, { color: 'grey', textDecorationLine: 'line-through', paddingLeft: 2, }]}>{item.amount2}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </ScrollView>
        <Image
          source={require('../Assets/Images/banner4.png')}
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 3
          }}
          resizeMode={'contain'}
        />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, }}>
          <Text style={styles.HeaderText1}>Up to 60% off</Text>
          <TouchableOpacity>
            <Text style={styles.HeaderText2}>VIEW ALL</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {
            // CardArray8.map((item, index) => {
            Card.category8.map((item, index) => {
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
                <View style={styles.Cardcontainer}>
                  <TouchableOpacity onPress={()=> handlerClick(item)}>
                    <TouchableOpacity
                      style={{
                        position: 'absolute',
                        marginTop: 5,
                        paddingRight: 5,
                        zIndex: 1,
                        justifyContent: 'center',
                        alignSelf: 'flex-end',
                      }}
                    >
                      <AntDesign
                        //color={focused ? 'skyblue' : 'black'}
                        name="hearto" size={20} color="skyblue" />
                    </TouchableOpacity>
                    <View>
                      <Image
                        source={item.image}
                        //https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80
                        style={{
                          height: undefined,
                          width: '100%',
                          aspectRatio: 1,
                          // borderRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        }}
                        resizeMode={'contain'}
                      />
                    </View>
                    <View style={{ maxWidth: 140, }}>
                      <Text style={styles.TextStyle1}
                        // adjustsFontSizeToFit minimumFontScale={1}   comment this line 
                        numberOfLines={2}
                      >{item.productName}</Text>
                      <Text style={styles.TextStyle2}>{item.productArrival}</Text>
                      <View style={styles.searchIcon}>
                        <FontAwesome
                          name="rupee" size={14} color="red" />
                        <Text style={[styles.TextStyle4,]}>{item.amount}</Text>
                        <FontAwesome
                          name="rupee" size={12} color="grey" />
                        <Text style={[styles.TextStyle5, { color: 'grey', textDecorationLine: 'line-through', paddingLeft: 2, }]}>{item.amount2}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, }}>
          <Text style={styles.HeaderText1}>ISHITA LUXE</Text>
          <TouchableOpacity>
            <Text style={styles.HeaderText2}>VIEW  ALL</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {
            // CardArray9.map((item, index) => {
            Card.category9.map((item, index) => {
              const { navigation } = props
              const handlerClick = (item) => {
                navigation.navigate(item.routeName, { ...item })
              }
              return (
                <View style={styles.Cardcontainer}>
                  <TouchableOpacity
                    onPress={() => handlerClick(item)}>
                    <TouchableOpacity
                      style={{
                        position: 'absolute',
                        marginTop: 5,
                        paddingRight: 5,
                        zIndex: 1,
                        justifyContent: 'center',
                        alignSelf: 'flex-end',
                      }}
                    >
                      <AntDesign
                        //color={focused ? 'skyblue' : 'black'}
                        name="hearto" size={20} color="skyblue" />
                    </TouchableOpacity>
                    <View>
                      <Image
                        source={item.image}
                        //https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80
                        style={{
                          height: undefined,
                          width: '100%',
                          aspectRatio: 1,
                          // borderRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        }}
                        resizeMode={'contain'}
                      />
                    </View>
                    <View style={{ maxWidth: 140, }}>
                      <Text style={styles.TextStyle1}
                        // adjustsFontSizeToFit minimumFontScale={1}   comment this line 
                        numberOfLines={2}
                      >{item.productName}</Text>
                      <Text style={styles.TextStyle2}>{item.productArrival}</Text>
                      <View style={styles.searchIcon}>
                        <FontAwesome
                          name="rupee" size={14} color="red" />
                        <Text style={[styles.TextStyle4,]}>{item.amount}</Text>
                        <FontAwesome
                          name="rupee" size={12} color="grey" />
                        <Text style={[styles.TextStyle5, { color: 'grey', textDecorationLine: 'line-through', paddingLeft: 2, }]}>{item.amount2}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </ScrollView>
        <FlatlistImage image={image2} />
        {/*         
        <View style={{ height: 250, marginTop: 10, marginBottom: 10 }}>
          <ScrollView
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}>
            <Category imageUri={require('../Assets/Images/photo.png')}
              name="New Megha Printed Kurti with Duppta" />
            <Category imageUri={require('../Assets/Images/s1.png')}
              name="Jaipuri Trending Kurti with Duppta" />
            <Category imageUri={require('../Assets/Images/photo.png')}
              name="New Megha Printed Kurti with Duppta" />
            <Category imageUri={require('../Assets/Images/photo.png')}
              name="New Megha Printed Kurti with Duppta" />

          </ScrollView>
        </View> */}
        {/* <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../Assets/Images/s5.png')}
            style={{ height: 40, width: '47%', margin: 5, aspectRatio: 1 }}
            resizeMode={'contain'}
          />
          <Image
            source={require('../Assets/Images/s6.png')}
            style={{ height: 40, width: '47%', margin: 5, aspectRatio: 1 }}
            resizeMode={'contain'}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../Assets/Images/s7.png')}
            style={{ height: 40, width: '47%', margin: 5, aspectRatio: 1 }}
            resizeMode={'contain'}
          />
          <Image
            source={require('../Assets/Images/s8.png')}
            style={{ height: 40, width: '47%', margin: 5, aspectRatio: 1 }}
            resizeMode={'contain'}
          />
        </View> */}
        {/* <View
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <FlatList
          keyExtractor={(key)=>key}
            horizontal
            showsHorizontalScrollIndicator={false}
            // pagingEnabled
            onScroll={e => {
              const x = e.nativeEvent.contentOffset.x;
              setCurrentIndex((x / width).toFixed(0));
            }}
            data={data}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{ width: width / 2.5, height: height / 2, justifyContent: 'center', alignItems: 'center' }}
                >
                  <TouchableOpacity disabled={true}
                    style={{
                      width: '90%',
                      height: '60%',
                      backgroundColor: 'white',
                      borderRadius: 10,
                      borderWidth: 0.6,
                      borderColor: 'white',
                      top: -20,
                      elevation: 8
                    }}
                  >
                    <Image
                      source={require('../Assets/Images/photo.png')}
                      style={{ height: 135, width: 128, borderTopLeftRadius:10,borderTopRightRadius:10}}
                      resizeMode={'contain'}
                    />
                    <Text>New Megha Printed Kurti with Duppta</Text>
                    <Text>New Arrival</Text>
                    <View style={styles.searchIcon}>
                      <FontAwesome
                        name="rupee" size={20} color="#000" />
                      <Text style={{ fontSize: 20,marginLeft:-25, }}>1590.00</Text>
                      <TouchableOpacity>
                        <AntDesign
                          name="hearto" size={20} color="#000" />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View> */}
        {/* <View
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
                  style={{ width: currentIndex == index ?15:8, 
                    height: currentIndex == index ?15:8, 
                    borderRadius: 4, 
                    backgroundColor: currentIndex == index ? 'green' : 'gray', 
                    marginLeft: 5, 
                    top: -60 }}
                >
                </View>
              )
            })
          }
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: Constant.color.WHITE,
    fontFamily: Constant.fonts.raju,
    // padding: 5
    paddingLeft: 4,
    paddingRight: 4,
  },
  Cardcontainer: {
    flex: 1,
    width: width * 0.40,
    backgroundColor: Constant.color.WHITE,
    elevation: 2,
    marginLeft: 3,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#dddddd',
    marginHorizontal: 6,
    marginTop: 5,
    marginBottom: 12
  },
  textRow: {
    backgroundColor: Constant.color.WHITE,
    marginTop: 5,
    // marginBottom:5,
    flexDirection: 'row',
    // marginLeft:4,
    // marginRight:4,
    marginHorizontal: 5,
    justifyContent: 'space-between',
  },
  btnImage: {
    height: 140,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  HeaderText1: {
    color: Constant.color.SKYBLUE,
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.3,
    alignSelf: 'center'
  },
  HeaderText2: {
    color: Constant.color.SKYBLUE,
    fontWeight: 'bold',
    fontSize: 11,
    textDecorationLine: 'underline',
    // lineHeight:35,
    // alignSelf:'flex-end',
    marginTop: 5,
  },
  searchIcon: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 5,
    paddingRight: 0,
    paddingLeft: 5,
    width: 145,
  },
  TextStyle4: {
    // fontSize: 15,
    fontSize: Constant.spacing[4],
    color: 'red',
    paddingLeft: 4,
    paddingRight: 6,
  },
  TextStyle5: {
    // fontSize: 15,
    fontSize: Constant.spacing[2],
    color: 'red',
    paddingLeft: 4,
    paddingRight: 6,
  },
  searchIcon2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  TextStyle1: {
    flex: 1,
    width: 125,
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    flexWrap: 'wrap',
    marginLeft: 4,
    // color: '#212121',
    color: Constant.color.GREY,
  },
  TextStyle2: {
    fontSize: 10,
    flexWrap: 'wrap',
    fontFamily: 'Poppins-Medium',
    flex: 1,
    width: 125,
    marginLeft: 4,
    marginBottom: 12,
    // color: '#B6B6B6',
    color: Constant.color.GREYLIGHT,
  },
  imageRow: {
    backgroundColor: Constant.color.WHITE,
    flexDirection: 'row',
    marginHorizontal: 4,
    marginTop: 5,
    marginBottom: 5,
  },
  textStyle3: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    flexWrap: 'wrap',
    color: '#212121',
    alignSelf: 'center',
    maxWidth: 60,
    // width: 50,
    marginBottom: 5,
  },
  imageSize: {
    height: 60,
    width: 70,
    justifyContent: 'space-between',
    // alignSelf:'center',
    alignItems: 'center',
  }
});