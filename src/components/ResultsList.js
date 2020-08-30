import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
	if (!results.length) {
		return null;
	}
	return (
		<View style={styles.container}>
			<Text style={styles.titleStyle}>{title}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={results}
				keyExtractor={
					(result) => result.id /*every element nee key we use this to insert every flatlist a key*/
				}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
							return <ResultsDetail result={item} />;
						</TouchableOpacity>
					);

					/*almost same as keyExtractor but take the netire result as we need his data from data*/
				}}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	titleStyle: {
		marginLeft: 15,
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 5
	},
	container: {
		marginBottom: 10
	}
});
export default withNavigation(ResultsList);
