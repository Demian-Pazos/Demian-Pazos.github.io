"use strict";
{
	const C3=self.C3;
	C3.Behaviors.ppstudio_container_beh.Acts =
	{
		SetEnabled(e){			
			this._container.setEnabled(e);
		},

		SetName(n){
			this._container.setComponentName(n);
		},
		
		SetFocus(){
			this._container.setFocus();
		},
		
		SetSequence(i){
			this._container.setSequence(i);
		},

		SetInvisibleComponent(i){
			this._container.setInvisibleComponent(i);
		},

		FocusFirstElement(){
			this._container.focusFirstElement();
		},

		FocusLastElement(){
			this._container.focusLastElement();
		},
		
		SetAutofocusChildren(e){
			this._container.setAutoFocusChildren(e);
		}
	};
}