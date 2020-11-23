import React, {useReducer} from 'react';
import Context from './utils/context';
import * as ACTIONS from './store/actions/actions';

import * as Reducer1 from './store/reducers/plain_reducer';
import * as AuthReducer from './store/reducers/auth_reducer';
import * as FormReducer from './store/reducers/form_reducer';

import Routes from './routes';

import Auth from './utils/auth';

const auth = new Auth()

const ContextState = () => {
	// plain reducer
	const [stateReducer1, dispatchReducer1] = useReducer(Reducer1.Reducer1, Reducer1.initState)

	const handleDispatchTrue = () => {
		dispatchReducer1(ACTIONS.success())
	}

	const handleDispatchFalse = () => {
		dispatchReducer1(ACTIONS.failure())
	}

	// auth reducer
	const [stateAuthReducer, dispatchAuthReducer] = useReducer(AuthReducer.AuthReducer, AuthReducer.initState)

	const handleLogin = () => {
		dispatchAuthReducer(ACTIONS.login_success())
	}

	const handleLogout = () => {
		dispatchAuthReducer(ACTIONS.login_failure())
	}

	const handleAddProfile = (profile) => {
		dispatchAuthReducer(ACTIONS.profile_add(profile))
	}

	const handleRemoveProfile = () => {
		dispatchAuthReducer(ACTIONS.profile_del())
	}

	// form reducer
	const [stateFormReducer, dispatchFormReducer] = useReducer(FormReducer.FormReducer, FormReducer.initState)

	const handleFormEdit = (event) => {
		dispatchFormReducer(ACTIONS.user_input_edit(event.target.value))
	}

	const handleFormSubmit = (event) => {
		event.preventDefault();
		event.persist();
		dispatchFormReducer(ACTIONS.user_input_submit(event.target.useContext.value))
	}

	const handleAuthentication = (props) => {
		if (props.location.hash) {
			auth.handleAuth()
		}
	}


	return(
		<div>
		<Context.Provider
		    value={{
			//Reducer1
			stateProp1: stateReducer1.stateproc1,
			stateProp2: stateReducer1.stateproc2,
			dispatchContextTrue: () => handleDispatchTrue(),
			dispatchContextFalse: () => handleDispatchFalse(),

			//FormReducer
			useContextEditState: stateFormReducer.usertext_Edit,
			useContextSubmitState: stateFormReducer.usertext_Submit,
			useContextEdit: (event) => handleFormEdit(event),
			useContextSubmit: (event) => handleFormSubmit(event),

			//AuthReducer
			authState: stateAuthReducer.authenticated,
			profileState: stateAuthReducer.profile,
			handleUserLogin: () => handleLogin(),
			handleUserLogout: () => handleLogout(),
			handleUserAddProfile: (profile) => handleAddProfile(profile),
			handleUserDelProfile: () => handleRemoveProfile(),

			//handle Auth
			handleAuth: (props) => handleAuthentication(props),
			authObj: auth
		    }}>
		<Routes />
	</Context.Provider>
	</div>
    )
}

export default ContextState;
