let tbl_calA = document.querySelector("#planA tbody");
let tbl_calB = document.querySelector("#planB tbody");

let newrow1 = document.createElement("tr");
newrow1.innerHTML = `<td>${"Registeration"}</td>
                    <td>${Date("10")}</td>`;
tbl_calA.append(newrow1);

let newrow2 = document.createElement("tr");
newrow2.innerHTML = `<td>${"Classes"}</td>
                    <td>${"30th October, 2020"}</td>`;
tbl_calA.append(newrow2);

let newrow3 = document.createElement("tr");
newrow3.innerHTML = `<td>${"Examination"}</td>
                    <td>${"17th December, 2020"}</td>`;
tbl_calA.append(newrow3);
