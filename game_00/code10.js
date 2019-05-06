gdjs.CreditosCode = {};
gdjs.CreditosCode.GDgameoverObjects1= [];
gdjs.CreditosCode.GDgameoverObjects2= [];
gdjs.CreditosCode.GDrestartObjects1= [];
gdjs.CreditosCode.GDrestartObjects2= [];
gdjs.CreditosCode.GDFondoObjects1= [];
gdjs.CreditosCode.GDFondoObjects2= [];

gdjs.CreditosCode.conditionTrue_0 = {val:false};
gdjs.CreditosCode.condition0IsTrue_0 = {val:false};
gdjs.CreditosCode.condition1IsTrue_0 = {val:false};
gdjs.CreditosCode.condition2IsTrue_0 = {val:false};
gdjs.CreditosCode.conditionTrue_1 = {val:false};
gdjs.CreditosCode.condition0IsTrue_1 = {val:false};
gdjs.CreditosCode.condition1IsTrue_1 = {val:false};
gdjs.CreditosCode.condition2IsTrue_1 = {val:false};


gdjs.CreditosCode.mapOfGDgdjs_46CreditosCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.CreditosCode.GDrestartObjects1});gdjs.CreditosCode.mapOfGDgdjs_46CreditosCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.CreditosCode.GDrestartObjects1});gdjs.CreditosCode.mapOfGDgdjs_46CreditosCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.CreditosCode.GDrestartObjects1});gdjs.CreditosCode.eventsList0xb25a8 = function(runtimeScene) {

{



}


{


gdjs.CreditosCode.condition0IsTrue_0.val = false;
{
gdjs.CreditosCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CreditosCode.condition0IsTrue_0.val) {
}

}


{



}


{

gdjs.CreditosCode.GDrestartObjects1.createFrom(runtimeScene.getObjects("restart"));

gdjs.CreditosCode.condition0IsTrue_0.val = false;
gdjs.CreditosCode.condition1IsTrue_0.val = false;
{
gdjs.CreditosCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.CreditosCode.condition0IsTrue_0.val ) {
{
gdjs.CreditosCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditosCode.mapOfGDgdjs_46CreditosCode_46GDrestartObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.CreditosCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{



}


{

gdjs.CreditosCode.GDrestartObjects1.createFrom(runtimeScene.getObjects("restart"));

gdjs.CreditosCode.condition0IsTrue_0.val = false;
gdjs.CreditosCode.condition1IsTrue_0.val = false;
{
gdjs.CreditosCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditosCode.mapOfGDgdjs_46CreditosCode_46GDrestartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.CreditosCode.condition0IsTrue_0.val ) {
{
{gdjs.CreditosCode.conditionTrue_1 = gdjs.CreditosCode.condition1IsTrue_0;
gdjs.CreditosCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11707900);
}
}}
if (gdjs.CreditosCode.condition1IsTrue_0.val) {
/* Reuse gdjs.CreditosCode.GDrestartObjects1 */
{for(var i = 0, len = gdjs.CreditosCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDrestartObjects1[i].setColor("0;255;128");
}
}}

}


{

gdjs.CreditosCode.GDrestartObjects1.createFrom(runtimeScene.getObjects("restart"));

gdjs.CreditosCode.condition0IsTrue_0.val = false;
gdjs.CreditosCode.condition1IsTrue_0.val = false;
{
gdjs.CreditosCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditosCode.mapOfGDgdjs_46CreditosCode_46GDrestartObjects1Objects, runtimeScene, true, true);
}if ( gdjs.CreditosCode.condition0IsTrue_0.val ) {
{
{gdjs.CreditosCode.conditionTrue_1 = gdjs.CreditosCode.condition1IsTrue_0;
gdjs.CreditosCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14087580);
}
}}
if (gdjs.CreditosCode.condition1IsTrue_0.val) {
/* Reuse gdjs.CreditosCode.GDrestartObjects1 */
{for(var i = 0, len = gdjs.CreditosCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDrestartObjects1[i].setColor("255;255;255");
}
}}

}


}; //End of gdjs.CreditosCode.eventsList0xb25a8


gdjs.CreditosCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.CreditosCode.GDgameoverObjects1.length = 0;
gdjs.CreditosCode.GDgameoverObjects2.length = 0;
gdjs.CreditosCode.GDrestartObjects1.length = 0;
gdjs.CreditosCode.GDrestartObjects2.length = 0;
gdjs.CreditosCode.GDFondoObjects1.length = 0;
gdjs.CreditosCode.GDFondoObjects2.length = 0;

gdjs.CreditosCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['CreditosCode'] = gdjs.CreditosCode;
