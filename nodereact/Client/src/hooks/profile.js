import React, { useContext } from 'react';
import Context from '../utils/context';

const Profile = () => {
	const context = useContext(Context)

	const RenderProfile = (props) => {
		return(
		    <div>
			<h1> {props.profile.name} </h1>
			<br />
			<img src={props.profile.picture} alt="" />
			<br />
			<h4> {props.profile.email}
			<br />
			{props.profile.name}</h4>
			<br />
			<h5> Email Verified : </h5>
			{props.profile.email_verified ? <p>Yes</p> : <p>No</p>}
			<br />
		    </div>
		)
	}

	return(
	    <div>
		<RenderProfile profile={context.authObj.userProfile} />
	    </div>
	)
}

export default (Profile);

