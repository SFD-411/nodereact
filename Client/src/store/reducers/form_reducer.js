import * as ACTION_TYPES from '../actions/action_types'

export const initState = {
	userText_edit: '',
	userText_submit: ''
}

export const FormReducer = (state, action) => {
	switch(action.type) {
		case ACTION_TYPES.USER_INPUT_EDIT:
			return{
		        	...state,
		        	userText_edit: action.payload
			}
		case ACTION_TYPES.USER_INPUT_SUBMIT:
			return{
				...state,
				userText_submit: action.payload
			}
		default:
			throw new Error()
	}
}
