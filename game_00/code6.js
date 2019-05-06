gdjs.Pregunta03Code = {};
gdjs.Pregunta03Code.GDBoton02Objects1= [];
gdjs.Pregunta03Code.GDBoton02Objects2= [];
gdjs.Pregunta03Code.GDNewObjectObjects1= [];
gdjs.Pregunta03Code.GDNewObjectObjects2= [];
gdjs.Pregunta03Code.GDPoder_95devopsObjects1= [];
gdjs.Pregunta03Code.GDPoder_95devopsObjects2= [];
gdjs.Pregunta03Code.GDnoObjects1= [];
gdjs.Pregunta03Code.GDnoObjects2= [];
gdjs.Pregunta03Code.GDsiObjects1= [];
gdjs.Pregunta03Code.GDsiObjects2= [];

gdjs.Pregunta03Code.conditionTrue_0 = {val:false};
gdjs.Pregunta03Code.condition0IsTrue_0 = {val:false};
gdjs.Pregunta03Code.condition1IsTrue_0 = {val:false};
gdjs.Pregunta03Code.condition2IsTrue_0 = {val:false};
gdjs.Pregunta03Code.conditionTrue_1 = {val:false};
gdjs.Pregunta03Code.condition0IsTrue_1 = {val:false};
gdjs.Pregunta03Code.condition1IsTrue_1 = {val:false};
gdjs.Pregunta03Code.condition2IsTrue_1 = {val:false};


gdjs.Pregunta03Code.mapOfGDgdjs_46Pregunta03Code_46GDsiObjects1Objects = Hashtable.newFrom({"si": gdjs.Pregunta03Code.GDsiObjects1});gdjs.Pregunta03Code.mapOfGDgdjs_46Pregunta03Code_46GDsiObjects1Objects = Hashtable.newFrom({"si": gdjs.Pregunta03Code.GDsiObjects1});gdjs.Pregunta03Code.mapOfGDgdjs_46Pregunta03Code_46GDsiObjects1Objects = Hashtable.newFrom({"si": gdjs.Pregunta03Code.GDsiObjects1});gdjs.Pregunta03Code.eventsList0xa5a7e8 = function(runtimeScene) {

{

gdjs.Pregunta03Code.GDsiObjects1.createFrom(runtimeScene.getObjects("si"));

gdjs.Pregunta03Code.condition0IsTrue_0.val = false;
{
gdjs.Pregunta03Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pregunta03Code.mapOfGDgdjs_46Pregunta03Code_46GDsiObjects1Objects, runtimeScene, true, false);
}if (gdjs.Pregunta03Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game02", false);
}}

}


}; //End of gdjs.Pregunta03Code.eventsList0xa5a7e8
gdjs.Pregunta03Code.mapOfGDgdjs_46Pregunta03Code_46GDnoObjects1Objects = Hashtable.newFrom({"no": gdjs.Pregunta03Code.GDnoObjects1});gdjs.Pregunta03Code.eventsList0xab3770 = function(runtimeScene) {

{

gdjs.Pregunta03Code.GDnoObjects1.createFrom(runtimeScene.getObjects("no"));

gdjs.Pregunta03Code.condition0IsTrue_0.val = false;
{
gdjs.Pregunta03Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pregunta03Code.mapOfGDgdjs_46Pregunta03Code_46GDnoObjects1Objects, runtimeScene, true, false);
}if (gdjs.Pregunta03Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game03", false);
}}

}


}; //End of gdjs.Pregunta03Code.eventsList0xab3770
gdjs.Pregunta03Code.eventsList0xb25a8 = function(runtimeScene) {

{



}


{


gdjs.Pregunta03Code.condition0IsTrue_0.val = false;
{
gdjs.Pregunta03Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Pregunta03Code.condition0IsTrue_0.val) {
}

}


{



}


{

gdjs.Pregunta03Code.GDsiObjects1.createFrom(runtimeScene.getObjects("si"));

gdjs.Pregunta03Code.condition0IsTrue_0.val = false;
gdjs.Pregunta03Code.condition1IsTrue_0.val = false;
{
gdjs.Pregunta03Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pregunta03Code.mapOfGDgdjs_46Pregunta03Code_46GDsiObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Pregunta03Code.condition0IsTrue_0.val ) {
{
{gdjs.Pregunta03Code.conditionTrue_1 = gdjs.Pregunta03Code.condition1IsTrue_0;
gdjs.Pregunta03Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10865556);
}
}}
if (gdjs.Pregunta03Code.condition1IsTrue_0.val) {
}

}


{

gdjs.Pregunta03Code.GDsiObjects1.createFrom(runtimeScene.getObjects("si"));

gdjs.Pregunta03Code.condition0IsTrue_0.val = false;
gdjs.Pregunta03Code.condition1IsTrue_0.val = false;
{
gdjs.Pregunta03Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pregunta03Code.mapOfGDgdjs_46Pregunta03Code_46GDsiObjects1Objects, runtimeScene, true, true);
}if ( gdjs.Pregunta03Code.condition0IsTrue_0.val ) {
{
{gdjs.Pregunta03Code.conditionTrue_1 = gdjs.Pregunta03Code.condition1IsTrue_0;
gdjs.Pregunta03Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11215276);
}
}}
if (gdjs.Pregunta03Code.condition1IsTrue_0.val) {
}

}


{



}


{


gdjs.Pregunta03Code.condition0IsTrue_0.val = false;
{
gdjs.Pregunta03Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Pregunta03Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Pregunta03Code.eventsList0xa5a7e8(runtimeScene);} //End of subevents
}

}


{


gdjs.Pregunta03Code.condition0IsTrue_0.val = false;
{
gdjs.Pregunta03Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Pregunta03Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Pregunta03Code.eventsList0xab3770(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Pregunta03Code.eventsList0xb25a8


gdjs.Pregunta03Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Pregunta03Code.GDBoton02Objects1.length = 0;
gdjs.Pregunta03Code.GDBoton02Objects2.length = 0;
gdjs.Pregunta03Code.GDNewObjectObjects1.length = 0;
gdjs.Pregunta03Code.GDNewObjectObjects2.length = 0;
gdjs.Pregunta03Code.GDPoder_95devopsObjects1.length = 0;
gdjs.Pregunta03Code.GDPoder_95devopsObjects2.length = 0;
gdjs.Pregunta03Code.GDnoObjects1.length = 0;
gdjs.Pregunta03Code.GDnoObjects2.length = 0;
gdjs.Pregunta03Code.GDsiObjects1.length = 0;
gdjs.Pregunta03Code.GDsiObjects2.length = 0;

gdjs.Pregunta03Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['Pregunta03Code'] = gdjs.Pregunta03Code;
