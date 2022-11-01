import React, { useEffect, useState } from 'react';

//custom Fonts
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';


import Welcome from './screens/Welcome';

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./managerasset/assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./managerasset/assets/fonts/Lato-Regular.ttf"),
  });
  
  useEffect(() =>{
    async function prepare(){
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if(!fontsLoaded){
    return undefined;
  } else{
    SplashScreen.hideAsync();
  }
  return (
   <Welcome />
  );
}

