"use strict";

{
	const C3 = globalThis.C3;
	C3.Behaviors.ppstudio_beh_fsm = class ppstudio_beh_fsm_base extends globalThis.ISDKBehaviorBase
	{
		constructor()
		{
			super();
			console.log('%cFinite State Machine (FSM) Powered by \n%cPixel %cPerfect %cStudio \n%cWebSite: https://www.pixelperfectstudio.mx \n%cDocumentation:https://smartui-docs.pixelperfectstudio.mx/',                
                'color: purple; font-weight: bold; background-color:plum; font-size:18px',
                'color: cyan; font-weight: bold; background-color:black; font-size:18px',
                'color: purple; font-weight: bold; background-color:black; font-size:18px', 
                'color: plum; font-weight: bold; background-color:black; font-size:18px', 
                'color: yellow; font-weight: bold; background-color:blue; ',
                'color: yellow; font-weight: bold; background-color:blue',
            );
		}
	};
}