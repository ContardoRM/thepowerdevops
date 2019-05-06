gdjs.GameOverCode = {};
gdjs.GameOverCode.GDgameoverObjects1= [];
gdjs.GameOverCode.GDgameoverObjects2= [];
gdjs.GameOverCode.GDCreditosObjects1= [];
gdjs.GameOverCode.GDCreditosObjects2= [];
gdjs.GameOverCode.GDrestartObjects1= [];
gdjs.GameOverCode.GDrestartObjects2= [];
gdjs.GameOverCode.GDFondoObjects1= [];
gdjs.GameOverCode.GDFondoObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};
gdjs.GameOverCode.conditionTrue_1 = {val:false};
gdjs.GameOverCode.condition0IsTrue_1 = {val:false};
gdjs.GameOverCode.condition1IsTrue_1 = {val:false};
gdjs.GameOverCode.condition2IsTrue_1 = {val:false};


gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.GameOverCode.GDrestartObjects1});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDCreditosObjects1Objects = Hashtable.newFrom({"Creditos": gdjs.GameOverCode.GDCreditosObjects1});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.GameOverCode.GDrestartObjects1});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.GameOverCode.GDrestartObjects1});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDCreditosObjects1Objects = Hashtable.newFrom({"Creditos": gdjs.GameOverCode.GDCreditosObjects1});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDCreditosObjects1Objects = Hashtable.newFrom({"Creditos": gdjs.GameOverCode.GDCreditosObjects1});gdjs.GameOverCode.eventsList0xb25a8 = function(runtimeScene) {

{



}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
}

}


{



}


{

gdjs.GameOverCode.GDrestartObjects1.createFrom(runtimeScene.getObjects("restart"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDrestartObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{

gdjs.GameOverCode.GDCreditosObjects1.createFrom(runtimeScene.getObjects("Creditos"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDCreditosObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Creditos", false);
}}

}


{



}


{

gdjs.GameOverCode.GDrestartObjects1.createFrom(runtimeScene.getObjects("restart"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDrestartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10865132);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDrestartObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDrestartObjects1[i].setColor("0;255;128");
}
}}

}


{

gdjs.GameOverCode.GDrestartObjects1.createFrom(runtimeScene.getObjects("restart"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDrestartObjects1Objects, runtimeScene, true, true);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10856356);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDrestartObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDrestartObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.GameOverCode.GDCreditosObjects1.createFrom(runtimeScene.getObjects("Creditos"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDCreditosObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11220668);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDCreditosObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDCreditosObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDCreditosObjects1[i].setColor("0;255;128");
}
}}

}


{

gdjs.GameOverCode.GDCreditosObjects1.createFrom(runtimeScene.getObjects("Creditos"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDCreditosObjects1Objects, runtimeScene, true, true);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9454244);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDCreditosObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDCreditosObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDCreditosObjects1[i].setColor("255;255;255");
}
}}

}


}; //End of gdjs.GameOverCode.eventsList0xb25a8


gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.GameOverCode.GDgameoverObjects1.length = 0;
gdjs.GameOverCode.GDgameoverObjects2.length = 0;
gdjs.GameOverCode.GDCreditosObjects1.length = 0;
gdjs.GameOverCode.GDCreditosObjects2.length = 0;
gdjs.GameOverCode.GDrestartObjects1.length = 0;
gdjs.GameOverCode.GDrestartObjects2.length = 0;
gdjs.GameOverCode.GDFondoObjects1.length = 0;
gdjs.GameOverCode.GDFondoObjects2.length = 0;

gdjs.GameOverCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['GameOverCode'] = gdjs.GameOverCode;
