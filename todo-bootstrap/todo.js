const add = document.getElementById("addToDo");
const input = document.getElementById("inputField");
const toDoContainer = document.getElementById("toDoContainer");
const list = document.getElementsByClassName("list");

add.addEventListener("click", addItem);

function addItem(e) {
  if (input.value == "") {
    alert("Enter the list of item in todo");
  } else {
    const item_value = input.value;
    saveLocalData(item_value, (completed = false), (id = null));
  }
  input.value = "";
}

function displayAddItem(item_value, completed = false, id = null) {
  console.log(id);
  const item = document.createElement("div");
  item.classList.add("item", "d-flex", "justify-content-between");

  const item_content = document.createElement("div");
  item_content.classList.add("content", "p-2", "mt-2");
  item.appendChild(item_content);

  const input_item = document.createElement("input");
  input_item.classList.add("text");
  input_item.type = "text";
  input_item.label = "checklist";
  input_item.value = item_value;
  input_item.innerText = input_item.value;
  input_item.setAttribute("readonly", "readonly");

  const input_id_item = document.createElement("input");
  input_id_item.classList.add("text");
  input_id_item.type = "text";
  input_id_item.label = "id";
  input_id_item.value = id;
  input_id_item.setAttribute("hidden", "hidden");
  item_content.appendChild(input_id_item);
  var completedStatus = completed;

  input_item.addEventListener("dblclick", function () {
    input_item.style.textDecoration = "line-through";
    input_item.style.color = "red";
    completedStatus = "true";
    saveLocalData(input_item.value, true, input_id_item.value);
  });
  input_item.addEventListener("click", function () {
    input_item.style.textDecoration = "none";
    input_item.style.color = "black";
    completedStatus = "false";
    saveLocalData(input_item.value, false, input_id_item.value);
  });

  item_content.appendChild(input_item);

  const item_action = document.createElement("div");
  item_action.classList.add("actions", "p-2");
  //edit button
  const edit_item = document.createElement("button");
  edit_item.classList.add("edit", "btn", "btn-success", "mr-2");
  edit_item.type = "button";
  edit_item.innerText = "edit";
  edit_item.addEventListener("click", () => {
    if (edit_item.innerText.toLowerCase() == "edit") {
      edit_item.innerText = "save";
      input_item.removeAttribute("readonly");
      input_item.focus();
    } else {
      console.log("save", input_item.value);
      saveLocalData(input_item.value, completedStatus, input_id_item.value);

      edit_item.innerText = "edit";
      input_item.setAttribute("readonly", "readonly");
    }
  });
  //delete button
  const delete_item = document.createElement("button");
  delete_item.classList.add("delete", "btn", "btn-danger");

  delete_item.type = "button";
  delete_item.innerText = "Delete";

  delete_item.addEventListener("click", (e) => {
    toDoContainer.removeChild(item);
    onRemove(input_id_item.value);
  });

  item_action.appendChild(edit_item);
  item_action.appendChild(delete_item);

  item.appendChild(item_action);

  toDoContainer.appendChild(item);
}
function saveLocalData(input, completed = false, id = null) {
  const localData = localStorage.getItem("data") || "[]";
  const localParseData = JSON.parse(localData);

  console.log(input, completed, id);

  
  if (id) {
     localParseData.map((element) => {
      if (element.id == id) {
        element.completed = completed;
        element.input = input;
      }
    
      
    });
    // for (let i = 0; i < localParseData.length; i++) {

    // }
  } else {
    const todo = {
      id: localParseData.length + 1,
      input,
      completed,
    };
    localParseData.push(todo);
    displayAddItem(input, completed, todo.id);
  }

  localStorage.setItem("data", JSON.stringify(localParseData));
  console.log(localParseData);
}

