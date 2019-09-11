window.onload = function () {
    //------Exercise 1-----------------------------------------------------------------------------------------
   String.prototype.filter = function(str){
       let arr = this.split(' ');
       return arr.filter(value => value != str).join(' ');
   };

   let origString = 'this house is not nice!';
    console.log('\nExercise 1:');
   console.log("Original string: " + origString);
   console.log("Filtered result: " + origString.filter('not'));

   //------Exercise 2-----------------------------------------------------------------------------------------
   Array.prototype.bubbleSort = function () {

       let origValues = this.slice();
       let length = origValues.length - 1;
       do {
           var swapped = false;
           for(let i = 0; i < length; ++i) {
               if (origValues[i] > origValues[i+1]) {
                   let temp = origValues[i];
                   origValues[i] = origValues[i+1];
                   origValues[i+1] = temp;
                   swapped = true;
               }
           }
       }
       while(swapped === true);
       return origValues;

   };

    let origArr = [6,4,0, 3,-2,1];
    console.log('\nExercise 2:');
    console.log("Original: " + origArr);
    console.log("Bibble Sort Result: " + origArr.bubbleSort());

    //------Exercise 3-----------------------------------------------------------------------------------------
    const Teacher = {
        name: 'Unknown',

    }

    console.log('\nExercise 3:');



}
