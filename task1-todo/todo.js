const input = document.getElementById("input");
const list = document.getElementById("ul");


function add() {
    
  if (input.value === "") {
    alert("Enter your list");
  } else {
    
    var li = document.createElement("li");
    li.innerHTML = input.value.trim();
    list.appendChild(li);

    var span= document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  }
  input.value = '';
  
}

list.addEventListener("click", function(event){
    if(event.target.tagName=="LI"){
        console.log(event.target);
        
        event.target.classList.toggle("checked");
        saveData();
        
    }
    else if(event.target.tagName === "SPAN"){
        alert("Do you want to delete the List");
        event.target.parentElement.remove();
        saveData();
    }
})


function saveData(){
    var toDos = [];

    for (var i = 0; i < list.children.length; i++) {
        var toDo = list.children.item(i);

        var toDoInfo = {
            "task": toDo.innerText.trim(),
            "completed": toDo.classList.contains("checked")
        };

        toDos.push(toDoInfo);

    }
console.log(toDos);
    localStorage.setItem("toDos", JSON.stringify(toDos));
}


function loadList() {
    if (localStorage.getItem("toDos") != null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));
        console.log(toDos);

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}
function newToDoItem(task, completed){
    var li = document.createElement("li");
    li.innerHTML = task;
    list.appendChild(li);

    var span= document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
    

loadList();