function getTodoList() {
  // Step: 1 Get LocalStorage Data

  const localData = localStorage.getItem("data") || "[]"; // String

  // Step: 2 Parse locaData string to JSON

  const data = JSON.parse(localData); // Object/Array

  // Step 3 Check data has todo list or not

  if (data.length > 0) {
    // Step 4 Get the todo container element

    const todoContainer = document.getElementById("todoContainer");

    // Step 5 Create the no.of todo elements by data
      
    //  for (let i = 0; i < data.length; i++) {
    //   const item = document.createElement("div");
    //   item.classList.add("item", "d-flex", "justify-content-between");

    //   const item_content = document.createElement("div");
    //   item_content.classList.add("content", "p-2", "mt-2");
    //   item.appendChild(item_content);

    //   const input_item = document.createElement("input");
    //   input_item.setAttribute("type", "text");
    //   input_item.classList.add("text");
    //   input_item.value = data[i].input;
    //   // input_item.innerText = data[i].input;
    //   input_item.setAttribute("readonly", "readonly");

    //   const input_id_item = document.createElement("input");
    //   input_id_item.classList.add("text");
    //   input_id_item.type = "text";
    //   input_id_item.label = "id";
    //   input_id_item.value = data[i].id;
    //   input_id_item.setAttribute("hidden", "hidden");
    //   item_content.appendChild(input_id_item);

    //   input_item.addEventListener("dblclick", function () {
    //     input_item.style.textDecoration = "line-through";
    //     input_item.style.color = "red";
    //     data[i].completed = "true";
    //     saveLocalData(input_item.value, true, input_id_item.value);
    //   });
    //   input_item.addEventListener("click", function () {
    //     input_item.style.textDecoration = "none";
    //     input_item.style.color = "black";
    //     data[i].completed = "false";
    //     saveLocalData(input_item.value, false, input_id_item.value);
    //   });

    //   item_content.appendChild(input_item);

    //   const item_action = document.createElement("div");
    //   item_action.classList.add("actions", "p-2");

    //   //edit button
    //   const edit_item = document.createElement("button");
    //   edit_item.classList.add("edit", "btn", "btn-success", "mr-2");
    //   edit_item.setAttribute("type", "button");
    //   edit_item.innerText = "edit";
    //   edit_item.addEventListener("click", () => {
    //     if (edit_item.innerText.toLowerCase() == "edit") {
    //       edit_item.innerText = "save";
    //       input_item.removeAttribute("readonly");
    //       input_item.focus();
    //     } else {
          
    //       saveLocalData(input_item.value, data[i].completed, input_id_item.value);
          
    //       edit_item.innerText = "Edit";
    //       input_item.setAttribute("readonly", "readonly");
    //     }
    //   });
    //   //delete button
    //   const delete_item = document.createElement("button");
    //   delete_item.classList.add("btn", "btn-danger");
    //   delete_item.setAttribute("id", "delete");
    //   delete_item.setAttribute("type", "button");
    //   delete_item.innerText = "Delete";

    //   delete_item.addEventListener("click", (e) => {
    //     toDoContainer.removeChild(item);
    //     onRemove(data[i].id);
    //   });

    //   item_action.appendChild(edit_item);
    //   item_action.appendChild(delete_item);

    //   item.appendChild(item_action);

    //   toDoContainer.appendChild(item);
    // }
    data.map((element)=>{
      const item = document.createElement("div");
        item.classList.add("item", "d-flex", "justify-content-between");
  
        const item_content = document.createElement("div");
        item_content.classList.add("content", "p-2", "mt-2");
        item.appendChild(item_content);
  
        const input_item = document.createElement("input");
        input_item.setAttribute("type", "text");
        input_item.classList.add("text");
        input_item.value = element.input;
        // input_item.innerText = data[i].input;
        input_item.setAttribute("readonly", "readonly");
  
        const input_id_item = document.createElement("input");
        input_id_item.classList.add("text");
        input_id_item.type = "text";
        input_id_item.label = "id";
        input_id_item.value = element.id;
        input_id_item.setAttribute("hidden", "hidden");
        item_content.appendChild(input_id_item);
  
        input_item.addEventListener("dblclick", function () {
          input_item.style.textDecoration = "line-through";
          input_item.style.color = "red";
          data[i].completed = "true";
          saveLocalData(input_item.value, true, input_id_item.value);
        });
        input_item.addEventListener("click", function () {
          input_item.style.textDecoration = "none";
          input_item.style.color = "black";
          data[i].completed = "false";
          saveLocalData(input_item.value, false, input_id_item.value);
        });
  
        item_content.appendChild(input_item);
  
        const item_action = document.createElement("div");
        item_action.classList.add("actions", "p-2");
  
        //edit button
        const edit_item = document.createElement("button");
        edit_item.classList.add("edit", "btn", "btn-success", "mr-2");
        edit_item.setAttribute("type", "button");
        edit_item.innerText = "edit";
        edit_item.addEventListener("click", () => {
          if (edit_item.innerText.toLowerCase() == "edit") {
            edit_item.innerText = "save";
            input_item.removeAttribute("readonly");
            input_item.focus();
          } else {
            
            saveLocalData(input_item.value, element.completed, input_id_item.value);
            
            edit_item.innerText = "Edit";
            input_item.setAttribute("readonly", "readonly");
          }
        });
        //delete button
        const delete_item = document.createElement("button");
        delete_item.classList.add("btn", "btn-danger");
        delete_item.setAttribute("id", "delete");
        delete_item.setAttribute("type", "button");
        delete_item.innerText = "Delete";
  
        delete_item.addEventListener("click", (e) => {
          toDoContainer.removeChild(item);
          onRemove(data[i].id);
        });
  
        item_action.appendChild(edit_item);
        item_action.appendChild(delete_item);
  
        item.appendChild(item_action);
  
        toDoContainer.appendChild(item);
    })
  }
}

getTodoList();

//deleteData.splice(index, 1);

//   for (let i = 0; i < deleteData.length; i++) {}
// });
//  deleteData.from(deleteTasks).forEach((element, index) => {
//     element.addEventListener("click", (e) => {
//       e.stopPropagation();
//       //Delete from local storage and remove div
//       let parent = element.parentElement;
//       removeTask(parent.id);
//       console.log(parent.id)
//       parent.remove();
//       count -= 1;

//     });
//   });

// const deleteTasks = document.getElementById("delete");
const onRemove = (id) => {
  let deleteLocalData = localStorage.getItem("data");
  let newList = JSON.parse(deleteLocalData);
  let index = newList.findIndex((data) => data.id == id);
  newList.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(newList));
  console.log(newList);
};
