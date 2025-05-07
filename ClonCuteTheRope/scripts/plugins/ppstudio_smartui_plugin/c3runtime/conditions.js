
const C3 = globalThis.C3;

C3.Plugins.ppstudio_smartui_plugin.Cnds =
{
	IsEnabled()
	{
		return this._smartui.isEnabled();
	},

	IsDialogOpen(){
		return this._smartui.isDialogOpen();
	},

	IsModalOpen(){
		return globalThis["PPStudio"]["SmartUI"]["getInstance"]().isModalOpen();
	},

	IsDialogOpenByName(name){
		return this._smartui.isDialogOpenByName(name);
	},

	IsDialogOpenByObjectType(obj,name){
		return this._smartui.isDialogOpenByObjectType(obj,name);
	},

	IsTrackingPointer(){
		return this._smartui.isTrackPointer();
	}
};
