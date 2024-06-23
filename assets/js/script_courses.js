let tbl_courses = document.querySelector("#id_tbl tbody");
let courses = [];

function populate_courses() {
    fetch('assets/JsonData/courses.json')
        .then((response) => response.json())
        .then((json) => {
            courses = json;

            tbl_courses.innerHTML = "";
            courses.map((course, index) => {
                let newrow = document.createElement("tr");
                newrow.innerHTML = `<td>${course.name}</td>
                                    <td>${course.credits}</td>
                                    <td>${course.instructor}</td>`;
                tbl_courses.append(newrow);
            });
        });
};
populate_courses();

let search_box = document.getElementById("id_search_course_input");
function search_course() {
    let search_attempt = search_box.value;
    if (search_attempt !== "") {
        setTimeout(() => {
            search_box.value = "";
        }, 1000);

        tbl_courses.innerHTML = "";

        courses.map((course, index) => {
            let _course = course.name;
            if (_course.match(search_box.value)) {
                let newrow = document.createElement("tr");
                newrow.innerHTML = `<td>${course.name}</td>
                                    <td>${course.credits}</td>
                                    <td>${course.instructor}</td>`;
                tbl_courses.append(newrow);

            };

        });

        if (tbl_courses.innerHTML == "") {

            search_box.value = "Item not found.";
            setTimeout(() => {
                search_box.value = "";
            }, 3000);
            populate_courses();

        };

    } else {
        search_box.value = "Write Something!!";
        setTimeout(() => {
            populate_courses();
            search_box.value = "";
        }, 1000);
    };
};