import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../Screens/HomePage';
import ShopScreen from '../Screens/ShopScreen';
import SearchScreen from '../Screens/SearchScreen';
import WishlistScreen from '../Screens/WishlistScreen';
import SettingScreen from '../Screens/SettingScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HederScreen from '../Screens/Component/HederScreen';
// import DrawerNavigation from './DrawerNavigation';

// import Feather from 'react-native-vector-icons/Feather';
const Tab=createBottomTabNavigator();

const BottomNavigation = ({navigation}) => {

    return (
      
        <Tab.Navigator

        screenOptions={{
          tabBarHideOnKeyboard: true,
          header:()=>  <HederScreen
          navigation={navigation}
          pagenav={'MyProfile'}
          pagenav1={'MyCart'}
          // pagenav2={'DrawableScreen'}
          />,
            headerStyle:{
                elevation: 2
            },
            // tabBarActiveTintColor:"blue",
            // tabBarInactiveTintColor:"red",
            tabBarStyle:{
                borderTopLeftRadius:15,
                borderTopRightRadius:15,
                // ...styles.shadow
            }
            
        }}
        >
            <Tab.Screen name="Home" component={HomePage}
               options={{
                // headerShown: false,   
                tabBarIcon: ({focused}) =>(
                  <View>
                    <Ionicons color={focused ? 'skyblue' : 'black'} name={focused ? 'home' : 'home-outline'} size={25}  />
                  </View>
                ),
               }}
            />
            <Tab.Screen name="Shop" component={ShopScreen}
            options={{
              // headerShown: false,  
                tabBarIcon: ({focused}) =>(
                  <View>
                    <Ionicons color={focused ? 'skyblue' : 'black'} name={focused ? 'cart' : 'cart-outline'} size={25}  />
                  </View>
                ),
               }}
            />
            <Tab.Screen name="Search" component={SearchScreen}
            options={{
              // headerShown: false,  
                tabBarIcon: ({focused}) =>(
                  <View>
                    <Ionicons color={focused ? 'skyblue' : 'black'} name={focused ? 'md-search-circle' : 'md-search-circle-outline'} size={30}  />
                  </View>
                ),
               }}
            />
            <Tab.Screen name="Wishlist" component={WishlistScreen}
            options={{
              // headerShown: false,  
                tabBarIcon: ({focused}) =>(
                  <View>
                    <AntDesign color={focused ? 'skyblue' : 'black'} name={focused ? 'heart' : 'hearto'} size={22}  />
                  </View>
                ),
               }}
            />
            <Tab.Screen name="Setting" component={SettingScreen} 
            options={{
              headerShown: false,  
              tabBarIcon: ({focused}) =>(
                  <View>
                    <Ionicons color={focused ? 'skyblue' : 'black'} name={focused ? 'settings' : 'settings-outline'} size={25}  />
                  </View>
                ),  
               }}
              
            />
        </Tab.Navigator>
    )
}

export default BottomNavigation;

const styles = StyleSheet.create({
    shadow:{
        shadowColor:'#7F5DF8',
        shadowOffset:{
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius:3.5,
        elevation: 5
    },
})