import { StatusBar } from 'react-native'
import React, {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../Screens/SplashScreen';
import Onboarding from '../Screens/Onboarding';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import MobileNumber from '../Screens/MobileNumber';
import Forgetpassword from '../Screens/Forgetpassword';
import Otp from '../Screens/Otp';
// import BottomNavigation from './BottomNavigation';
import ScrollImage from '../Screens/Component/ScrollImage';
import MyProfile from '../Screens/MyProfile';
import Address from '../Screens/Address';
import AddNewAddress from '../Screens/AddNewAddress';
import Order from '../Screens/Order';
import Wallet from '../Screens/Wallet';
import ReferEarn from '../Screens/ReferEarn';
import Support from '../Screens/Support';
import TermCondition from '../Screens/TermCondition';
import Kurti from '../Screens/Kurti';
import MyCart from '../Screens/MyCart';
import ProductDetail from '../Screens/ProductDetail';
import HederScreen from '../Screens/Component/HederScreen';
import ProductReview from '../Screens/ProductReview';
import FilterBy from '../Screens/FilterBy';
import DrawerNavigation from './DrawerNavigation';
// import DemoScreen from '../Screens/DemoScreen';
import Saree from '../Screens/Saree';



const Stack = createNativeStackNavigator();

const RootNavigation = ({navigation}) => {

    const [showSplashScreen, setShowSplashScreen]= useState(true);
    

    useEffect(() => {
      setTimeout(() => {
        setShowSplashScreen(false)
        //   StatusBar.setHidden(true)
      }, 3000);
    }, [])
    
    return (
        <NavigationContainer>
             
            <Stack.Navigator>
                {showSplashScreen ? <Stack.Screen name="SplashScreen" component={SplashScreen}
                options={{
                    headerShown: false,                 
                }}/>
            : null
            }
             {/* <Stack.Screen name='DrawerNavigation' component={DrawerNavigation} options={{headerShown: false}}/> */}
             {/* <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{headerShown: false}}/> */}
             <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}}/>
             <Stack.Screen name='DrawerNavigation' component={DrawerNavigation} options={{headerShown: false}}/> 
             <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
             <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
             <Stack.Screen name="MobileNumber" component={MobileNumber} options={{headerShown: false}}/>
             <Stack.Screen name="Forgetpassword" component={Forgetpassword} options={{headerShown: false}}/>
             <Stack.Screen name="Otp" component={Otp} options={{headerShown: false}}/>
             {/* <Stack.Screen name="HomePage" component={HomePage} options={{headerShown: false}}/> */}
             {/* <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{headerShown: false}}/> */}
             <Stack.Screen name="ScrollImage" component={ScrollImage} options={{headerShown: false}}/>
             <Stack.Screen name="MyProfile" component={MyProfile}/>
             <Stack.Screen name="Address" component={Address}/>
             <Stack.Screen name="AddNewAddress" component={AddNewAddress}/>
             <Stack.Screen name="Order" component={Order}/>
             <Stack.Screen name="Wallet" component={Wallet}/>
             <Stack.Screen name="ReferEarn" component={ReferEarn}/>
             <Stack.Screen name="Support" component={Support}/>
             <Stack.Screen name="TermCondition" component={TermCondition}/>
             <Stack.Screen name="Kurti" component={Kurti}/>
             <Stack.Screen name="Saree" component={Saree}/>
             <Stack.Screen name="MyCart" component={MyCart} />
             <Stack.Screen name="ProductDetail" component={ProductDetail} options={{headerShown: false}}/>
             <Stack.Screen name="ProductReview" component={ProductReview} options={{headerShown: false}}/>
             <Stack.Screen name="HederScreen" component={HederScreen}/>
             <Stack.Screen name="FilterBy" component={FilterBy}options={{headerShown: false}}/>
             {/* <Stack.Screen name="DemoScreen" component={DemoScreen}options={{headerShown: false}}/> */}
            </Stack.Navigator>

        </NavigationContainer>
    );
};

export default RootNavigation;