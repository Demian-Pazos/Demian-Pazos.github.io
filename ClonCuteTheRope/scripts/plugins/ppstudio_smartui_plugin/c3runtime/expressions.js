
const C3 = globalThis.C3;

C3.Plugins.ppstudio_smartui_plugin.Exps =
{
    FocusedUID(){
        return this._smartui.containerHandler.getFocusedComponent()!==null?this._smartui.containerHandler.getFocusedComponent().uid:-1;
    }
};
