window.onload = function(){
let theTextArea = document.getElementById('txtarea'),
    theStartButton = document.getElementById('start'),
    theStopButton = document.getElementById('stop'),
    theSelectedAnimation = document.getElementById('animation'),
    theSelectedSize = document.getElementById('fontsize'),
    theSelectedSpeed = document.getElementById('turbo');
let pTest = document.getElementById('pTest');

let timerId1 = null;
let timerId2 = null;



    theStartButton.onclick = startPlay;
    theStopButton.onclick = stopPlay;



let exercise = EXERCISE.split('=====\n');
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
   timerId1 = setInterval(()=>sub(animArea), 500); 
}

function sub(animArea){
     let temp = 0;
    for(let a of animArea){
        theTextArea.value = a.toString();
       // pTest.innerText = a;
        alert(theTextArea.value);
        let i = 0;
        while(i < 1000000){
            i++;
        }
        temp++;
        theTextArea.value = temp.toString();
        i = 0;
        while(i < 1000000){
            i++;
        }

        // timerId2 = setTimeout(()=>{
        // //alert(a);
        // }, 2000);
    }

}

function stopPlay(){
    theStartButton.disabled = false;
    // alert(theSelectedAnimation.value + theSelectedSize.value + theSelectedSpeed.checked);
     theStopButton.disabled = true;
     clearInterval(timerId1);
     clearTimeout(timerId2)
     //alert("stop disabled" + timerId);
 
}
}
