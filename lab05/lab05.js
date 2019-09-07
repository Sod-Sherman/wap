export function fGetMax(a, b) {
    return (a > b) ? a : b;
}

export function fGetMaxOfThree(a, b, c) {
    let arr = [a, b, c];
    let max = a;
    for(let i = 1; i <arr.length; i++){
        if(max < arr[i]) max = arr[i];
    }
    return max;
}

export function fIsVowel(a) {
    return /a|e|i|o|u/i.test(a);
}

export function mySum(arr) {
    let i = 0;
    let result = 0.0;
    while (i < arr.length) {
        result += parseInt(arr[i++]);
    }
    return result;
}

export function multiply(arr) {
    let i = 0;
    let result = 1;
    while (i < arr.length) {
        result *= arr[i++];
    }
    return result;
}

export function fReverse(str) {
    let result = [];
    let i = 0;
    while (i < str.length) {
        result[i] = str.charAt(str.length - i - 1);
        i++;
    }
    return result;
}

export function fFilterLongWords(arrWords, i) {
    let index = 0;
    let newArrWords = [];
    //let arrWords = words.replace(/\r\n\s/g,"\n").split("\n");
    while (index < arrWords.length) {
        if (arrWords[index].length > i) newArrWords.push(arrWords[index]);
        index++;
    }
    return newArrWords;
}

export function fFindLongestWord(words) {
    let i = 0;
    let max = '';
    while (i < words.length) {
        if (max.length <= words[i].length) max = words[i];
        i++;
    }
    return max;
}

export function jsfiddleLAB0509() {

    const a = [1, 3, 5, 3, 3];
    const b = a.map(function (elem, i, array) {
        return elem * 10;
    })
    console.log(b);
    const c = a.filter(function (elem, i, array) {
        return elem == 3;
    });
    console.log(c);
    const d = a.reduce(function (prevValue, elem, i, array) {
        return prevValue * elem;
    });
    console.log(d);

    const d2 = a.find(function (elem) {
        return elem > 1;
    }); //3
    const d3 = a.findIndex(function (elem) {
        return elem > 1;
    }); //1
    console.log(d2);
    console.log(d3);
}

//----------------------------------helper UI-----------------------------------------

function getMax() {
    var a = document.getElementById("value1").value;
    var b = document.getElementById("value2").value;
    document.getElementById("result1").value = fGetMax(a, b);
}

function getMaxOfThree() {
    var a = document.getElementById("value21").value;
    var b = document.getElementById("value22").value;
    var c = document.getElementById("value23").value;
    document.getElementById("result2").value = fGetMaxOfThree(a, b, c);
}

function isVowel() {
    var a = document.getElementById("value31").value;
    if (a == '' || a.length != 1) {
        alert("Please input a character in the field!");
        return;
    }
    document.getElementById("result31").innerHTML = fIsVowel(a).toString();
}

function lab0505() {
    let arr = document.getElementById("textArea1").value.replace(/\r\n|,/g, "\n").split("\n");
    document.getElementById("result51").innerHTML = mySum(arr).toString();
    document.getElementById("result52").innerHTML = multiply(arr).toString();

}

function reverse() {
    let str = document.getElementById("value61").value;
    document.getElementById("result61").innerHTML = fReverse(str).toString();
}

function findLongestWord() {
    let words = document.getElementById("textArea57").value.replace(/\r\n|\s/g, "\n").split("\n");
    document.getElementById("result57").innerText = fFindLongestWord(words);
}

function filterLongestWord() {
    let words = document.getElementById("textArea58").value.replace(/\r\n|\s/g, "\n").split("\n");
    let i = document.getElementById("value58").value;
    document.getElementById("result58").innerText = fFilterLongWords(words, i).toString();
}
