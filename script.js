let input = document.querySelector("input");
let items = document.getElementById("items");

function addtask() {
  if (input.value == "") {
    alert("Enter something to add");
  } else {
    let li = document.createElement("li");
    li.textContent = input.value;
    items.appendChild(li);
    let dlt = document.createElement("button");
    dlt.textContent = "Delete";
    li.appendChild(dlt);
    dlt.setAttribute("id","dlt");
  }

  input.value = "";
  saveData();
}

input.addEventListener("keyup",(e)=>{
if(e.key === "Enter"){
  addtask()
}
})

if(Event.key === "Enter"){
  addtask()
}

items.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.id == "dlt") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", items.innerHTML);
}

function showData() {
  items.innerHTML = localStorage.getItem("data");
}

showData();

