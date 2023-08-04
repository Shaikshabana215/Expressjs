import { apiHttp } from "./api/apihttp.js";
const serverURL = "http://127.0.0.1:3000/api";

//GET BUTTON

let getbtn = document.getElementById("get-btn");

getbtn.addEventListener("click", () => {
  fetchEmployees();
});

let fetchEmployees = () => {
  let http = new apiHttp();
  let url = `${serverURL}/employees`;
  http.get(url, (err, employees) => {
    if (err) throw err;
    let tableRows = "";
    for (let employee of employees) {
      tableRows += ` <tr>

      <td>${employee.id}</td>

      <td>${employee.first_name}</td>

      <td>${employee.last_name}</td>

      <td>${employee.email}</td>

      <td>${employee.gender}</td>

      <td>${employee.ip_address}</td>

      </tr>
      `;
    }

    document.querySelector("#table-body").innerHTML = tableRows;
  });
};

let postbtn = document.getElementById("post-btn");
postbtn.addEventListener("click", () => {
  let url = `${serverURL}/employees`;
  let employee = {
    first_name: "tajan",
    last_name: "p",
    email: "tajan@gmail.com",
    gender: "male",
    ip_address: "120.2.3",
  };

  let http = new apiHttp();
  http.post(url, employee, (data) => {
    alert(JSON.stringify(data));
    fetchEmployees();
  });
});

let putbtn = document.getElementById("put-btn");
putbtn.addEventListener("click", () => {
  let empID = `_abcd`;
  let employee = {
    id: empID,
    first_name: "John",
    last_name: "Paris",
    email: "john_paris@gmail.com",
    gender: "Male",
    ip_address: "125.2.0",
  };
  let url = `${serverURL}/employees/${empID}`;
  let http = new apiHttp();
  http.put(url, employee, (data) => {
    alert(JSON.stringify(data));
    fetchEmployees();
  });
});

let deletebtn = document.getElementById("delete-btn");
deletebtn.addEventListener("click", () => {
  let empId = `_xyz`
  let url = `${serverURL}/employees/${empId}`;
  let http = new apiHttp();
  http.del(url,()=>{
    alert(JSON.stringify(data));
    fetchEmployees();
  });
});
