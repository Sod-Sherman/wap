//-----------------Elements------------------------------------
var theTextArea = document.getElementById('textAreaId1'),
    theButton1 = document.getElementById('button1'),
    theButton2 = document.getElementById('button2'),
    theButton3 = document.getElementById('button3'),
    theImage = document.getElementById('imageId'),
    theCheckbox = document.getElementById('bling'),
    clickNumber = 0, // counting button click
    timerId = null;
//--------------------------------------------------------------
window.onload = function () {
    setTimeout(biggerImage, 100);
    setTimeout(normalImage, 100);
    initializing();
    isCheckBoxCheckedThenDoSomething();
    b1Clicked();
    b2Clicked();
    b3Clicked();
}

function initializing() {
    theTextArea.value = 'Sample Item 1\nSample Item 2';
}

function biggerImage() {
    theImage.onmouseover = function () {
        if (this.className != 'imgBigger')
            this.className = 'imgBigger';
    };

}

function normalImage() {
    theImage.onmouseout = function () {
        if (this.className != 'imgNormal')
            this.className = 'imgNormal';

    };

}

function b1Clicked() {
    theButton1.onclick = function () {
        clickNumber++;
        if (clickNumber % 3 == 1) {
            if (theTextArea.style.fontSize != '24pt') {
                theTextArea.style.fontSize = '24pt';
                clearInterval(timerId);
            }
        } else if (clickNumber % 3 == 2) {
            increaseBySize();
        } else {
            timerId = setInterval(increaseBySize, 500);
        }
    };
}

function b2Clicked() {
    theButton2.onclick = function () {
        let words = theTextArea.value.replace(/\r\n|\s|,/g, "\n").split("\n");
        for(let i = 0; i < words.length; i++){
            if(isVowel(words[i])) {
                words[i] += 'ay';
            }
            else{
                words[i] = words[i].slice(1,words[i].length) + words[i].charAt(0) + 'ay';
            }
        }
        theTextArea.value = words.join(' ');
    };
}

function b3Clicked() {
    theButton3.onclick = function () {
        let words = theTextArea.value.replace(/\r\n|\s|,/g, "\n").split("\n");
        for(let i = 0; i < words.length; i++){
            if(words[i].length >= 5) {
                words[i] = 'Malkovitch';
            }
        }
        theTextArea.value = words.join(' ');
    }
}

function isVowel(a) {
    return /a|e|i|o|u/i.test(a.charAt(0));
}

function increaseBySize() {
    let actualSize = parseInt(theTextArea.style.fontSize);
    actualSize += 2;
    theTextArea.style.fontSize = actualSize + 'pt';
}

function isCheckBoxCheckedThenDoSomething() {
    theCheckbox.onchange = function () {
        if (theCheckbox.checked) {

            theTextArea.style.fontSize = 'bold';
            theTextArea.style.color = 'green';
            theTextArea.style.textDecoration = 'underline';
            document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";

        } else {
            theTextArea.style.fontSize = '12pt';
            theTextArea.style.fontWeight = 'normal';
            theTextArea.style.color = 'black';
            theTextArea.style.textDecoration = 'none';
            document.body.style.backgroundImage = 'none';
        }
    }
}


