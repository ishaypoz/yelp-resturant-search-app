import React from 'react';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigatetion }) => {
	const [result, setResult] = useState(null);
	const id = navigatetion.navigate('ResultsShow', { id: item.id });
	const getResult = async (id) => {
		const response = await yelp.get(`/${id}`);
		setResult(response.data);
	};
	useEffect(() => {
		getResult(id);
	}, []); //call it one time empty []
	return (
		<View>
			<Text>{result.name}</Text>
			<FlatList
				data={result.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => {
					return <Image style={styles.image} source={{ uri: item }} />;
				}}
			/>
		</View>
	);
};
const styles = StyleSheet.create({ image: { height: 200, width: 300 } });

export default ResultsShow;
