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
function search() {
  let filter = inp.value.toUpperCase();

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
