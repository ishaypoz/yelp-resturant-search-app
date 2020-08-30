import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.backgroundStyle}>
			<Feather name="search" size={styles.iconStyle} />
			<TextInput
				autoCapitalize="none"
				autoCorrect={flase}
				style={styles.inputStyle}
				placeholder="Search"
				value={term}
				onTermChange={onTermChange}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: '#F0EEEE',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row',
		marginBottom: 10
	},
	inputStyle: { flex: 1, fontSize: 18 },
	iconStyle: {
		fontSize: 35,
		alignSelf: 'center'
	}
});
export default SearchBar;
