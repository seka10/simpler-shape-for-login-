var passwordAttempts = 3;
var timer;

function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        redirectToBlankPage();
    } else {
        passwordAttempts--;

        if (passwordAttempts === 0) {
            disableLogin();
            startTimer();
        } else {
            alert("Invalid username or password. Attempts left: " + passwordAttempts);
        }
    }
}

function disableLogin() {
    document.getElementById("password").disabled = true;
}

function startTimer() {
    var seconds = 30;
    timer = setInterval(function () {
        document.getElementById("timer").innerText = seconds;
        seconds--;

        if (seconds < 0) {
            clearInterval(timer);
            resetLogin();
        }
    }, 1000);
}

function resetLogin() {
    passwordAttempts = 3;
    document.getElementById("password").disabled = false;
    document.getElementById("timer").innerText = "";
}

function redirectToBlankPage() {
    window.location.href = "main x login.html"; // Change "blank_page.html" to the desired page
}
