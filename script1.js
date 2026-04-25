let form = document.getElementById("taskForm");
let input = document.getElementById("taskInput");
let list = document.getElementById("taskList");

form.addEventListener("submit", function(e){
  e.preventDefault();

  let text=input.value;
  if (text==="") return;
  let li=document.createElement("li");
  let span =document.createElement("span");
  span.textContent= text;
  let completeBtn= document.createElement("button");
  completeBtn.textContent= "✔";
  let deleteBtn= document.createElement("button");
  deleteBtn.textContent ="✖";

  completeBtn.addEventListener("click", function(){
    li.classList.toggle("done");
  });
  deleteBtn.addEventListener("click", function(){
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  list.appendChild(li);
  input.value="";
});