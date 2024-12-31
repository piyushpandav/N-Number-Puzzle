import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import index from './Home';
import Start from '@/components/Start';
import Home from './Home';
import Level from '@/components/Level';
import Hard from '@/components/Hard';

const Stack = createNativeStackNavigator();

export default function _layout() {
  return (
    // <NavigationContainer NavigationIndependentTree={true}> 
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='Start' component={Start} options={{headerShown:false}}/>
        <Stack.Screen name='Level' component={Level} options={{headerShown:false}}/>
        <Stack.Screen name='Hard' component={Hard} options={{headerShown:false}}/>
      </Stack.Navigator>
    // </NavigationContainer>
  )
}