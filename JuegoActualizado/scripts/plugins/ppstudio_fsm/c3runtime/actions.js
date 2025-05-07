"use strict";

{
	const C3 = globalThis.C3;
	C3.Plugins.ppstudio_fsm.Acts =
	{
		ChangeState(state)
		{
			this._stateFinished = this._state;
			this._prevstate = this._state;
			this._state = state;
			this._trigger(C3.Plugins.ppstudio_fsm.Cnds.OnStateFinished);
			this._trigger(C3.Plugins.ppstudio_fsm.Cnds.OnAnyStateChanged);
			this._trigger(C3.Plugins.ppstudio_fsm.Cnds.OnStateChanged);
		}
	};
}