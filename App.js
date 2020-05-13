import 'react-native-gesture-handler';
import React from 'react';

import Home from './comonents/Home';
import Counter from './comonents/Counter';
import Profile from './comonents/Profile';
import ListScreen from './comonents/ListScreen';
import ImageScreen from './comonents/ImageScreen';
import ColorScreen from './comonents/ColorScreen';
import InputScreen from './comonents/InputScreen';
import BoxScreen from './comonents/BoxScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// ctrl shift i for formatting code

const Stack = createStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home No @" component={Home} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ListScreen" component={ListScreen}/>
        <Stack.Screen name="ImageScreen" component={ImageScreen}/>
        <Stack.Screen name="ColorScreen" component={ColorScreen}/>
        <Stack.Screen name="InputScreen" component={InputScreen}/>
        <Stack.Screen name="BoxScreen" component={BoxScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}