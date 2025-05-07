"use strict";
{
	const C3=self.C3;
	C3.Behaviors.ppstudio_dialog_beh.Acts =
	{
		SetEnabled(e){			
			this._dialog.setEnabled(e);
		},

		SetName(n){
			this._dialog.setComponentName(n);
		},
		
		SetFocus(){
			this._dialog.setFocus();
		},
		
		SetSequence(i){
			this._dialog.setSequence(i);
		},

		SetInvisibleComponent(i){
			this._dialog.setInvisibleComponent(i);
		},

		FocusFirstElement(){
			this._dialog.focusFirstElement();
		},

		FocusLastElement(){
			this._dialog.focusLastElement();
		},

		Restore(){
			this._dialog.restore();
		},
		
		Minimize(){
			this._dialog.minimize();
		},

		Maximize(){
			this._dialog.maximize();
		},

		Close(){
			this._dialog.close();
		},

		SetAutofocusChildren(e){
			this._dialog.setAutoFocusChildren(e);
		}
	};
}