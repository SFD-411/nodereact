import * as ACTION_TYPES from '../actions/action_types'

export const initState = {
	authenticated: false,
	dbpf: null,
	profile: null
}

export const AuthReducer = (state = initState, action) => {
	switch(action.type) {
		case ACTION_TYPES.LOGIN_SUCCESS:
			return{
				...state,
				authenticated: true
			}
		case ACTION_TYPES.LOGIN_FAILURE:
			return{
				...state,
				authenticated: false
			}
		case ACTION_TYPES.PROFILE_ADD:
			return{
				...state,
				profile: action.payload
			}
		case ACTION_TYPES.PROFILE_DEL:
			return{
				...state,
				profile: null
			}
		case ACTION_TYPES.DB_PROFILE_SET:
			return{
				...state,
				dbpf: action.payload
			}
		case ACTION_TYPES.DB_PROFILE_DEL:
			return{
				...state,
				dbpf: null
			}

		default:
			return state
	}
}
