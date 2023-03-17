import { View, Text } from 'react-native'
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigation from './BottomNavigation';

import SettingScreen from '../Screens/SettingScreen';
import Onboarding from '../Screens/Onboarding';

import HomePage from '../Screens/HomePage';
import ProductDetail from '../Screens/ProductDetail';
import ProductReview from '../Screens/ProductReview';
const Drawer = createDrawerNavigator();
const DrawerNavigation = ({ navigation }) => {
    return (
        <Drawer.Navigator
            screenOptions={{
                // tabBarHideOnKeyboard: true,
                // header:()=>  <HederScreen
                // navigation={navigation}
                // pagenav={'MyProfile'}
                // pagenav1={'MyCart'}
                // pagenav2={''}
                // />,
                headerShown:false,
                  headerStyle:{
                      elevation: 2
                  },
                  drawerStyle: {
                    backgroundColor: 'white',
                    // width: 240,
                  },
                //   tabBarActiveTintColor:"blue",
                //   tabBarInactiveTintColor:"red",
                  tabBarStyle:{
                      borderTopLeftRadius:15,
                      borderTopRightRadius:15,
                      // ...styles.shadow
                  }
              }}>
            <Drawer.Screen name="Main" component={BottomNavigation} />
            <Drawer.Screen name="HomePage" component={HomePage}  options={{headerShown: true}}/>
            <Drawer.Screen name="ProductDetail" component={ProductDetail}  options={{headerShown: false}}/>
            <Drawer.Screen name="ProductReview" component={ProductReview}  options={{headerShown: false}}/>
            <Drawer.Screen name='setting' component={SettingScreen} />
            <Drawer.Screen name='Onboarding' component={Onboarding} />
            {/* <Drawer.Screen name='SettingScreen' component={SettingScreen} /> */}
            {/* <Drawer.Screen name='MyProfile' component={MyProfile}  options={{ drawerLabel: 'Profile',headerShown: true }}/> */}
        </Drawer.Navigator>
    )
}
export default DrawerNavigation