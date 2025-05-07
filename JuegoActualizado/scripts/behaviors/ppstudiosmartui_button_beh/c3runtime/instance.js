"use strict";

{
	const C3=self.C3;
	C3.Behaviors.ppstudiosmartui_button_beh.Instance = class ppstudiosmartUI_button_beh_Instance extends globalThis.ISDKBehaviorInstanceBase
	{
		#version = "0.0.0.3"; //Addon version. 
		constructor()
		{			
			super();			
			this._properties=null;
			this._button=null;
			this._loadedState=null;

			const properties = this._getInitProperties();
			if (properties){
				this._properties=properties;
			}
		}

		_postCreate(){
			this._initButton();
			if (this._loadedState!=null){
				this._button.loadFromJSON(this._loadedState);
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

		_initButton(){			
			if (!this._checkSmartUIInstance()){
				const msg="ERROR: SmartUI Framework not found! Add the SMART UI plugin to your project.";
				alert(msg);
				throw new Error(msg);
			}

			if (this._button!==null) 
				return;

			if (this.instance==null) 
				return;
			
			if (this._properties)
			{				
				globalThis["PPStudio"]["SmartUI"]["getInstance"]().init(this.runtime);

				this._button=globalThis["PPStudio"]["SmartUI"].Utilities.UIConstruct3ObjectTranslator.CreateButton(this,this.#version);
				let idx=0;
				this._button.setProperties(
					{
						"enabled":this._properties[idx++],
						"sequence-index":this._properties[idx++], 
						"is-invisible-component":this._properties[idx++],
						"is-focusable":this._properties[idx++],
						"is-auto-colored":this._properties[idx++],
						
						"component-name":this._properties[idx++],

						"hover-fn":this._properties[idx++],
						"hover-time":this._properties[idx++],
						"hover-animation":this._properties[idx++],
						"hover-cfactor":this._properties[idx++],

						"press-fn":this._properties[idx++],
						"press-time":this._properties[idx++],
						"press-animation":this._properties[idx++],
						"press-cfactor":this._properties[idx++],
						
						"restore-fn":this._properties[idx++],
						"restore-time":this._properties[idx++],
						"restore-animation":this._properties[idx++],
						"disabled-animation":this._properties[idx++],

						"focus-fn":this._properties[idx++],
						"focus-time":this._properties[idx++],
						"focus-animation":this._properties[idx++],
						"focus-cfactor":this._properties[idx++]
					}
				);
			}

			this.addEventListener("on-pressed",(e)=>this._onPressed());
			this.addEventListener("on-released",(e)=>this._onReleased());
			this.addEventListener("on-hover",(e)=>this._onHover());
			this.addEventListener("on-hover-lost",(e)=>this._onHoverLost());
			this.addEventListener("on-click",(e)=>this._onClick());
			this.addEventListener("on-focus",(e)=>this._onFocus());
			this.addEventListener("on-focus-lost",(e)=>this._onFocusLost());
		}

		_onPressed(){
			this._trigger(C3.Behaviors.ppstudiosmartui_button_beh.Cnds.OnPressed);
		}

		_onReleased(){
			this._trigger(C3.Behaviors.ppstudiosmartui_button_beh.Cnds.OnReleased);
		}

		_onHover(){
			this._trigger(C3.Behaviors.ppstudiosmartui_button_beh.Cnds.OnHover);
		}

		_onHoverLost(){
			this._trigger(C3.Behaviors.ppstudiosmartui_button_beh.Cnds.OnHoverLost);
		}

		_onClick(){
			this._trigger(C3.Behaviors.ppstudiosmartui_button_beh.Cnds.OnClick);
		}
		
		_onFocus(){
			this._trigger(C3.Behaviors.ppstudiosmartui_button_beh.Cnds.OnFocus);
		}

		_onFocusLost(){
			this._trigger(C3.Behaviors.ppstudiosmartui_button_beh.Cnds.OnFocusLost);
		}

		_tick(){
			if (this._button!==null)
				this._button.onTickEvent();
		}

		_release()
		{
			super._release();			
			this._button.destroy();
			this._button=null;
		}
		
		_saveToJson()
		{
			return this._button.toJSON();
		}

		_loadFromJson(o)
		{
			this._loadedState=o; //defer load;
			if (this._button!=null){ //Instance always becomes invalid after a loadeFromJson call
				if (this._button.uid!==this.uid){
					this._button.destroy();
					this._button=null;
					this._postCreate();
				}
			}
		}

		_getDebuggerProperties(){
			const prefix = "behaviors.ppstudiosmartui_button_beh.debugger.";
			const values=[
				{
					title:"behaviors.ppstudiosmartui_button_beh.name",
					properties:[
						{name: prefix+"enabled", value: this._button["isEnabled"](), onedit: v => this._button["setEnabled"](v)},
						{name: prefix+"sequence-index", value: this._button["getSequence"](), onedit: v => this._button["setSequence"](v)},
						{name: prefix+"is-invisible-component", value: this._button["isInvisibleComponent"](), onedit: v => this._button["setInvisibleComponent"](v)},
						{name: prefix+"component-name", value: this._button["getComponentName"]()},
						{name: prefix+"is-focusable", value: this._button["isFocusable"](),onedit: v => this._button["setFocusable"](v)},
						{name: prefix+"hover", value: this._button["isHover"]()},
						{name: prefix+"pressed", value: this._button["isPressed"]()},
						{name: prefix+"focused", value: this._button["isFocused"]()}
					]
				}
			];
			return values;
		}
		
	};
}