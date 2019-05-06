gdjs.Pregunta02Code = {};
gdjs.Pregunta02Code.GDBoton02Objects1= [];
gdjs.Pregunta02Code.GDBoton02Objects2= [];
gdjs.Pregunta02Code.GDNewObjectObjects1= [];
gdjs.Pregunta02Code.GDNewObjectObjects2= [];
gdjs.Pregunta02Code.GDPoder_95devopsObjects1= [];
gdjs.Pregunta02Code.GDPoder_95devopsObjects2= [];
gdjs.Pregunta02Code.GDnoObjects1= [];
gdjs.Pregunta02Code.GDnoObjects2= [];
gdjs.Pregunta02Code.GDsiObjects1= [];
gdjs.Pregunta02Code.GDsiObjects2= [];

gdjs.Pregunta02Code.conditionTrue_0 = {val:false};
gdjs.Pregunta02Code.condition0IsTrue_0 = {val:false};
gdjs.Pregunta02Code.condition1IsTrue_0 = {val:false};
gdjs.Pregunta02Code.condition2IsTrue_0 = {val:false};
gdjs.Pregunta02Code.conditionTrue_1 = {val:false};
gdjs.Pregunta02Code.condition0IsTrue_1 = {val:false};
gdjs.Pregunta02Code.condition1IsTrue_1 = {val:false};
gdjs.Pregunta02Code.condition2IsTrue_1 = {val:false};


gdjs.Pregunta02Code.mapOfGDgdjs_46Pregunta02Code_46GDsiObjects1Objects = Hashtable.newFrom({"si": gdjs.Pregunta02Code.GDsiObjects1});gdjs.Pregunta02Code.mapOfGDgdjs_46Pregunta02Code_46GDsiObjects1Objects = Hashtable.newFrom({"si": gdjs.Pregunta02Code.GDsiObjects1});gdjs.Pregunta02Code.mapOfGDgdjs_46Pregunta02Code_46GDsiObjects1Objects = Hashtable.newFrom({"si": gdjs.Pregunta02Code.GDsiObjects1});gdjs.Pregunta02Code.eventsList0xd6f728 = function(runtimeScene) {

{

gdjs.Pregunta02Code.GDsiObjects1.createFrom(runtimeScene.getObjects("si"));

gdjs.Pregunta02Code.condition0IsTrue_0.val = false;
{
gdjs.Pregunta02Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pregunta02Code.mapOfGDgdjs_46Pregunta02Code_46GDsiObjects1Objects, runtimeScene, true, false);
}if (gdjs.Pregunta02Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game02", false);
}}

}


}; //End of gdjs.Pregunta02Code.eventsList0xd6f728
gdjs.Pregunta02Code.mapOfGDgdjs_46Pregunta02Code_46GDnoObjects1Objects = Hashtable.newFrom({"no": gdjs.Pregunta02Code.GDnoObjects1});gdjs.Pregunta02Code.eventsList0xc5a4e8 = function(runtimeScene) {

{

gdjs.Pregunta02Code.GDnoObjects1.createFrom(runtimeScene.getObjects("no"));

gdjs.Pregunta02Code.condition0IsTrue_0.val = false;
{
gdjs.Pregunta02Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pregunta02Code.mapOfGDgdjs_46Pregunta02Code_46GDnoObjects1Objects, runtimeScene, true, false);
}if (gdjs.Pregunta02Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


}; //End of gdjs.Pregunta02Code.eventsList0xc5a4e8
gdjs.Pregunta02Code.eventsList0xb25a8 = function(runtimeScene) {

{



}


{


gdjs.Pregunta02Code.condition0IsTrue_0.val = false;
{
gdjs.Pregunta02Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Pregunta02Code.condition0IsTrue_0.val) {
}

}


{



}


{

gdjs.Pregunta02Code.GDsiObjects1.createFrom(runtimeScene.getObjects("si"));

gdjs.Pregunta02Code.condition0IsTrue_0.val = false;
gdjs.Pregunta02Code.condition1IsTrue_0.val = false;
{
gdjs.Pregunta02Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pregunta02Code.mapOfGDgdjs_46Pregunta02Code_46GDsiObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Pregunta02Code.condition0IsTrue_0.val ) {
{
{gdjs.Pregunta02Code.conditionTrue_1 = gdjs.Pregunta02Code.condition1IsTrue_0;
gdjs.Pregunta02Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14087660);
}
}}
if (gdjs.Pregunta02Code.condition1IsTrue_0.val) {
}

}


{

gdjs.Pregunta02Code.GDsiObjects1.createFrom(runtimeScene.getObjects("si"));

gdjs.Pregunta02Code.condition0IsTrue_0.val = false;
gdjs.Pregunta02Code.condition1IsTrue_0.val = false;
{
gdjs.Pregunta02Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pregunta02Code.mapOfGDgdjs_46Pregunta02Code_46GDsiObjects1Objects, runtimeScene, true, true);
}if ( gdjs.Pregunta02Code.condition0IsTrue_0.val ) {
{
{gdjs.Pregunta02Code.conditionTrue_1 = gdjs.Pregunta02Code.condition1IsTrue_0;
gdjs.Pregunta02Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9599980);
}
}}
if (gdjs.Pregunta02Code.condition1IsTrue_0.val) {
}

}


{



}


{


gdjs.Pregunta02Code.condition0IsTrue_0.val = false;
{
gdjs.Pregunta02Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Pregunta02Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Pregunta02Code.eventsList0xd6f728(runtimeScene);} //End of subevents
}

}


{


gdjs.Pregunta02Code.condition0IsTrue_0.val = false;
{
gdjs.Pregunta02Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Pregunta02Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Pregunta02Code.eventsList0xc5a4e8(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Pregunta02Code.eventsList0xb25a8


gdjs.Pregunta02Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Pregunta02Code.GDBoton02Objects1.length = 0;
gdjs.Pregunta02Code.GDBoton02Objects2.length = 0;
gdjs.Pregunta02Code.GDNewObjectObjects1.length = 0;
gdjs.Pregunta02Code.GDNewObjectObjects2.length = 0;
gdjs.Pregunta02Code.GDPoder_95devopsObjects1.length = 0;
gdjs.Pregunta02Code.GDPoder_95devopsObjects2.length = 0;
gdjs.Pregunta02Code.GDnoObjects1.length = 0;
gdjs.Pregunta02Code.GDnoObjects2.length = 0;
gdjs.Pregunta02Code.GDsiObjects1.length = 0;
gdjs.Pregunta02Code.GDsiObjects2.length = 0;

gdjs.Pregunta02Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['Pregunta02Code'] = gdjs.Pregunta02Code;
