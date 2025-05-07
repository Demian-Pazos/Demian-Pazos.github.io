"use strict";

{
	const C3 = globalThis.C3;
	C3.Plugins.ppstudio_fsm.Exps =
	{
		GetState(){
			return this._state;
		},
		
		GetPrevState(){
			return this._prevstate;
		}
	};
}