gdjs.MenuCode = {};
gdjs.MenuCode.GDbuttonObjects1= [];
gdjs.MenuCode.GDbuttonObjects2= [];
gdjs.MenuCode.GDbuttonObjects3= [];
gdjs.MenuCode.GDNewObjectObjects1= [];
gdjs.MenuCode.GDNewObjectObjects2= [];
gdjs.MenuCode.GDNewObjectObjects3= [];
gdjs.MenuCode.GDcontrolesObjects1= [];
gdjs.MenuCode.GDcontrolesObjects2= [];
gdjs.MenuCode.GDcontrolesObjects3= [];
gdjs.MenuCode.GDstartObjects1= [];
gdjs.MenuCode.GDstartObjects2= [];
gdjs.MenuCode.GDstartObjects3= [];
gdjs.MenuCode.GDCreditosObjects1= [];
gdjs.MenuCode.GDCreditosObjects2= [];
gdjs.MenuCode.GDCreditosObjects3= [];
gdjs.MenuCode.GDver_95videoObjects1= [];
gdjs.MenuCode.GDver_95videoObjects2= [];
gdjs.MenuCode.GDver_95videoObjects3= [];
gdjs.MenuCode.GDLogo_95EcoObjects1= [];
gdjs.MenuCode.GDLogo_95EcoObjects2= [];
gdjs.MenuCode.GDLogo_95EcoObjects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.MenuCode.GDbuttonObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.MenuCode.GDbuttonObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCreditosObjects1Objects = Hashtable.newFrom({"Creditos": gdjs.MenuCode.GDCreditosObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCreditosObjects1Objects = Hashtable.newFrom({"Creditos": gdjs.MenuCode.GDCreditosObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCreditosObjects1Objects = Hashtable.newFrom({"Creditos": gdjs.MenuCode.GDCreditosObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDstartObjects2Objects = Hashtable.newFrom({"start": gdjs.MenuCode.GDstartObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDcontrolesObjects1Objects = Hashtable.newFrom({"controles": gdjs.MenuCode.GDcontrolesObjects1});gdjs.MenuCode.eventsList0xab6000 = function(runtimeScene) {

{

gdjs.MenuCode.GDstartObjects2.createFrom(runtimeScene.getObjects("start"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDstartObjects2Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pregunta01", false);
}}

}


{

gdjs.MenuCode.GDcontrolesObjects1.createFrom(runtimeScene.getObjects("controles"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDcontrolesObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Controles", false);
}}

}


}; //End of gdjs.MenuCode.eventsList0xab6000
gdjs.MenuCode.eventsList0xb25a8 = function(runtimeScene) {

{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.deviceSensors.orientation.isActive();
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.deviceSensors.orientation.activateOrientationSensor();
}}

}


{



}


{

gdjs.MenuCode.GDbuttonObjects1.createFrom(runtimeScene.getObjects("button"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbuttonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12952636);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDbuttonObjects1[i].setColor("0;255;128");
}
}}

}


{

gdjs.MenuCode.GDbuttonObjects1.createFrom(runtimeScene.getObjects("button"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbuttonObjects1Objects, runtimeScene, true, true);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14059644);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDbuttonObjects1[i].setColor("256;256;256");
}
}}

}


{

gdjs.MenuCode.GDCreditosObjects1.createFrom(runtimeScene.getObjects("Creditos"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCreditosObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Creditos", false);
}}

}


{

gdjs.MenuCode.GDCreditosObjects1.createFrom(runtimeScene.getObjects("Creditos"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCreditosObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14091940);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDCreditosObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDCreditosObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDCreditosObjects1[i].setColor("0;255;128");
}
}}

}


{

gdjs.MenuCode.GDCreditosObjects1.createFrom(runtimeScene.getObjects("Creditos"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCreditosObjects1Objects, runtimeScene, true, true);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9582028);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDCreditosObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDCreditosObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDCreditosObjects1[i].setColor("255;255;255");
}
}}

}


{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0xab6000(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuCode.eventsList0xb25a8


gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.MenuCode.GDbuttonObjects1.length = 0;
gdjs.MenuCode.GDbuttonObjects2.length = 0;
gdjs.MenuCode.GDbuttonObjects3.length = 0;
gdjs.MenuCode.GDNewObjectObjects1.length = 0;
gdjs.MenuCode.GDNewObjectObjects2.length = 0;
gdjs.MenuCode.GDNewObjectObjects3.length = 0;
gdjs.MenuCode.GDcontrolesObjects1.length = 0;
gdjs.MenuCode.GDcontrolesObjects2.length = 0;
gdjs.MenuCode.GDcontrolesObjects3.length = 0;
gdjs.MenuCode.GDstartObjects1.length = 0;
gdjs.MenuCode.GDstartObjects2.length = 0;
gdjs.MenuCode.GDstartObjects3.length = 0;
gdjs.MenuCode.GDCreditosObjects1.length = 0;
gdjs.MenuCode.GDCreditosObjects2.length = 0;
gdjs.MenuCode.GDCreditosObjects3.length = 0;
gdjs.MenuCode.GDver_95videoObjects1.length = 0;
gdjs.MenuCode.GDver_95videoObjects2.length = 0;
gdjs.MenuCode.GDver_95videoObjects3.length = 0;
gdjs.MenuCode.GDLogo_95EcoObjects1.length = 0;
gdjs.MenuCode.GDLogo_95EcoObjects2.length = 0;
gdjs.MenuCode.GDLogo_95EcoObjects3.length = 0;

gdjs.MenuCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['MenuCode'] = gdjs.MenuCode;
