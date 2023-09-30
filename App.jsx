import { StatusBar } from 'expo-status-bar';
import { NavigationContainer} from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as SplashScreen from "expo-splash-screen";
import {useCallback} from 'react';
import BottomTabNavigation  from './navigation/BottomTabNavigation';
import { Cart , ProductDetails} from './screens';


const Stack = createNativeStackNavigator();

export default function App() {
 
  const [fontsLoaded]=useFonts({ 
    regular : require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    ExtraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    SemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  })

  const onLayoutRootView = useCallback(async() => {

    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded]);

  if(!fontsLoaded){
    return null;
  }

  return (
    <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen 
     name="Bottom Navigation"
     component={BottomTabNavigation}
     options={{headerShown:false}}
     />
      <Stack.Screen 
     name="Cart"
     component={Cart}
     options={{headerShown:false}}
     />

    <Stack.Screen 
     name="ProductDetails"
     component={ProductDetails}
     options={{headerShown:false}}
     />
    </Stack.Navigator> 
  </NavigationContainer>
);
  }