"use strict";

{
	const C3 = globalThis.C3;
	C3.Behaviors.ppstudio_beh_fsm.Cnds =
	{
		OnStateChanged(st)
		{
			if (st===this._state)
				return true;
		},

		OnStateFinished(st)
		{
			return (st===this._stateFinished);
		},
		
		CurrentState(st)
		{
			if (st===this._state)
				return true;
		},
		
		PreviousState(st){
			if (st===this._prevstate)
				return true;
		},
		
		OnAnyStateChanged(){
			return true;
		}
	};
}