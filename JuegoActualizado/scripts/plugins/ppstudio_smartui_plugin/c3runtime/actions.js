
const C3 = globalThis.C3;

C3.Plugins.ppstudio_smartui_plugin.Acts =
{
	SetEnabled(e){ globalThis["PPStudio"]["SmartUI"]["getInstance"]().setEnabled(e);},

	NextContainer(){
		globalThis["PPStudio"]["SmartUI"].Utilities.ContainerGlobalHandler.NextContainer();
	},

	PreviousContainer(){ 
		globalThis["PPStudio"]["SmartUI"].Utilities.ContainerGlobalHandler.PreviousContainer();
	},

	NextElement(){
		globalThis["PPStudio"]["SmartUI"].Utilities.ContainerGlobalHandler.NextElement();
	},

	PreviousElement(){ 
		globalThis["PPStudio"]["SmartUI"].Utilities.ContainerGlobalHandler.PreviousElement();
	},

	UpperElement(){
		globalThis["PPStudio"]["SmartUI"].Utilities.ContainerGlobalHandler.UpperElement();
	},

	LowerElement(){
		globalThis["PPStudio"]["SmartUI"].Utilities.ContainerGlobalHandler.LowerElement();
	},

	LeftElement(){
		globalThis["PPStudio"]["SmartUI"].Utilities.ContainerGlobalHandler.LeftElement();
	},

	RightElement(){
		globalThis["PPStudio"]["SmartUI"].Utilities.ContainerGlobalHandler.RightElement();
	},

	OpenDialog(o,layer,x,y,center,template){
		globalThis["PPStudio"]["SmartUI"].Utilities.ContainerGlobalHandler.OpenDialog(o,layer,x,y,!!center,template);
	},

	TriggerDefaultAction(obj){
		globalThis["PPStudio"]["SmartUI"]["getInstance"]().triggerDefaultAction(obj);
	},

	SimulateHover(obj){
		globalThis["PPStudio"]["SmartUI"]["getInstance"]().simulateHover(obj);
	},

	StopSimulateHover(obj){
		globalThis["PPStudio"]["SmartUI"]["getInstance"]().stopSimulateHover(obj);
	},

	SetFocus(obj){
		globalThis["PPStudio"]["SmartUI"]["getInstance"]().setFocus(obj);
	},

	SetPointerObject(obj){
		globalThis["PPStudio"]["SmartUI"]["getInstance"]().setPointerObject(obj);
	},

	SetTrackPointer(e){
		globalThis["PPStudio"]["SmartUI"]["getInstance"]().setTrackPointer(e);
	},

	PointerTouch(){
		globalThis["PPStudio"]["SmartUI"]["getInstance"]().pointerTouch();
	},

	SetNavigationType(t){
		globalThis["PPStudio"]["SmartUI"]["getInstance"]().setDefaultNavigationType(t);
	},

	CloseAllDialogs(){
		globalThis["PPStudio"]["SmartUI"]["getInstance"]().closeAllDialogs();
	},

	SetButtonBehavior(m){
		globalThis["PPStudio"]["SmartUI"]["getInstance"]().setMobileButtonBehavior(m);
	}
};
