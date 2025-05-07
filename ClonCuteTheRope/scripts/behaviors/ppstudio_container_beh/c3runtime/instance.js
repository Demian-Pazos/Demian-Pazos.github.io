"use strict";

{
	const C3=self.C3;
	C3.Behaviors.ppstudio_container_beh.Instance = class ppstudio_container_beh_Instance extends globalThis.ISDKBehaviorInstanceBase
	{
		#version = "0.0.0.3"; //Addon version.
		constructor()
		{			
			super();			
			this._properties=null;
			this._container=null;
			this._initialized=false;
			this._loadedState=null;
			
			const properties = this._getInitProperties();
			if (properties){
				this._properties=properties;
			}
		}

		_postCreate(){
			this._initContainer();
			if (this._loadedState!=null){
				this._container.loadFromJSON(this._loadedState);
				this._loadedState=null;
			}
		}

		_checkSmartUIInstance(){
			if (globalThis["PPStudio"]===undefined)
				return false;

			if (globalThis["PPStudio"]["SmartUI"]===undefined)
				return false;

			return true;
		}

		_initContainer(){			
			if (!this._checkSmartUIInstance()){
				const msg="ERROR: SmartUI Framework not found! Add the SMART UI plugin to your project.";
				alert(msg);
				throw new Error(msg);
			}

			if (this._container!==null) 
				return;

			if (this.instance==null) 
				return;
			
			if (this._properties)
			{				
				globalThis["PPStudio"]["SmartUI"]["getInstance"]().init(this.runtime);

				this._container=globalThis["PPStudio"]["SmartUI"].Utilities.UIConstruct3ObjectTranslator.CreateFocusableContainer(this,this.#version);
				let idx=0;
				this._container.setProperties(
					{
						"enabled":this._properties[idx++],
						"sequence-index":this._properties[idx++], 
						"is-invisible-component":this._properties[idx++],
						"is-focusable":this._properties[idx++],
						"is-auto-colored":this._properties[idx++],
						"component-name":this._properties[idx++],
						"auto-focus-children":this._properties[idx++]
					}
				);				
			}

			this.addEventListener("on-focus",(e)=>this._onFocus());
			this.addEventListener("on-focus-lost",(e)=>this._onFocusLost());
		}

		_onFocus(){
			this._trigger(C3.Behaviors.ppstudio_container_beh.Cnds.OnFocus);
		}

		_onFocusLost(){
			this._trigger(C3.Behaviors.ppstudio_container_beh.Cnds.OnFocusLost);
		}

		_release()
		{
			super._release();			
			this._container.destroy();
			this._container=null;
		}
		
		_saveToJson()
		{
			return this._container.toJSON();
		}

		_loadFromJson(o)
		{
			this._loadedState=o; //defer load;
			if (this._container!=null){ //Instance always becomes invalid after a loadeFromJson call
				if (this._container.uid!==this.uid){
					this._container.destroy();
					this._container=null;
					this._postCreate();
				}
			}
			/*if (this._container!==null){
				this._container["loadFromJSON"](o);
			}
			else {
				this._loadedState=o; //defer load;
			}*/
		}

		_getDebuggerProperties(){
			const prefix = "behaviors.ppstudio_container_beh.debugger.";			
			const values=[
				{
					title:"behaviors.ppstudio_container_beh.name",
					properties:[
						{name: prefix+"enabled", value: this._container["isEnabled"](),onedit: v => this._container["setEnabled"](v)},						
						{name: prefix+"sequence-index", value: this._container["getSequence"](), onedit: v => this._container["setSequence"](v)},
						{name: prefix+"is-invisible-component", value: this._container["isInvisibleComponent"](), onedit: v => this._container["setInvisibleComponent"](v)},
						{name: prefix+"component-name", value: this._container["getComponentName"]()},
						{name: prefix+"focusable", value: this._container["isFocusable"](),onedit: v => this._container["setFocusable"](v)},
						{name: prefix+"focused", value: this._container["isFocused"]()},						
						{name: prefix+"has-control", value: this._container["hasControl"]()},
					]
				}
			];
			return values;
		}
	};
}