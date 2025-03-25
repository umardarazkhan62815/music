import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import AllGeneres from '../Screens/Home/AllGeneres';
import SearchScreen from '../Screens/Search/Search';

const Stack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Homescreen"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AllGeneres"
        component={AllGeneres}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;
