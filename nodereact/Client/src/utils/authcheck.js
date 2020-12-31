import React, { useEffect, useContext } from 'react';
import history from './history';
import Context from './context';
// import * as ACTIONS from '../store/actions/actions';
import axios from 'axios';

const AuthCheck = () => {
	const context = useContext(Context)

	useEffect(context, () => {
		if(context.authObj.isAuthenticated()){
			const profile = context.authObj.userProfile
			context.handleUserLogin()
			context.handleUserAddProfile(proffile)
			axios.post('/api/posts/profiletodb', profile)
			.then(axios.get('/api/get/profilebyemail', {params: {email: profile.profile.email}})
				.then(res => context.handleADDDBProfile(res.data)))
			.then(history.replace('/'))
		} else {
			context.handleUserLogout()
			context.handleUserDelProfile()
			history.replace('/')
		}
	}, [])

	return(
		<div>
		</div>
	)}

export default AuthCheck;
