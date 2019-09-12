$(function () {
    "use restrict";


    function displayError(msg) {
        $('#status').text(msg);
        console.log(msg);
    }

    function checkValidate(event) {
        let seatNumber = $('#seat').val();
        let radioValue = $("input[name='taxi']:checked").val();
        let extraFieldValue = $("input[type='checkbox']:checked").val();
        console.log(extraFieldValue);
        //let checkBoxValue = $("input[name='checkbox']:checked").val();
        if (seatNumber > 200 || seatNumber < 1) {
            displayError('You cannot book more than 200 seats');
            event.preventDefault();
        } else if(!radioValue) {
            displayError("Select Taxi types!");
            event.preventDefault();
        } else if(!extraFieldValue){
            displayError("Select Extras condition!");
            event.preventDefault();
        }

        displayError("Submitted!");

    }

    $('#myFormId').on('submit', checkValidate);

});