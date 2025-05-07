"use strict";

{
	const C3 = globalThis.C3;
	C3.Behaviors.ppstudio_beh_fsm.Exps =
	{
		GetState(){
			return this._state;
		},
		
		GetPrevState(){
			return this._prevstate;
		}
	};
}