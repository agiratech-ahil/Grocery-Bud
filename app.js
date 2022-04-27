// window.addEventListener("load", () => {
var list = [];
var inp = document.getElementById("tarea");
var todolist = document.getElementById("list");
var btn = document.getElementById("btn");
var form = document.getElementById("new-form");

form.addEventListener("submit", function (e) {
  if (inp.value == "") {
    alert("Please enter a item");
  } else {
    e.preventDefault();
    list.push(inp.value);
    inp.value = "";
    showlist();
  }
});

function showlist() {
  todolist.innerHTML = "";
  list.forEach(function (n, i) {
    todolist.innerHTML +=
      "<li class='content'>" +
      "<a>" +
      n +
      "</a>" +
      "</li>" +
      "<i id ='edit' onclick = 'edit(" +
      i +
      ")'  class='fa-solid fa-pen-to-square'>" +
      "</i>" +
      "<i id='delete' onclick='deleteItem(" +
      i +
      ")' class='fa-solid fa-trash-can'>" +
      "</i>";
  });
}

function edit(i) {
  inp.value = list[i];
  list.splice(i, 1);
}

function deleteItem(i) {
  list.splice(i, 1);
  showlist();
}
function clearli() {
  list = [];
  showlist();
}
function filt() {
  // let input = document.getElementById("idtextbox");
  let filter = inp.value.toUpperCase();
  // let ul = document.getElementById("dplist");
  let li = document.getElementsByClassName("content");
  let edit = document.getElementById("edit");
  let deletei = document.getElementById("delete");

  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    let textValue = a.textContent || a.innerText;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// });

// var text = document.getElementById("tarea");
// var button = document.getElementById("btn");
// var lists = document.querySelector("#list");
// var mainli = document.querySelector("#mainli");
// var dlt = document.querySelector("#delete");

// window.addEventListener("load", () => {
//   const form = document.querySelector("#new-form");
//   const input = document.querySelector("#tarea");
//   const listel = document.querySelector("#tasks");

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const task = input.value;
//     if (!task) {
//       alert("Please enter a task");
//       return;
//     }
//     const taskel = document.createElement("div");
//     taskel.classList.add("task");
//     const taskContent = document.createElement("div");

//     taskContent.classList.add("content");
//     // taskContent.innerText = task;
//     taskel.appendChild(taskContent);

//     const taskinput = document.createElement("input");
//     taskinput.classList.add("tasktext");
//     taskinput.type = "text";
//     taskinput.value = task;
//     taskinput.setAttribute("readonly", "readonly");
//     taskContent.appendChild(taskinput);

//     const taskactions = document.createElement("div");
//     taskactions.classList.add("actions");

//     const taskedit = document.createElement("button");
//     taskedit.classList.add("edit");
//     taskedit.innerHTML = "<i class='fa-solid fa-pen-to-square'>" + "</i>";

//     const taskdelete = document.createsElement("button");
//     taskdelete.classList.add("delete");
//     taskdelete.innerHTML =
//       "<i id='delete'  class='fa-solid fa-trash-can'>" + "</i>";

//     taskactions.appendChild(taskedit);
//     taskactions.appendChild(taskdelete);

//     taskel.appendChild(taskactions);

//     listel.appendChild(taskel);
//     input.value = "";

//     taskedit.addEventListener("click", () => {
//       if (taskedit.innerText.toLowerCase() == "edit") {
//         taskinput.removeAttribute("readonly");
//         taskinput.focus();
//         taskedit.innerText = "Save";
//       } else {
//         taskinput.setAttribute("readonly", "readonly");

//         taskedit.innerHTML = "<i class='fa-solid fa-pen-to-square'>" + "</i>";
//         taskedit.innerText = "Edit";
//         // taskedit.innerHTML = "<i class='fa-solid fa-pen-to-square'>" + "</i>";
//       }
//     });
//     taskdelete.addEventListener("click", () => {
//       listel.removeChild(taskel);
//     });
//   });
// });

// // function display(i) {
// //   lists.innerHTML +=
// //     "<li id='mainli'>" +
// //     text.value +)
// //     "</li>" +
// //     "<i id='edit' class='fa-solid fa-pen-to-square'>" +
// //     "</i>" +
// //     "<i id='delete' onclick='deleteli(i)' class='fa-solid fa-trash-can'>" +
// //     "</i>";
// //   console.log(lists);
// // }

// // function deleteli(i) {
// //   var tasks = document.querySelectorAll("#delete");

// //   for (i = 0; i < tasks.length; i++) {
// //     tasks[i].onclick = function () {
// //       lists.parentNode.removeChild(lists);
// //     };
// //   }
// // }var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
// function clearli() {
//   document.getElementById("tasks").innerHTML = "";
// }
