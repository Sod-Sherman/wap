var theTextArea = document.getElementById('txtarea'),
    theStartButton = document.getElementById('start'),
    theStopButton = document.getElementById('stop'),
    theSelectedAnimation = document.getElementById('animation'),
    theSelectedSize = document.getElementById('fontsize'),
    theSelectedSpeed = document.getElementById('turbo');

(function(){


let timerId = null;
window.onload = main;


function main(){
    
    theStartButton.onclick = startPlay;
    theStopButton.onclick = stopPlay;


}
var exercise = EXERCISE.split('=====\n');
function startPlay(){
    
    // for( e of exercise){
    //     theTextArea.value = '11';
    //     theTextArea.value = e;
    //     alert(e);
    // }
    theStartButton.disabled = true;
    theStopButton.disabled = false;
   //alert(theSelectedAnimation.value + theSelectedSize.value + theSelectedSpeed.checked);
  
   
   switch(theSelectedAnimation.value){
       case 'Exercise': 
    //    let exercise = EXERCISE.split('=====\n');
    //    let blank = BLANK;
    //    let juggler = JUGGLER.split()
        let animArea = EXERCISE.split('=====\n');
     //  while(!theStopButton.disabled){
            //setTimeout(() => playing(animArea, theSelectedSpeed.checked), 1000);
            playing(animArea, 1);
       // }
       break;

   }
}
function playing(animArea, isTurbo){
   //alert("before for of");
   timerId = setInterval(() =>{
    for(a of animArea){
  
       alert(a);
       // setTimeout(() => theTextArea.value = a, 1000);
  //     theTextArea.value = '';
       setTimeout(()=>theTextArea.value = a, 500);
       

    }}, 500); 
}
function stopPlay(){
    theStartButton.disabled = false;
    // alert(theSelectedAnimation.value + theSelectedSize.value + theSelectedSpeed.checked);
     theStopButton.disabled = true;
     clearInterval(timerId);
     //alert("stop disabled" + timerId);
 
};
})();