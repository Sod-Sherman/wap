$(function () {
    $('#signupForm').on('submit', function (evt) {
        let submitFlag = true;
        $('#status').empty();
        evt.preventDefault();
        if (!$("#agreement:checked").val()) {
            $('#status').append('Term must be checked!<br>');
            submitFlag = false;
        }
        if ($("input[name='pass1']").val() != $("input[name='pass2']").val()) {
            $('#status').append('Passwords must be same!<br>');
            submitFlag = false;
        }
        if (submitFlag) {
            $('#status').append('Success!<br>');
            $('#status').append($("#gender").val() + '<br>');
            this.submit();
        }


    });
});