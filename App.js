import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screen/ResultsShowScreen';

const navigator = createStackNavigator(
	{
		Search: SearchScreen,
		ResultsShow: ResultsShowScreen
	},
	{
		initalRouteName: 'Search',
		defaultNavigationOptions: {
			title: 'Business Search'
		}
	}
);

export default createAppContainer(navigator);
