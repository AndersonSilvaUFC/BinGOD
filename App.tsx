
import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/screens/Home';
import { Bingo } from './src/screens/Bingo';

const Stack = createStackNavigator();

export default function App() {
  return(
    <>
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={
          {headerShown: false}    
        }

      >

        <Stack.Screen name="Home" component={Home} 
      />
        <Stack.Screen name="Bingo" component={Bingo} options={
          {
            headerLeft: ()=> null
          }
        }/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}


