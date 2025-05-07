const C3 = globalThis.C3;
const DOM_COMPONENT_ID = "ppstudio_smartui_plugin_DOM";

C3.Plugins.ppstudio_smartui_plugin.Instance = class ppstudio_smartui_plugin_Instance extends globalThis.ISDKInstanceBase
{
	constructor()
	{
		super({ domComponentId: DOM_COMPONENT_ID });	
		this._currentTick=0;
		this._nextTick=-1;
		this._loadedState=null;
		this._smartui=null;

		this._properties = this._getInitProperties();

		this._initFramework();
	}

	_postCreate(){
		//this._initFramework();
		if (this._loadedState!=null){
			this._smartui["loadFromJSON"](this._loadedState);
			this._loadedState=null;
		}
	}
	
	_initFramework(){
		if (!this._checkSmartUIInstance()){
			const msg="ERROR: SmartUI Framework not found! Add the SMART UI plugin to your project.";
			alert(msg);
			throw new Error(msg);
		}

		this._smartui=globalThis["PPStudio"]["SmartUI"]["getInstance"]();
		this._smartui.init(this.runtime);
		if (this._properties)		// note properties may be null in some cases
		{
			let idx=0;
			const prop={
				"is-enabled":this._properties[idx++],
				"default-controls":this._properties[idx++],
				"prevent-default":this._properties[idx++],
				"navigation-type":this._properties[idx++],
				"button-behavior":this._properties[idx++],
				"collect-analytics":this._properties[idx++],				
				"plugin-instance":this
			};

			this._smartui.setProperties(prop); //initializing the framework
			prop["plugin-instance"]=null;

			this._postToDOMAsync("set-properties", prop)
				.then((d) => {
						console.log("SmartUI DOM Initialized!");
					})
				.catch(e=>console.error(e));
		}
	}

	_checkSmartUIInstance(){
		if (globalThis["PPStudio"]===undefined)
			return false;
			
		if (globalThis["PPStudio"]["SmartUI"]===undefined)
			return false;

		return true;
	}

	_tick(){
		this._currentTick++;
		if (this._currentTick==this._nextTick){
			globalThis["PPStudio"]["SmartUI"]["getInstance"]().onTick2();
		}

		this._nextTick=this._currentTick+1;
		globalThis["PPStudio"]["SmartUI"]["getInstance"]().onTick();
	}

	_tick2(){
	}

	_release()
	{
		super._release();
		globalThis["PPStudio"]["SmartUI"]["getInstance"]()["destroy"]();
	}

	_getDebuggerProperties(){
		const prefix = "plugins.ppstudio_smartui_plugin.debugger.";			
		const values=[
			{
				title:"plugins.ppstudio_smartui_plugin.name",
				properties:[
					{name: prefix+"enabled", value: this._smartui["isEnabled"](),onedit: v => this._smartui["setEnabled"](v)},
					{name: prefix+"navigation-type", value: this._smartui["getDefaultNavigationTypeStr"]()},
					{name: prefix+"track-pointer", value: this._smartui["isTrackPointer"](),onedit: v => this._smartui["setTrackPointer"](v)},
					{name: prefix+"focused-element-uid", value: this._smartui["containerHandler"]["getFocusedComponent"]()?this._smartui["containerHandler"]["getFocusedComponent"]().uid:0},
				]
			}
		];
		return values;
	}

	_saveToJson()
	{
		return this._smartui["toJSON"]();
	}
	
	_loadFromJson(o)
	{
		if (this._smartui!==null){
			this._smartui["loadFromJSON"](o);
		}
		else {
			this._loadedState=o; //defer load;
		}
	}
};