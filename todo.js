
    let data = new Object();
let title = document.getElementById('title');
let description = document.getElementById('description');
let status_1 = document.getElementById('status');
let table = document.getElementById('table');
let change_index= null; 

function submit() {
    if (change_index === null) {
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    
    let currentIndex = table.rows.length - 1;

    data[`title${currentIndex}`] = title.value;
    data[`description${currentIndex}`] = description.value;
    data[`status${currentIndex}`] = status_1.value;

    cell1.innerHTML = title.value;
    cell2.innerHTML = description.value;    
    cell3.innerHTML = status_1.value;
    cell4.innerHTML = `<button id='edit${currentIndex}' onclick="edit(${currentIndex})">Edit</button> <button id='delete${currentIndex}' onclick="del(${currentIndex})">Delete</button>`;

    if(data[`status${currentIndex}`] === "completed") {
        console.log("completed");
    document.getElementById(`edit${currentIndex}`).disabled = true;
    document.getElementById(`delete${currentIndex}`).disabled = true;
    }

    console.log(data);

} else {
    
    data[`title${change_index}`] = title.value;
    data[`description${change_index}`] = description.value;
    data[`status${change_index}`] = status_1.value;

    table.rows[change_index].cells[0].innerHTML = title.value;
    table.rows[change_index].cells[1].innerHTML = description.value;
    table.rows[change_index].cells[2].innerHTML = status_1.value;
    
    if(data[`status${change_index}`] === "completed") {
        console.log("completed");
    document.getElementById(`edit${change_index}`).disabled = true;
    document.getElementById(`delete${change_index}`).disabled = true;
    }

    change_index= null;
}
clear();
console.log(data);
}

let edit = (index) => {
    change_index= index;
    title.value = data[`title${index}`];
    description.value = data[`description${index}`];
    status_1.value = data[`status${index}`];

    console.log(data);       
}

let del = (index) => {
    confirm("Are you sure you want to delete this row?");{
    delete data[`title${index}`];
    delete data[`description${index}`];
    delete data[`status${index}`];
    
    setTimeout(() => {
    alert("data deleted successfully");
    }, 100);
    table.deleteRow(index);
    console.log(data);
}}

function clear() {
    title.value = "";
    description.value = "";
    status_1.value = "";
}
