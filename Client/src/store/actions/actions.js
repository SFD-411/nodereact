import * as ACTION_TYPES from './action_types';


export const SUCCESS = {
	type: ACTION_TYPES.SUCCESS
}

export const FAILURE = {
	type: ACTION_TYPES.FAILURE
}

export const success = () => {
	return {
		type: ACTION_TYPES.SUCCESS
	}
}

export const failure = () => {
	return {
		type: ACTION_TYPES.FAILURE
	}
}

export const login_success = () => {
	return {
        	type: ACTION_TYPES.LOGIN_SUCCESS
	}
}

export const login_failure = () => {
	return{
        	type: ACTION_TYPES.LOGIN_FAILURE
	}
}

export const profile_add = (profile) => {
	return{
        	type: ACTION_TYPES.PROFILE_ADD,
        	payload: profile
	}
}

export const profile_del = () => {
	return {
        	type: ACTION_TYPES.PROFILE_DEL
	}
}

export const user_input_edit = (text) => {
	return {
        	type: ACTION_TYPES.USER_INPUT_EDIT,
		payload: text
	}
}

export const user_input_submit = (text) => {
	return {
		type: ACTION_TYPES.USER_INPUT_SUBMIT,
		payload:text
	}
}

export const db_profile_set = (profile) => {
	return {
		type: ACTION_TYPES.DB_PROFILE_SET,
		payload: profile
	}
}

export const db_profile_del = () => {
	return {
		type: ACTION_TYPES.DB_PROFILE_DEL
	}
}

export const db_posts_set = (posts) => {
	return {
		type: ACTION_TYPES.DB_POSTS_FETCH,
		payload: posts
	}
}

export const db_posts_del = () => {
	return {
		type: ACTION_TYPES.DB_POSTS_DEL,
	}
}
