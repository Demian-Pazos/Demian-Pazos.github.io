"use strict";

{
	const C3=self.C3;
	C3.Behaviors.ppstudio_container_beh.Cnds =
	{
		IsEnabled(){return this._container.isEnabled();},
		IsFocused(){return this._container.isFocused();},
		HasControl(){return this._container.hasControl();},
		IsInvisibleComponent(){return this._container.isInvisibleComponent()},
		IsComponentName(n){return this._container.getComponentName()==n;},

		OnFocus(){return true;},
		OnFocusLost(){return true;}
	};
}