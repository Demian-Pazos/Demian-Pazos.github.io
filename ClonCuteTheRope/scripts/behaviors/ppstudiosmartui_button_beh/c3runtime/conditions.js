"use strict";

{
	const C3=self.C3;
	C3.Behaviors.ppstudiosmartui_button_beh.Cnds =
	{
		IsEnabled(){return this._button.isEnabled();},
		IsPressed(){return this._button.isPressed();},
		IsHovered(){return this._button.isHover();},
		IsFocused(){return this._button.isFocused();},
		IsInvisibleComponent(){return this._button.isInvisibleComponent()},
		IsComponentName(n){return this._button.getComponentName()==n;},
		
		OnClick(){return true;},
		OnPressed(){return true;},
		OnHover(){return true;},
		OnHoverLost(){return true;},
		OnReleased(){return true;},
		OnFocus(){return true;},
		OnFocusLost(){return true;}
	};
}