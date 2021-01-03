import * as ACTION_TYPES from '../actions/action_types.js'

export const initState = {
	posts: null,
}

export const PostsReducer = (state = initState, action) => {
	switch(action.type) {
		case ACTION_TYPES.DB_POSTS_FETCH:
			return {
				...state,
				posts: action.payload
			}
		case ACTION_TYPES.DB_POSTS_DEL:
			return {
				...state,
				posts: []
			}

		default:
			return state
	}
}
