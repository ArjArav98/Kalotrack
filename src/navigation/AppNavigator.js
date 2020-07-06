import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import EatenItemsScreen from '../screens/EatenItemsScreen';
import ItemCaloriesListScreen from '../screens/ItemCaloriesListScreen';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
	  activeColor="#ffaf29"
	  inactiveColor="#cccccc"
	  labelStyle={{ fontSize: 12 }}
	  barStyle={{backgroundColor: 'white'}}
    >
      <Tab.Screen
        name="Feed"
        component={EatenItemsScreen}
        options={{
          tabBarLabel: 'Tracker',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="radar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={ItemCaloriesListScreen}
        options={{
          tabBarLabel: 'Calories Table',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="table" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}