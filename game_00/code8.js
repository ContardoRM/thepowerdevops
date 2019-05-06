gdjs.Pregunta04Code = {};
gdjs.Pregunta04Code.GDBoton02Objects1= [];
gdjs.Pregunta04Code.GDBoton02Objects2= [];
gdjs.Pregunta04Code.GDNewObjectObjects1= [];
gdjs.Pregunta04Code.GDNewObjectObjects2= [];
gdjs.Pregunta04Code.GDPoder_95devopsObjects1= [];
gdjs.Pregunta04Code.GDPoder_95devopsObjects2= [];
gdjs.Pregunta04Code.GDnoObjects1= [];
gdjs.Pregunta04Code.GDnoObjects2= [];
gdjs.Pregunta04Code.GDsiObjects1= [];
gdjs.Pregunta04Code.GDsiObjects2= [];

gdjs.Pregunta04Code.conditionTrue_0 = {val:false};
gdjs.Pregunta04Code.condition0IsTrue_0 = {val:false};
gdjs.Pregunta04Code.condition1IsTrue_0 = {val:false};
gdjs.Pregunta04Code.condition2IsTrue_0 = {val:false};
gdjs.Pregunta04Code.conditionTrue_1 = {val:false};
gdjs.Pregunta04Code.condition0IsTrue_1 = {val:false};
gdjs.Pregunta04Code.condition1IsTrue_1 = {val:false};
gdjs.Pregunta04Code.condition2IsTrue_1 = {val:false};


gdjs.Pregunta04Code.mapOfGDgdjs_46Pregunta04Code_46GDsiObjects1Objects = Hashtable.newFrom({"si": gdjs.Pregunta04Code.GDsiObjects1});gdjs.Pregunta04Code.mapOfGDgdjs_46Pregunta04Code_46GDsiObjects1Objects = Hashtable.newFrom({"si": gdjs.Pregunta04Code.GDsiObjects1});gdjs.Pregunta04Code.mapOfGDgdjs_46Pregunta04Code_46GDsiObjects1Objects = Hashtable.newFrom({"si": gdjs.Pregunta04Code.GDsiObjects1});gdjs.Pregunta04Code.eventsList0xb2a630 = function(runtimeScene) {

{

gdjs.Pregunta04Code.GDsiObjects1.createFrom(runtimeScene.getObjects("si"));

gdjs.Pregunta04Code.condition0IsTrue_0.val = false;
{
gdjs.Pregunta04Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pregunta04Code.mapOfGDgdjs_46Pregunta04Code_46GDsiObjects1Objects, runtimeScene, true, false);
}if (gdjs.Pregunta04Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


}; //End of gdjs.Pregunta04Code.eventsList0xb2a630
gdjs.Pregunta04Code.mapOfGDgdjs_46Pregunta04Code_46GDnoObjects1Objects = Hashtable.newFrom({"no": gdjs.Pregunta04Code.GDnoObjects1});gdjs.Pregunta04Code.eventsList0xb15ba0 = function(runtimeScene) {

{

gdjs.Pregunta04Code.GDnoObjects1.createFrom(runtimeScene.getObjects("no"));

gdjs.Pregunta04Code.condition0IsTrue_0.val = false;
{
gdjs.Pregunta04Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pregunta04Code.mapOfGDgdjs_46Pregunta04Code_46GDnoObjects1Objects, runtimeScene, true, false);
}if (gdjs.Pregunta04Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game02", false);
}}

}


}; //End of gdjs.Pregunta04Code.eventsList0xb15ba0
gdjs.Pregunta04Code.eventsList0xb25a8 = function(runtimeScene) {

{



}


{


gdjs.Pregunta04Code.condition0IsTrue_0.val = false;
{
gdjs.Pregunta04Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Pregunta04Code.condition0IsTrue_0.val) {
}

}


{



}


{

gdjs.Pregunta04Code.GDsiObjects1.createFrom(runtimeScene.getObjects("si"));

gdjs.Pregunta04Code.condition0IsTrue_0.val = false;
gdjs.Pregunta04Code.condition1IsTrue_0.val = false;
{
gdjs.Pregunta04Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pregunta04Code.mapOfGDgdjs_46Pregunta04Code_46GDsiObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Pregunta04Code.condition0IsTrue_0.val ) {
{
{gdjs.Pregunta04Code.conditionTrue_1 = gdjs.Pregunta04Code.condition1IsTrue_0;
gdjs.Pregunta04Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9617020);
}
}}
if (gdjs.Pregunta04Code.condition1IsTrue_0.val) {
}

}


{

gdjs.Pregunta04Code.GDsiObjects1.createFrom(runtimeScene.getObjects("si"));

gdjs.Pregunta04Code.condition0IsTrue_0.val = false;
gdjs.Pregunta04Code.condition1IsTrue_0.val = false;
{
gdjs.Pregunta04Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pregunta04Code.mapOfGDgdjs_46Pregunta04Code_46GDsiObjects1Objects, runtimeScene, true, true);
}if ( gdjs.Pregunta04Code.condition0IsTrue_0.val ) {
{
{gdjs.Pregunta04Code.conditionTrue_1 = gdjs.Pregunta04Code.condition1IsTrue_0;
gdjs.Pregunta04Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11623596);
}
}}
if (gdjs.Pregunta04Code.condition1IsTrue_0.val) {
}

}


{



}


{


gdjs.Pregunta04Code.condition0IsTrue_0.val = false;
{
gdjs.Pregunta04Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Pregunta04Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Pregunta04Code.eventsList0xb2a630(runtimeScene);} //End of subevents
}

}


{


gdjs.Pregunta04Code.condition0IsTrue_0.val = false;
{
gdjs.Pregunta04Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Pregunta04Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Pregunta04Code.eventsList0xb15ba0(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Pregunta04Code.eventsList0xb25a8


gdjs.Pregunta04Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Pregunta04Code.GDBoton02Objects1.length = 0;
gdjs.Pregunta04Code.GDBoton02Objects2.length = 0;
gdjs.Pregunta04Code.GDNewObjectObjects1.length = 0;
gdjs.Pregunta04Code.GDNewObjectObjects2.length = 0;
gdjs.Pregunta04Code.GDPoder_95devopsObjects1.length = 0;
gdjs.Pregunta04Code.GDPoder_95devopsObjects2.length = 0;
gdjs.Pregunta04Code.GDnoObjects1.length = 0;
gdjs.Pregunta04Code.GDnoObjects2.length = 0;
gdjs.Pregunta04Code.GDsiObjects1.length = 0;
gdjs.Pregunta04Code.GDsiObjects2.length = 0;

gdjs.Pregunta04Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['Pregunta04Code'] = gdjs.Pregunta04Code;
