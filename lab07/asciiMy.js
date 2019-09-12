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



    theStartButton.onclick = ()=>{
        function helper(i){
                theTextArea.value = i.toString();
                return i;
        }
        for(let i=0; i<1000; i++){
            let del=0;
            while(del<1000){
                del++;
                console.log(del)
            }
            helper(i);
        }
    };
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
   timerId1 = setInterval(()=>sub(animArea), 1500);
}

let pose = 0;

function sub(animArea) {
    // if (pose < animArea.length-1){
    //     theTextArea.value = animArea[pose];
    //     pose++;
    // }else{
    //     theTextArea.value= animArea[pose];
    //     pose = 0;
    // }
    let temp = 0;
     // console.log(animArea);
    for(let a of animArea){
        // console.log(a);
        console.log(theTextArea.value)
       // pTest.innerText = a;
       //  alert(theTextArea.value);
        let i = 0;
        while(i < 100){
            i++;
            // console.log("loop1: " + i)
        }
        temp++;
        // theTextArea.value = temp.toString();

        theTextArea.innerHTML = a;

        console.log(a);
        // timerId2 = setTimeout(()=>{
        // //alert(a);
        // }, 2000);

    }
    console.log("Done")
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
