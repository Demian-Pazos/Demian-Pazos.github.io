"use strict";

{
	const C3 = globalThis.C3;
	C3.Plugins.ppstudio_fsm.Cnds =
	{
		OnStateChanged(st)
		{
			return (st===this._state);
		},

		OnStateFinished(st)
		{
			return (st===this._stateFinished);
		},
		
		CurrentState(st)
		{
			return (st===this._state);
		},
		
		PreviousState(st){
			return (st===this._prevstate);
		},
		
		OnAnyStateChanged(){
			return true;
		}
	};
}