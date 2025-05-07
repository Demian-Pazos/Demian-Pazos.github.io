"use strict";

{
	const C3=self.C3;
	C3.Behaviors.ppstudio_container_beh.Exps =
	{
		Name(){return this._container.getComponentName()}
	};
}