gdjs.Pregunta01Code = {};
gdjs.Pregunta01Code.GDBoton02Objects1= [];
gdjs.Pregunta01Code.GDBoton02Objects2= [];
gdjs.Pregunta01Code.GDbuttonObjects1= [];
gdjs.Pregunta01Code.GDbuttonObjects2= [];
gdjs.Pregunta01Code.GDNewObjectObjects1= [];
gdjs.Pregunta01Code.GDNewObjectObjects2= [];
gdjs.Pregunta01Code.GDPoder_95devopsObjects1= [];
gdjs.Pregunta01Code.GDPoder_95devopsObjects2= [];
gdjs.Pregunta01Code.GDnoObjects1= [];
gdjs.Pregunta01Code.GDnoObjects2= [];
gdjs.Pregunta01Code.GDsiObjects1= [];
gdjs.Pregunta01Code.GDsiObjects2= [];

gdjs.Pregunta01Code.conditionTrue_0 = {val:false};
gdjs.Pregunta01Code.condition0IsTrue_0 = {val:false};
gdjs.Pregunta01Code.condition1IsTrue_0 = {val:false};
gdjs.Pregunta01Code.condition2IsTrue_0 = {val:false};
gdjs.Pregunta01Code.conditionTrue_1 = {val:false};
gdjs.Pregunta01Code.condition0IsTrue_1 = {val:false};
gdjs.Pregunta01Code.condition1IsTrue_1 = {val:false};
gdjs.Pregunta01Code.condition2IsTrue_1 = {val:false};


gdjs.Pregunta01Code.mapOfGDgdjs_46Pregunta01Code_46GDsiObjects1Objects = Hashtable.newFrom({"si": gdjs.Pregunta01Code.GDsiObjects1});gdjs.Pregunta01Code.mapOfGDgdjs_46Pregunta01Code_46GDsiObjects1Objects = Hashtable.newFrom({"si": gdjs.Pregunta01Code.GDsiObjects1});gdjs.Pregunta01Code.mapOfGDgdjs_46Pregunta01Code_46GDsiObjects1Objects = Hashtable.newFrom({"si": gdjs.Pregunta01Code.GDsiObjects1});gdjs.Pregunta01Code.eventsList0xc5a508 = function(runtimeScene) {

{

gdjs.Pregunta01Code.GDsiObjects1.createFrom(runtimeScene.getObjects("si"));

gdjs.Pregunta01Code.condition0IsTrue_0.val = false;
{
gdjs.Pregunta01Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pregunta01Code.mapOfGDgdjs_46Pregunta01Code_46GDsiObjects1Objects, runtimeScene, true, false);
}if (gdjs.Pregunta01Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


}; //End of gdjs.Pregunta01Code.eventsList0xc5a508
gdjs.Pregunta01Code.mapOfGDgdjs_46Pregunta01Code_46GDnoObjects1Objects = Hashtable.newFrom({"no": gdjs.Pregunta01Code.GDnoObjects1});gdjs.Pregunta01Code.eventsList0xd68878 = function(runtimeScene) {

{

gdjs.Pregunta01Code.GDnoObjects1.createFrom(runtimeScene.getObjects("no"));

gdjs.Pregunta01Code.condition0IsTrue_0.val = false;
{
gdjs.Pregunta01Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pregunta01Code.mapOfGDgdjs_46Pregunta01Code_46GDnoObjects1Objects, runtimeScene, true, false);
}if (gdjs.Pregunta01Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


}; //End of gdjs.Pregunta01Code.eventsList0xd68878
gdjs.Pregunta01Code.eventsList0xb25a8 = function(runtimeScene) {

{



}


{


gdjs.Pregunta01Code.condition0IsTrue_0.val = false;
{
gdjs.Pregunta01Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Pregunta01Code.condition0IsTrue_0.val) {
}

}


{



}


{

gdjs.Pregunta01Code.GDsiObjects1.createFrom(runtimeScene.getObjects("si"));

gdjs.Pregunta01Code.condition0IsTrue_0.val = false;
gdjs.Pregunta01Code.condition1IsTrue_0.val = false;
{
gdjs.Pregunta01Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pregunta01Code.mapOfGDgdjs_46Pregunta01Code_46GDsiObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Pregunta01Code.condition0IsTrue_0.val ) {
{
{gdjs.Pregunta01Code.conditionTrue_1 = gdjs.Pregunta01Code.condition1IsTrue_0;
gdjs.Pregunta01Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9599908);
}
}}
if (gdjs.Pregunta01Code.condition1IsTrue_0.val) {
gdjs.Pregunta01Code.GDbuttonObjects1.createFrom(runtimeScene.getObjects("button"));
{for(var i = 0, len = gdjs.Pregunta01Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Pregunta01Code.GDbuttonObjects1[i].setColor("0;255;128");
}
}}

}


{

gdjs.Pregunta01Code.GDsiObjects1.createFrom(runtimeScene.getObjects("si"));

gdjs.Pregunta01Code.condition0IsTrue_0.val = false;
gdjs.Pregunta01Code.condition1IsTrue_0.val = false;
{
gdjs.Pregunta01Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pregunta01Code.mapOfGDgdjs_46Pregunta01Code_46GDsiObjects1Objects, runtimeScene, true, true);
}if ( gdjs.Pregunta01Code.condition0IsTrue_0.val ) {
{
{gdjs.Pregunta01Code.conditionTrue_1 = gdjs.Pregunta01Code.condition1IsTrue_0;
gdjs.Pregunta01Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13336380);
}
}}
if (gdjs.Pregunta01Code.condition1IsTrue_0.val) {
gdjs.Pregunta01Code.GDbuttonObjects1.createFrom(runtimeScene.getObjects("button"));
{for(var i = 0, len = gdjs.Pregunta01Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Pregunta01Code.GDbuttonObjects1[i].setColor("256;256;256");
}
}}

}


{



}


{


gdjs.Pregunta01Code.condition0IsTrue_0.val = false;
{
gdjs.Pregunta01Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Pregunta01Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Pregunta01Code.eventsList0xc5a508(runtimeScene);} //End of subevents
}

}


{


gdjs.Pregunta01Code.condition0IsTrue_0.val = false;
{
gdjs.Pregunta01Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Pregunta01Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Pregunta01Code.eventsList0xd68878(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Pregunta01Code.eventsList0xb25a8


gdjs.Pregunta01Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Pregunta01Code.GDBoton02Objects1.length = 0;
gdjs.Pregunta01Code.GDBoton02Objects2.length = 0;
gdjs.Pregunta01Code.GDbuttonObjects1.length = 0;
gdjs.Pregunta01Code.GDbuttonObjects2.length = 0;
gdjs.Pregunta01Code.GDNewObjectObjects1.length = 0;
gdjs.Pregunta01Code.GDNewObjectObjects2.length = 0;
gdjs.Pregunta01Code.GDPoder_95devopsObjects1.length = 0;
gdjs.Pregunta01Code.GDPoder_95devopsObjects2.length = 0;
gdjs.Pregunta01Code.GDnoObjects1.length = 0;
gdjs.Pregunta01Code.GDnoObjects2.length = 0;
gdjs.Pregunta01Code.GDsiObjects1.length = 0;
gdjs.Pregunta01Code.GDsiObjects2.length = 0;

gdjs.Pregunta01Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['Pregunta01Code'] = gdjs.Pregunta01Code;
