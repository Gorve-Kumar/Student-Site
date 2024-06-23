const fpswd_email = document.getElementById("fpswd_email");
const fpswd_send_code = document.getElementById("fpswd_send_code");
const fpswd_code = document.getElementById("fpswd_code");
const fpswd_submit_code = document.getElementById("fpswd_submit_code");

function disabled_submit_options() {

    fpswd_code.disabled = true;
    fpswd_submit_code.disabled = true;

};

disabled_submit_options();

let code;
function send_code() {

    if (fpswd_email.value == "") {

        msg_box.innerHTML = `<div id="id-inside-msg">Your Email Address?</div>`;

        setTimeout(() => { msg_box.innerHTML = ""; }, 1600);

    } else {

        fpswd_email.disabled = true;
        fpswd_send_code.disabled = true;
        fpswd_code.disabled = false;
        fpswd_submit_code.disabled = false;

        code = Math.floor(Math.random() * 9000 + 1000);
        console.log(code);

        sendEmail(fpswd_email.value, code);
    }

}

function isNumber(evt) {

    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;

}

function submit_code() {
    if (fpswd_code.value == "") {

        msg_box.innerHTML = `<div id="id-inside-msg">Enter Code?</div>`;

        setTimeout(() => { msg_box.innerHTML = ""; }, 1600);

    } else {

        if (fpswd_code.value == code) {


            msg_box.innerHTML = `<div id="id-inside-msg">Correct Code!!</div>`;

            setTimeout(() => { msg_box.innerHTML = ""; }, 2000);

        } else {

            msg_box.innerHTML = `<div id="id-inside-msg">Incorrect Code!!</div>`;

            setTimeout(() => { msg_box.innerHTML = ""; }, 2000);

        }
    }
}

function sendEmail(email_address, code) {

    Email.send({
        Host: "smtp.gmail.com",
        Username: "gorve.kumar01@gmail.com",
        Password: "mypswd",
        To: email_address,
        From: "gorve.kumar01@gmail.com",
        Subject: "Sending Email using javascript",
        Body: "Login Using" + code,

    })
        .then(function (message) {
            alert("mail sent successfully")
        });
}