import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
	const [results, setResults] = userState([]);
	const [errorMessage, setErrorMessage] = userState('');
	try {
		const searchApi = async (searchTerm) => {
			const response = await yelp.get('/search', { params: { limit: 50, term, location: 'san jose' } });
			setResults(response.data.businesss);
		};
	} catch (err) {
		setErrorMessage('Something went wrong');
	}

	useEffect(() => {
		searchApi('pasta');
	}, []); //will only run time
	return [searchApi, results, errorMessage];
};
