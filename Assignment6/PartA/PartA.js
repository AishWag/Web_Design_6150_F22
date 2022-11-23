// email validation function
function validateEmail(email) {
    var regex = /^[a-zA-Z]+\w+([-+.']\w+)*@(northeastern.edu)/;

    return regex.test(email);
}
function validatePassword(password) {
    var regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,}$)/;
   
    return regex.test(password);
}
// to pass username value to second web page
function passvalues() {
    var userName = document.getElementById("userName").value;
    localStorage.setItem("textvalue", userName);
    return false;
}
$('#submitButton').click(function () {

    //creating new variables
    var emailMissing = '';
    var emailErrorMessage = '';
    var userNameMissing = '';
    var userNameErrorMessage = '';
    var passwordMissing = '';
    var passwordErrorMessage = '';

    // checking email validation
    if ($('#email').val() == "") {
        emailMissing = "Email address cannot be null value";

        $('#emailMissing').html(emailMissing);
    }
    if (validateEmail($("#email").val()) == false) {
        emailErrorMessage = "Not a valid Email address,it should start only with charater and domain name should be @northeastern.edu";
        $("#emailError").html(emailErrorMessage);
    }
    // display email error message
    if (emailMissing != '') {
        $('#emailMissing').show();
        $('#emailError').hide();
    } else if (emailErrorMessage != '') {
        $('#emailMissing').hide();
        $('#emailError').show();
    } else {
        $('#emailError').hide();
        $('#emailMissing').hide();

    }
    // username validation
    let usernameValue = $('#userName').val();
    if ($('#userName').val() == "") {
        userNameMissing = "User Name cannot be null";
        $('#userNameMissing').html(userNameMissing);
    }
    if (usernameValue.length < 3 || usernameValue.length > 10) {
        userNameErrorMessage = "Username length should be between 3-10 characters only";
        $("#userNameError").html(userNameErrorMessage);
    }

    // display userName error message
    if (userNameMissing != '') {
        $('#userNameMissing').show();
        $('#userNameError').hide();
    } else if (userNameErrorMessage != '') {
        $('#userNameMissing').hide();
        $('#userNameError').show();
    } else {
        $('#userNameMissing').hide();
        $('#userNameError').hide();
    }

    //Password 
    if ($('#password').val() == "") {
        passwordMissing = "Password cannot be empty";
        $('#passwordMissing').html(passwordMissing);
    }
    if (validatePassword($("#password").val()) == false) {
        passwordErrorMessage = "Password should contain at least 1 small,1 capital,1 digit and a special character";
        $("#passwordError").html(passwordErrorMessage);
    }

    // display Password error message
    if (passwordMissing != '') {
        $('#passwordMissing').show();
        $('#passwordError').hide();
    } else if (passwordErrorMessage != '') {
        $('#passwordMissing').hide();
        $('#passwordError').show();
    } else {
        $('#passwordMissing').hide();
        $('#passwordError').hide();
    }

    if (emailErrorMessage == "" && userNameErrorMessage == '' && passwordErrorMessage == '') {
    
        window.location.href = "calc.html";
    }
});

