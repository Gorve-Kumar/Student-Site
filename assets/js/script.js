document.getElementById("div_name").innerHTML = `
<span class="span_mart">Student</span><span class="span_com"><i>In</i></span>
`

let users_array = [];

let msg_box = document.getElementById("id-msg-box");

function signin() {

    users_array = JSON.parse(localStorage.getItem("users"));

    let email = document.getElementById("login_email");
    let pswd = document.getElementById("login_pswd");

    if (email.value == "" || pswd.value == "") {

        msg_box.innerHTML = `<div id="id-inside-msg">Fill All The Fields</div>`;

        setTimeout(() => {
            msg_box.innerHTML = "";
        }, 1600);

    } else {

        let flag = false;

        users_array.map((user, index) => {

            if (user.email == email.value && user.pswd == pswd.value) {

                flag = true;

                console.log("User: " + user.name);
                msg_box.innerHTML = `<div id="id-inside-msg">Logging In</div>`;

                setTimeout(() => {
                    window.open(`home.html?user=${user.name}`, target = "_self");
                    msg_box.innerHTML = "";
                }, 1000);

            };

        });

        if (flag === false) {

            msg_box.innerHTML = `<div id="id-inside-msg">No Record Found</div>`;

            setTimeout(() => {
                msg_box.innerHTML = "";
            }, 1600);

        };

        //  ---USING JSON FILE
        // $(document).ready(function () {
        //     $.getJSON("assets/JsonData/users.json", function (data) {
        //         let flag = false;
        //         $.each(data, function (index, person) {
        //             if (person.email == email && person.password == pswd) {
        //                 flag = true;
        //                 window.open("home.html", target = "_self");
        //             };
        //         });        
        //         if (flag === false) {
        //             msg_box.innerHTML = `<div id="id-inside-msg">No Record Found</div>`;
        //             setTimeout(() => { msg_box.innerHTML = ""; }, 1600);
        //         };
        //     });
        // });

    };
};


function signup() {

    let name = document.getElementById("signup_name").value;
    let email = document.getElementById("signup_email").value;
    let pswd = document.getElementById("signup_pswd").value;
    let contact = document.getElementById("signup_contact").value;
    let address = document.getElementById("signup_address").value;

    if (name == "" || email == "" || pswd == "" || contact == "" || address == "") {

        msg_box.innerHTML = `
        <div id="id-inside-msg">Fill All The Fields</div>
        `;

        setTimeout(() => {
            msg_box.innerHTML = "";
        }, 1600);

    } else {

        let entry = {
            name: name,
            email: email,
            pswd: pswd,
            contact: contact,
            address: address,
        };

        // PUSH TO ARRAY:
        console.log(entry);
        users_array.push(entry);
        console.log(users_array);

        // SAVE DATA LOCALLY:
        localStorage.setItem("users", JSON.stringify(users_array));

        // SEND MSG:
        msg_box.innerHTML = `<div id="id-inside-msg">Account Created!</div>`;

        // CLEAR THE FIELDS:
        document.getElementById("signup_name").value = "";
        document.getElementById("signup_email").value = "";
        document.getElementById("signup_pswd").value = "";
        document.getElementById("signup_contact").value = "";
        document.getElementById("signup_address").value = "";

        name = "";
        email = "";
        pswd = "";
        contact = "";
        address = "";

        setTimeout(() => {
            msg_box.innerHTML = "";
        }, 2500);
    };
};