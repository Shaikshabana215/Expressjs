let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementsByClassName("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hello");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post is cannot be empty";
  } else {
    msg.innerHTML = "";
    console.log("success");
    acceptData();
  }
};

let data = {};
let acceptData = () => {
  data["text"] = input.value;
  console.log(data.text);
 createPost();
};

let createPost = () => {
  posts.innerHTML = data.text;
//    `
//   <div class="posts d-flex align-center justify-content-between" style="width: 300px">
//             <p>${data.text}</p>
//             <span class="options d-flex gap-3 mt-1">
//                 <i class="fa-regular fa-pen-to-square"></i>
//                 <i class="fa-sharp fa-solid fa-trash"></i>
//             </span>
//         </div>
//   `
  input.value=''
};
