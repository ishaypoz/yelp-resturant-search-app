import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer t2cN1f2ezR16ZkcHWNYKoDpiar01z1qUjwkA7nVxnWzryiTwFDk35PJiucoLhjjFY9ECD8GTBGaHBg5yv5YDfLiszKQx8EMvm3Øp1yØUWoHQOnYFjLozpYnZOx-UsXXYx'
	}
});
