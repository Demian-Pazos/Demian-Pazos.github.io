"use strict";
{
	const C3=self.C3;
	C3.Behaviors.ppstudiosmartui_button_beh.Acts =
	{
		SetEnabled(e){			
			this._button.setEnabled(e);
		},

		SetName(n){
			this._button.setComponentName(n);
		},

		SimulateClick(){
			this._button.simulateClick();
		},

		SimulateHover(){
			this._button.simulateHover();
		},

		StopSimulateHover(){
			this._button.stopSimulateHover();
		},

		SetFocus(){			
			this._button.setFocus();
		},

		SetFocusable(e){			
			this._button.setFocusable(e);
		},

		SetHoverAnimation(a){
			this._button.setHoverAnimation(a);
		},

		SetPressAnimation(a){
			this._button.setPressAnimation(a);
		},

		SetDisabledAnimation(a){
			this._button.setDisabledAnimation(a);
		},

		SetFocusAnimation(a){
			this._button.setFocusAnimation(a);
		},

		SetNormalAnimation(a){
			this._button.setRestoreAnimation(a);
		},

		SetHoverTime(t){
			this._button.setHoverTime(t);
		},

		SetHoverCFactor(f){
			this._button.setHoverCFactor(f);
		},
		
		SetHoverFunction(f){
			this._button.setHoverFunction(f);
		},

		SetFocusTime(t){
			this._button.setFocusTime(t);
		},

		SetFocusCFactor(f){
			this._button.setFocusCFactor(f);
		},
		
		SetFocusFunction(f){
			this._button.setFocusFunction(f);
		},

		SetPressTime(t){
			this._button.setPressTime(t);
		},

		SetPressCFactor(f){
			this._button.setPressCFactor(f);
		},
		
		SetPressFunction(f){
			this._button.setPressFunction(f);
		},

		SetRestoreTime(t){
			this._button.setRestoreTime(t);
		},

		SetRestoreFunction(f){
			this._button.setRestoreFunction(f);
		},

		SetSequence(i){
			this._button.setSequence(i);
		},

		SetInvisibleComponent(i){
			this._button.setInvisibleComponent(i);
		}
	};
}