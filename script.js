//function to add task
let input=document.getElementById("task");
let box=document.getElementById("list");

function addele(){
    if(input.value === ''){
        alert("You must write something!!!");
    }
   else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    box.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = '<i class="fas fa-times"></i>';
    li.appendChild(span);
}
    saveData()
}


//function to update when checked
box.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()}
    }, false);

    //function to save task even when the site refreshes
    function saveData(){
        localStorage.setItem("data", box.innerHTML);
    }

    //function to display saved task
    function displayData(){
        box.innerHTML=localStorage.getItem("data");
    }
    displayData();