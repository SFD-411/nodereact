import React, { useContext, useState, useEffect, useReducer } from 'react';
import * as ACTIONS from '../store/actions/actions';
import * as Reducer1 from '../store/reducers/plain_reducer';
import Context from '../utils/context'

const HooksContainer1 = () => {
	const context = useContext(Context)

	const [value, setValue] = useState(0)
	const [useEffectValue, setUseEffectValue] = useState(null)
	const [state, dispatch] = useReducer(Reducer1.Reducer1, Reducer1.initState)

	useEffect(() => {
		setTimeout(() => setUseEffectValue("useEffect worked"), 3000 );
	}, [value])

	const incValue = () => {
		setValue(value + 1)
	}

	const decValue = () => {
		setValue(value - 1)
	}

	const handleuseEffectValue = () => {
		setUseEffectValue("some value")
	}

	const handleDispatchTrue = () => {
		dispatch(ACTIONS.success())
	}

	const handleDispatchFalse = () => {
		dispatch(ACTIONS.failure())
	}

	return(
	    <div>
		<div>
		<button onClick={() => handleuseEffectValue()}> Handle Value </button>
		<button onClick={() => handleDispatchTrue()}> Dispatch True </button>
		<button onClick={() => handleDispatchFalse()}> Dispatch False </button>
		<button onClick={() => context.dispatchContextTrue()}> Context True </button>
		<button onClick={() => context.dispatchContextFalse()}> Context False </button>
		<button onClick={() => incValue()}> Increase </button>
		<button onClick={() => decValue()}> Decrease </button>
		<br />
		{context.useContextSubmitState 
			? <h3> {context.useContextSubmitState} </h3>
			: <h3> No User Text </h3>
		}
		<br />
		{state.stateproc1
			? <p> stateproc1 is true </p>
			: <p> stateproc1 is false </p>
		}
		<br />
		{context.stateProp2
			? <p> stateprop2 is true</p>
			: <p> stateprop2 is false</p>
		}
		<br />
		{useEffectValue
			? <p> { useEffectValue } </p>
			: <p> No Value </p>
		}
		<br />
		</div>
	    </div>
	)
}

export default HooksContainer1;

