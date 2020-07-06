import * as React from 'react';
import { Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppNavigator from './AppNavigator'

const Stack = createStackNavigator();

function KalotrackStack() {
  return (
    <Stack.Navigator>
	  <Stack.Screen options={{header: HeaderImage}} 
	  				name="Home" component={AppNavigator} />
    </Stack.Navigator>
  );
}

const HeaderImage = () => (
	<View style={{	width: '100%', backgroundColor: 'white', 
					justifyContent: 'center', alignItems: 'center', paddingVertical: '1%'}}>
		<Image source={require('../../assets/icon.png')} style={{height: 60, width: 60}} />
	</View>
)

export default function KalotrackNavigator() {
  return (
    <NavigationContainer>
      <KalotrackStack />
    </NavigationContainer>
  );
}
