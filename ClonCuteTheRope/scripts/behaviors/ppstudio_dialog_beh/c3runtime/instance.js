"use strict";

{
	const C3 = globalThis.C3;
	C3.Behaviors.ppstudio_dialog_beh.Instance = class ppstudio_dialog_beh_Instance extends globalThis.ISDKBehaviorInstanceBase
	{
		#version = "0.0.0.3"; //Addon version. 
		constructor()
		{			
			super();			
			this._properties=null;
			this._dialog=null;
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
				this._dialog.loadFromJSON(this._loadedState);
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

			if (this._dialog!==null) 
				return;

			if (this.instance==null) 
				return;
			
			if (this._properties)
			{				
				globalThis["PPStudio"]["SmartUI"]["getInstance"]().init(this.runtime);

				this._dialog=globalThis["PPStudio"]["SmartUI"].Utilities.UIConstruct3ObjectTranslator.CreateDialog(this,this.#version);
				let idx=0;
				this._dialog.setProperties(
					{
						"enabled":this._properties[idx++],
						"sequence-index":this._properties[idx++], 
						"is-invisible-component":this._properties[idx++],
						"is-focusable":this._properties[idx++],
						"is-auto-colored":this._properties[idx++],

						"component-name":this._properties[idx++],
						"auto-focus-children":this._properties[idx++],
						"is-modal":this._properties[idx++],
						"is-autoclose":this._properties[idx++],

						"min-icon-name":this._properties[idx++],
						"close-button-name":this._properties[idx++],
						"max-button-name":this._properties[idx++],
						"min-button-name":this._properties[idx++],

						"max-mode":this._properties[idx++],

						"open-animation":this._properties[idx++],
						"open-animation-function":this._properties[idx++],
						"open-animation-time":this._properties[idx++],

						"close-animation":this._properties[idx++],
						"close-animation-function":this._properties[idx++],
						"close-animation-time":this._properties[idx++]
					}
				);
			}

			this.addEventListener("on-focus",()=>this._onFocus());
			this.addEventListener("on-focus-lost",()=>this._onFocusLost());
			
			this.addEventListener("on-open",()=>this._onOpen());
			this.addEventListener("on-close",()=>this._onClose());
			this.addEventListener("on-maximize",()=>this._onMaximize());
			this.addEventListener("on-minimize",()=>this._onMinimize());
			this.addEventListener("on-restore",()=>this._onRestore());
		}

		_onOpen(){
			this._trigger(C3.Behaviors.ppstudio_dialog_beh.Cnds.OnOpen);			
		}

		_onClose(){
			this._trigger(C3.Behaviors.ppstudio_dialog_beh.Cnds.OnClose);			
		}

		_onMaximize(){
			this._trigger(C3.Behaviors.ppstudio_dialog_beh.Cnds.OnMaximize);
		}

		_onMinimize(){
			this._trigger(C3.Behaviors.ppstudio_dialog_beh.Cnds.OnMinimize);
		}

		_onRestore(){
			this._trigger(C3.Behaviors.ppstudio_dialog_beh.Cnds.OnRestore);
		}

		_onFocus(){
			this._trigger(C3.Behaviors.ppstudio_dialog_beh.Cnds.OnFocus);
		}

		_onFocusLost(){
			this._trigger(C3.Behaviors.ppstudio_dialog_beh.Cnds.OnFocusLost);
		}

		_release()
		{
			super._release();
			this._dialog.destroy();
			this._dialog=null;
		}
		
		_saveToJson()
		{
			return this._dialog.toJSON();
		}

		_loadFromJson(o)
		{
			this._loadedState=o; //defer load;
			if (this._dialog!=null){ //Instance always becomes invalid after a loadeFromJson call
				if (this._dialog.uid!==this.uid){
					this._dialog.destroy();
					this._dialog=null;
					this._postCreate();
				}
			}
			/*if (this._dialog!==null){
				this._dialog["loadFromJSON"](o);
			}
			else {
				this._loadedState=o; //defer load;
			}*/
		}

		_getDebuggerProperties(){
			const prefix = "behaviors.ppstudio_dialog_beh.debugger.";			
			const values=[
				{
					title:"behaviors.ppstudio_dialog_beh.name",
					properties:[
						{name: prefix+"enabled", value: this._dialog["isEnabled"](),onedit: v => this._dialog["setEnabled"](v)},						
						{name: prefix+"sequence-index", value: this._dialog["getSequence"](), onedit: v => this._dialog["setSequence"](v)},
						{name: prefix+"is-invisible-component", value: this._dialog["isInvisibleComponent"](), onedit: v => this._dialog["setInvisibleComponent"](v)},
						{name: prefix+"component-name", value: this._dialog["getComponentName"]()},
						{name: prefix+"focusable", value: this._dialog["isFocusable"](),onedit: v => this._dialog["setFocusable"](v)},
						{name: prefix+"focused", value: this._dialog["isFocused"]()},						
						{name: prefix+"has-control", value: this._dialog["hasControl"]()},
						{name: prefix+"is-modal", value: this._dialog["isModal"]()},
						{name: prefix+"is-open", value: this._dialog["isOpen"]()},
						{name: prefix+"is-maximized", value: this._dialog["isMaximized"]()},
						{name: prefix+"is-minimized", value: this._dialog["isMinimized"]()},
					]
				}
			];
			return values;
		}
	};
}