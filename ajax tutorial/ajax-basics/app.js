//Text File Data
let textButton = document.getElementById("text-btn");
textButton.addEventListener("click", () => {
  //create an AJAX Request
  let xhr = new XMLHttpRequest();
  // Prepare the Request
  xhr.open("GET", "./data/message.txt", true);
  // send the Request

  xhr.send();
  //Process the Request

  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = xhr.responseText;
      displayData(data);
    }
  };
});

//display textData
let displayData = (data) => {
  let htmlTemplate = `<h3>${data}</h3>`;
  document.querySelector("#text-card").innerHTML = htmlTemplate;
};

//JSON DATA

let jsonbtn = document.getElementById("json-btn");

jsonbtn.addEventListener("click", () => {
  //AJAX

  let xhr = new XMLHttpRequest();
  //create

  xhr.open("GET", "./data/message.json", true);

  //send

  xhr.send();

  //process

  xhr.onload = function () {
    if (xhr.status === 200) {
      let data = xhr.responseText;
      let json = JSON.parse(data);
      displaydata(json);
    }
  };
});

//display data

let displaydata = (json) => {
  let htmlTemplate = "";
  for (json of json) {
    htmlTemplate += `<ul class="list-group">
<li class="list-group-item">ID: ${json.id}</li>
<li class="list-group-item">NAME: ${json.name}</li>
<li class="list-group-item">COLOR: ${json.color}</li>
<li class="list-group-item">PRICE: ${json.price}</li>
</ul>`;
  }

  let jsonCard = document.getElementById("json-card");
  jsonCard.innerHTML = htmlTemplate;
};

//API DATA

let apiBtn = document.getElementById("api-btn");
apiBtn.addEventListener("click", () => {
  //AJAX
  let xhr = new XMLHttpRequest();

  //create
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  //send
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = xhr.responseText;
      let api = JSON.parse(data);
      displayApi(api);
    }
  };
});

//display Data

let displayApi = (api) => {
  let htmlTemplate = "";
  for(let i of api){
    htmlTemplate += 
    `<ul class="list-group mt-1">
    <li class="list-group-item">id: ${i.id}</li>
    <li class="list-group-item">name: ${i.name}</li>
    <li class="list-group-item">username: ${i.username}</li>
    <li class="list-group-item">email: ${i.email}</li>
    <li class="list-group-item">street: ${i.address.street}</li>
    <li class="list-group-item">suite: ${i.address.suite}</li>
    <li class="list-group-item">city: ${i.address.city}</li>
    <li class="list-group-item">zipcode: ${i.address.zipcode}</li>

    </ul>`;
  };
  let apiCard = document.getElementById("api-card");
  apiCard.innerHTML = htmlTemplate;
};
