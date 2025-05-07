"use strict";

{
	const C3 = globalThis.C3;
	C3.Behaviors.ppstudio_beh_fsm.Instance = class ppstudio_beh_fsm_Instance extends globalThis.ISDKBehaviorInstanceBase
	{
		constructor()
		{
			super();
			
			// Initialise object properties			
	
			this._state = "";
			this._prevstate = "";
			this._instance = this;

			const properties = this._getInitProperties();
			if (properties)
			{
				this._state = properties[0];
			}
		}

		_release()
		{
			super._release();
		}
		
		_saveToJson()
		{
			return {
				"CurrentState":this._state,
				"PreviousState":this._prevstate
			};
		}

		_loadFromJson(o)
		{
			this._state = o["CurrentState"];
        	this._prevstate = o["PreviousState"];
		}

		_getDebuggerProperties(){
			const prefix = "behaviors.ppstudio_beh_fsm.debugger.";			
			const values=[
				{
					title:"behaviors.ppstudio_beh_fsm.name",
					properties:[
						{name: prefix+"current-state", value:this._state},
						{name: prefix+"previous-state", value: this._prevstate},
					]
				}
			];
			return values;
		}
	};
}