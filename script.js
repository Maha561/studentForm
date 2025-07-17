
 let nameBox = document.getElementById("name");
 let ageBox = document.getElementById("age");
 let courseBox = document.getElementById("course");
 let emailBox = document.getElementById("email");

 function saveData(event){

    // to stop the form from refreshing when the save button is pressed
    event.preventDefault();

    let table = document.getElementById("studentTable");

    let newRow = table.insertRow();

    newRow.insertCell(0).innerText=nameBox.value;
    newRow.insertCell(1).innerText=ageBox.value;
    //newRow.insertCell(2).innerText=gender;
    newRow.insertCell(2).innerText=courseBox.value;
    newRow.insertCell(3).innerText=emailBox.value;


 }

 
