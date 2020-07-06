import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { List, FAB } from 'react-native-paper';

const EatenItemsScreen = () => (
	<View style={{width: '100%', backgroundColor: 'white'}}>
		<ScrollView style={{width: '100%'}}>
			<DateHeader />		
			<EatenItem />
			<EatenItem />
			<EatenItem />
			<DateHeader />		
			<EatenItem />
			<EatenItem />
			<EatenItem />
			<DateHeader />		
			<EatenItem />
			<EatenItem />
			<EatenItem />
		</ScrollView>

		<FAB
			style={{position: 'absolute', margin: 16, right: 0, bottom: 16, backgroundColor: 'white'}}
			icon="plus"
			color='#ffaf29'
			onPress={() => console.log('Pressed')}
		/>
	</View>
);

const EatenItem = () => (
	<List.Item
		title="Breakfast"
		description="Peaches, Guava, Chutney..."
		left={props => <List.Icon {...props} color='#ffaf29' icon="food-fork-drink" />}
		right={props => <View style={{justifyContent: 'center'}}>
							<Text style={{fontSize: 16, paddingRight: '2%'}}>11:39 AM</Text>
						</View>}
	/>
)

const DateHeader = () => (
	<List.Subheader style={{fontSize: 17, backgroundColor: '#ffaf29', color: 'white'}}>
		Today
	</List.Subheader>
)

export default EatenItemsScreen;