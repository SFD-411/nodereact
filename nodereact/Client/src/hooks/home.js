import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = props => {
	useEffect(() => {
		axios.get('/hello')
		 .then(res=>setState(res.data))
		 .catch(err=> console.log(err))

	},[])

	console.log(useEffect);

	const [state, setState] = useState('')

	return(
	<div>
		Home
		<p>{state}</p>
	</div>
	)
};

export default Home;
