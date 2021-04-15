function login() {
    let username = document.getElementById("your_name").value;
    let password = document.getElementById("your_pass").value;

    $.ajax('/login', {
        type: 'POST',
        data: {
            'username': username,
            'password': password
        },
        success: function (data) {
            alert(data.message);
            if (data.err == null){
                window.location.href = "/main";
            }
        },
        error: function (errorMessage) {
            alert(errorMessage);
        }
    });
};


function signup() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    let confirmpassword = document.getElementById("re_pass").value;
    let age = document.getElementById("age").value;

    if (confirmpassword != password){
        alert("Confirm password does not match he password");
        return;
    }

    $.ajax('/signup', {
        type: 'POST',
        data: {
            'first_name': fname,
            'last_name': lname,
            'email': email,
            'password': password,
            'age': age
        },
        success: function (data) {
            alert(data.message);
            if (data.err == null){
                window.location.href = "/login";
            }
        },
        error: function (errorMessage) {
            alert(errorMessage);
        }
    });
};