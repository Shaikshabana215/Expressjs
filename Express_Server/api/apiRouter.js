
const express = require("express");
const router = express.Router();

//employees Data

let employees = [
  {
    id: "_abcd",
    first_name: "John",
    last_name: "Wilson",
    email: "john@gmail.com",
    gender: "Male",
    ip_address: "127.23.01",
  },
  {
    id: "_xyz",
    first_name: "Rina",
    last_name: "Wilson",
    email: "rina@gmail.com",
    gender: "female",
    ip_address: "127.00.01",
  },
];

//To get unique Id
let getID = () => {
  return Math.random().toString(36).substring(2, 9);
};
//GET - Employees using router

router.get("/employees", (request, response) => {
  response.json(employees);
});

//POST request

router.post("/employees", (request, response) => {
  let employee = {
    id: getID(),
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    email: request.body.email,
    gender: request.body.gender,
    ip_address: request.body.ip_address,
  };
  employees.push(employee);
  console.log(
    `post request received at server....${new Date().toLocaleTimeString()}`
  );
  response.json({ msg: "POST Request is Success" });
});

//PUT request
router.put("/employees/:id", (request, response) => {
  let empId = request.params.id;
  let updateEmployee = {
    id: empId,
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    email: request.body.email,
    gender: request.body.gender,
    ip_address: request.body.ip_address,
  };
  let existingEmployee = employees.find((employee) => {
    return employee.id === empId;
  });

  employees.splice(employees.indexOf(existingEmployee), 1, updateEmployee);
  console.log(
    `put request received at server....${new Date().toLocaleTimeString()}`
  );
  response.json({ msg: "put Request is Success" });
});

//Delete Request

router.delete('/employees/:id',(request,response)=>{
    let empId = request.params.id;
    employees = employees.filter((employee)=>{
        return employee.id !== empId;
    });
    console.log(
        `Delete request received at server....${new Date().toLocaleTimeString()}`
      );
      response.json({ msg: "Delete Request is Success" });

})

module.exports = router;
