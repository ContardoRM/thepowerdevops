gdjs.ControlesCode = {};
gdjs.ControlesCode.GDbuttonObjects1= [];
gdjs.ControlesCode.GDbuttonObjects2= [];
gdjs.ControlesCode.GDNewObjectObjects1= [];
gdjs.ControlesCode.GDNewObjectObjects2= [];
gdjs.ControlesCode.GDvolverObjects1= [];
gdjs.ControlesCode.GDvolverObjects2= [];
gdjs.ControlesCode.GDver_95videoObjects1= [];
gdjs.ControlesCode.GDver_95videoObjects2= [];

gdjs.ControlesCode.conditionTrue_0 = {val:false};
gdjs.ControlesCode.condition0IsTrue_0 = {val:false};
gdjs.ControlesCode.condition1IsTrue_0 = {val:false};
gdjs.ControlesCode.condition2IsTrue_0 = {val:false};
gdjs.ControlesCode.conditionTrue_1 = {val:false};
gdjs.ControlesCode.condition0IsTrue_1 = {val:false};
gdjs.ControlesCode.condition1IsTrue_1 = {val:false};
gdjs.ControlesCode.condition2IsTrue_1 = {val:false};


gdjs.ControlesCode.mapOfGDgdjs_46ControlesCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.ControlesCode.GDbuttonObjects1});gdjs.ControlesCode.mapOfGDgdjs_46ControlesCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.ControlesCode.GDbuttonObjects1});gdjs.ControlesCode.mapOfGDgdjs_46ControlesCode_46GDvolverObjects1Objects = Hashtable.newFrom({"volver": gdjs.ControlesCode.GDvolverObjects1});gdjs.ControlesCode.eventsList0xd68878 = function(runtimeScene) {

{

gdjs.ControlesCode.GDvolverObjects1.createFrom(runtimeScene.getObjects("volver"));

gdjs.ControlesCode.condition0IsTrue_0.val = false;
{
gdjs.ControlesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ControlesCode.mapOfGDgdjs_46ControlesCode_46GDvolverObjects1Objects, runtimeScene, true, false);
}if (gdjs.ControlesCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


}; //End of gdjs.ControlesCode.eventsList0xd68878
gdjs.ControlesCode.eventsList0xb25a8 = function(runtimeScene) {

{



}


{


gdjs.ControlesCode.condition0IsTrue_0.val = false;
gdjs.ControlesCode.condition1IsTrue_0.val = false;
{
gdjs.ControlesCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.ControlesCode.condition0IsTrue_0.val ) {
{
gdjs.ControlesCode.condition1IsTrue_0.val = gdjs.deviceSensors.orientation.isActive();
}}
if (gdjs.ControlesCode.condition1IsTrue_0.val) {
{gdjs.deviceSensors.orientation.activateOrientationSensor();
}}

}


{



}


{

gdjs.ControlesCode.GDbuttonObjects1.createFrom(runtimeScene.getObjects("button"));

gdjs.ControlesCode.condition0IsTrue_0.val = false;
gdjs.ControlesCode.condition1IsTrue_0.val = false;
{
gdjs.ControlesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ControlesCode.mapOfGDgdjs_46ControlesCode_46GDbuttonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ControlesCode.condition0IsTrue_0.val ) {
{
{gdjs.ControlesCode.conditionTrue_1 = gdjs.ControlesCode.condition1IsTrue_0;
gdjs.ControlesCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12247884);
}
}}
if (gdjs.ControlesCode.condition1IsTrue_0.val) {
/* Reuse gdjs.ControlesCode.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.ControlesCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.ControlesCode.GDbuttonObjects1[i].setColor("0;255;128");
}
}}

}


{

gdjs.ControlesCode.GDbuttonObjects1.createFrom(runtimeScene.getObjects("button"));

gdjs.ControlesCode.condition0IsTrue_0.val = false;
gdjs.ControlesCode.condition1IsTrue_0.val = false;
{
gdjs.ControlesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ControlesCode.mapOfGDgdjs_46ControlesCode_46GDbuttonObjects1Objects, runtimeScene, true, true);
}if ( gdjs.ControlesCode.condition0IsTrue_0.val ) {
{
{gdjs.ControlesCode.conditionTrue_1 = gdjs.ControlesCode.condition1IsTrue_0;
gdjs.ControlesCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13336516);
}
}}
if (gdjs.ControlesCode.condition1IsTrue_0.val) {
/* Reuse gdjs.ControlesCode.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.ControlesCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.ControlesCode.GDbuttonObjects1[i].setColor("256;256;256");
}
}}

}


{



}


{


gdjs.ControlesCode.condition0IsTrue_0.val = false;
{
gdjs.ControlesCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ControlesCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ControlesCode.eventsList0xd68878(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.ControlesCode.eventsList0xb25a8


gdjs.ControlesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.ControlesCode.GDbuttonObjects1.length = 0;
gdjs.ControlesCode.GDbuttonObjects2.length = 0;
gdjs.ControlesCode.GDNewObjectObjects1.length = 0;
gdjs.ControlesCode.GDNewObjectObjects2.length = 0;
gdjs.ControlesCode.GDvolverObjects1.length = 0;
gdjs.ControlesCode.GDvolverObjects2.length = 0;
gdjs.ControlesCode.GDver_95videoObjects1.length = 0;
gdjs.ControlesCode.GDver_95videoObjects2.length = 0;

gdjs.ControlesCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['ControlesCode'] = gdjs.ControlesCode;
