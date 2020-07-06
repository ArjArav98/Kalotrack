import * as React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { DataTable, FAB } from 'react-native-paper';

const ItemCaloriesListScreen = () => (

	<View style={{width: '100%', flex: 1}}>

		<ScrollView>
				
				<DataTable>
					<DataTable.Header style={{backgroundColor: '#ffaf29', color: 'white'}}>
						<DataTable.Title>
							<Text style={{color: 'white', fontSize: 17}}>Item</Text>
						</DataTable.Title>	
						<DataTable.Title numeric>
							<Text style={{color: 'white', fontSize: 17}}>Calories</Text>
						</DataTable.Title>
					</DataTable.Header>

					<ItemCaloriesListItem name='Chappati' qty='1 pc' calories={210} />
					<ItemCaloriesListItem name='Ice Cream' qty='1 cup'  calories={210} />
					<ItemCaloriesListItem name='Kissan Jam' qty='1 spoon'  calories={210} />
					<ItemCaloriesListItem name='Quesadillas' qty='1 pc'  calories={490} />
					<ItemCaloriesListItem name='Thayirsadham' qty='1 plate'  calories={270} />
					<ItemCaloriesListItem name='Aavakai Oorga' qty='1 spoon'  calories={210} />
					<ItemCaloriesListItem name='Moong Dal' qty='200 g'  calories={610} />
					<ItemCaloriesListItem name='Quesadillas' qty='1 pc'  calories={490} />
					<ItemCaloriesListItem name='Thayirsadham' qty='1 plate'  calories={270} />
					<ItemCaloriesListItem name='Aavakai Oorga' qty='1 spoon'  calories={210} />
					<ItemCaloriesListItem name='Moong Dal' qty='200 g'  calories={610} />
					<ItemCaloriesListItem name='Ice Cream' qty='1 cup'  calories={210} />
					<ItemCaloriesListItem name='Kissan Jam' qty='1 spoon'  calories={210} />
					<ItemCaloriesListItem name='Quesadillas' qty='1 pc'  calories={490} />
					<ItemCaloriesListItem name='Thayirsadham' qty='1 plate'  calories={270} />
					<ItemCaloriesListItem name='Aavakai Oorga' qty='1 spoon'  calories={210} />
					<ItemCaloriesListItem name='Moong Dal' qty='200 g'  calories={610} />
					<ItemCaloriesListItem name='Quesadillas' qty='1 pc'  calories={490} />
					<ItemCaloriesListItem name='Thayirsadham' qty='1 plate'  calories={270} />
					<ItemCaloriesListItem name='Aavakai Oorga' qty='1 spoon'  calories={210} />
					<ItemCaloriesListItem name='Moong Dal' qty='200 g'  calories={610} />

					<DataTable.Pagination
						page={1}
						numberOfPages={3}
						onPageChange={page => {
						console.log(page);
						}}
						label="1-11 of 11"
					/>
				</DataTable>

			</ScrollView>

			<FAB
				style={{position: 'absolute', margin: 16, right: 0, bottom: 16, backgroundColor: '#ffaf29'}}
				icon="plus"
				color='white'
				onPress={() => console.log('Pressed')}
			/>

	</View>

	

);

const ItemCaloriesListItem = (props) => (
	<DataTable.Row>
		<DataTable.Cell>
			<Text style={{fontSize: 15}}>{props.name} ({props.qty})</Text>
		</DataTable.Cell>
		<DataTable.Cell numeric>
			<Text style={{fontSize: 15}}>{props.calories}</Text>
		</DataTable.Cell>
	</DataTable.Row>
)

export default ItemCaloriesListScreen;