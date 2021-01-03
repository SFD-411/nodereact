import * as ACTION_TYPES from '../actions/action_types'

export const initState = {
	stateproc1: false,
	stateproc2: false
}

export const Reducer1 = (state = initState, action) => {
	switch(action.type) {
		case ACTION_TYPES.SUCCESS:
			return {
				...state,
				stateproc1: true,
				stateproc2: true
			}
		case ACTION_TYPES.FAILURE:
			return {
				...state,
				stateproc1: false,
				stateproc2: false
			}
		default:
			throw new Error();
	}
}
