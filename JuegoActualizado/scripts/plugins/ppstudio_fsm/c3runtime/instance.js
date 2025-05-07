"use strict";
{
	const C3 = globalThis.C3;
	C3.Plugins.ppstudio_fsm.Instance = class ppstudio_fsm_instance extends globalThis.ISDKInstanceBase
	{
		constructor()
		{
			super();
			
			// Initialise object properties
			this._state = "";
			this._prevstate = "";
			this._stateFinished ="";
		}
		
		_release()
		{
			super._release();
		}
		
		_saveToJson()
		{
			return {
				// data to be saved for savegames
			};
		}
		
		_loadFromJson(o)
		{
			// load state for savegames
		}
		
		_getDebuggerProperties(){
			const prefix = "plugins.ppstudio_smartui_plugin.debugger.";			
			const values=[
				{
					title:"plugins.ppstudio_smartui_plugin.name",
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