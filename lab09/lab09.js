$(function () {
    "use restrict";
    function displayError(msg) {
        $('#status').append(msg+'<br />');
        console.log(msg);
    }

    function checkValidate(event) {
        event.preventDefault();
        let flag = true;
        let seatNumber = $('#seat').val();
        let radioValue = $("input[name='taxi']:checked").val();
        let extraFieldValue = $("input[type='checkbox']:checked").val();
        console.log(extraFieldValue);
        //let checkBoxValue = $("input[name='checkbox']:checked").val();
        if (seatNumber > 200 || seatNumber < 1) {
            displayError('You cannot book more than 200 seats');
            flag = false;
        }
        if(!radioValue) {
            displayError("Select Taxi types!");
            flag = false;
        }
        if(!extraFieldValue){
            displayError("Select Extras condition!");
            flag = false;
        }

        if(flag){
            $('#status').empty();
            displayError("Submitted!");
            this.submit();
        }


    }

    $('#myFormId').on('submit', checkValidate);

});