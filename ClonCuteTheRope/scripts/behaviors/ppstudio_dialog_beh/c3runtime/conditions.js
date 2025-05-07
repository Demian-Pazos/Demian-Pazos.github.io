"use strict";
{
	const C3=self.C3;
	C3.Behaviors.ppstudio_dialog_beh.Cnds =
	{
		IsEnabled(){return this._dialog.isEnabled();},
		IsFocused(){return this._dialog.isFocused();},
		HasControl(){return this._dialog.hasControl();},
		IsInvisibleComponent(){return this._dialog.isInvisibleComponent()},
		IsComponentName(n){return this._dialog.getComponentName()==n;},
		IsModal(){return this._dialog.isModal();},

		IsOpen(){return this._dialog.isOpen();},
		IsMaximized(){return this._dialog.isMaximized();},
		IsMinimized(){return this._dialog.isMinimized();},

		OnOpen(){return true;},
		OnClose(){return true;},
		OnMaximize(){return true;},
		OnMinimize(){return true;},
		OnFocus(){return true;},
		OnFocusLost(){return true;},
		OnRestore(){return true;}
	};
}