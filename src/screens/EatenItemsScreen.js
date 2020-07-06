import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { List, FAB } from 'react-native-paper';

const EatenItemsScreen = () => (
	<View style={{width: '100%', backgroundColor: 'white'}}>
		<ScrollView style={{width: '100%'}}>
			<DateHeader date='Today' />		
			<EatenItem title='Breakfast' time='8:20 AM' />
			<EatenItem title='Lunch' time='1:45 PM' />
			<EatenItem title='Dinner' time='9:00 PM' />
			<DateHeader date='Yesterday'/>		
			<EatenItem title='Brunch' time='11:30 AM' />
			<EatenItem title='Lunch' time='2:30 PM' />
			<EatenItem title='Tiffin' time='5:30 PM' />
			<EatenItem title='Midnight Snackzz' time='11:20 AM' />
			<DateHeader date='4 July, 2020' />		
			<EatenItem title='Breakfast' time='9:00 AM' />
			<EatenItem title='Snacks' time='4:00 PM' />
			<EatenItem title='Dinner' time='7:00 PM' />
		</ScrollView>

		<FAB
			style={{position: 'absolute', margin: 16, right: 0, bottom: 16, backgroundColor: '#ffaf29'}}
			icon="plus"
			color='white'
			onPress={() => console.log('Pressed')}
		/>
	</View>
);

const EatenItem = (props) => (
	<List.Item
		title={props.title}
		description="Peaches, Guava, Chutney..."
		left={props => <List.Icon {...props} color='#ffaf29' icon="food-fork-drink" />}
		right={(props) => 	<View style={{	width: '20%', flexDirection: 'row', 
											justifyContent: 'center', alignItems: 'center'	}}>
								<TouchableOpacity style={{width: '50%'}}>
									<List.Icon {...props} 	color='#ffaf29' icon="square-edit-outline" 
															style={{width: '100%', margin: 0, padding: 0}}/>
								</TouchableOpacity>
								<TouchableOpacity style={{width: '50%'}}>
									<List.Icon {...props} 	color='#ffaf29' icon="delete" 
															style={{width: '100%', margin: 0, padding: 0}}/>
								</TouchableOpacity>
							</View>}
	/>
)

const DateHeader = (props) => (
	<List.Subheader style={{fontSize: 17, backgroundColor: '#ffaf29', color: 'white', 
							width: '100%', textAlign: 'center'}}>
		{props.date}
	</List.Subheader>
)

export default EatenItemsScreen;