//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}
//initialize the project
var checkedRows = findNoOfRowsSelected();
enableSubmitButton();
setupDeleteAndEditColumns();

//Function to find the total number of rows that are selected
function findNoOfRowsSelected() {
  var checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
  if (checkedBoxes)
    return checkedBoxes.length;
  return 0;
}


Title.prototype.getName = function () {
  return (this.mytitle);
}

var socialMedia = {
  facebook: 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

var rowCounter = findTotalRows();

//Find total number of rows present in the table
function findTotalRows() {
  const trs = document.getElementsByClassName("dropDownTextArea");
  return trs.length;
}

//Adding a new student
function addNewStudent() {
  try {
    let table = document.getElementById("myTable");
    let tr = table.insertRow();
    createRow(tr);
    let tr1 = table.insertRow();
    tr1.classList.add("dropDownTextArea");
    createRowDetails(tr1);
    alert("Student added successfully");
  } catch (error) {
    alert("Something went wrong while adding a new student");
  }
}

//Adding a new row to table with student info
function createRow(tabrow) {
  try {
    let cellCounter = 0;
    let td = tabrow.insertCell(cellCounter);
    let tempInputTag = document.createElement("INPUT");
    tempInputTag.setAttribute("type", "checkbox");
    tempInputTag.onclick = function () {
      selectRow(tempInputTag);
    }
    td.appendChild(tempInputTag);
    td.appendChild(document.createElement("br"));
    td.appendChild(document.createElement("br"));
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", "down.png");
    imgTag.setAttribute("width", "25px");
    imgTag.onclick = function () {
      displayDescription(imgTag);
    }
    td.appendChild(imgTag);
    td = tabrow.insertCell(++cellCounter);
    td.appendChild(document.createTextNode("Student " + ++rowCounter));
    td = tabrow.insertCell(++cellCounter);
    td.appendChild(document.createTextNode("Teacher " + rowCounter));
    td = tabrow.insertCell(++cellCounter);
    td.appendChild(document.createTextNode("Approved"));
    td = tabrow.insertCell(++cellCounter);
    td.appendChild(document.createTextNode("Fall"));
    td = tabrow.insertCell(++cellCounter);
    td.appendChild(document.createTextNode("TA"));
    td = tabrow.insertCell(++cellCounter);
    td.appendChild(document.createTextNode(Math.floor(Math.random() * 90000) + 10000));
    td = tabrow.insertCell(++cellCounter);
    td.appendChild(document.createTextNode("100%"));
    td = tabrow.insertCell(++cellCounter);
    var deleteButton = document.createElement("button");
    deleteButton.onclick = function () {
      deleteRow(deleteButton);
    }
    deleteButton.innerHTML = "Delete";
    td.classList.add("conditionalColumn");
    if (!checkedRows)
      td.style.display = "none";
    deleteButton.style.display = "none";
    td.appendChild(deleteButton);
    td = tabrow.insertCell(++cellCounter);
    var editButton = document.createElement("button");
    editButton.onclick = function () {
      editRow(editButton);
    }
    editButton.innerHTML = "Edit";
    td.classList.add("conditionalColumn");
    editButton.style.display = "none";
    if (!checkedRows)
      td.style.display = "none";
    td.appendChild(editButton);
  } catch (error) {
    throw error;
  }
}

//Adding new Student details to description row
function createRowDetails(tabrow) {
  try {
    let cellCounter = 0;
    let td = tabrow.insertCell(cellCounter);
    td.colSpan = "8";
    td.innerHTML = "Advisor:  <br> Award Details: Summer - 1-2014(TA) <br> Budget Number: " + (Math.floor(Math.random() * 90000) + 10000) +
      "<br> Tuition Number: " + (Math.floor(Math.random() * 90000) + 10000) + "<br> Comments: None <br> Award Status: Given <br>";
  } catch (error) {
    throw error;
  }
}

//Display popup on click of edit
function editRow() {
  alert("Edit the details");
}

//Display popup on click of submit
function submitBtn() {
  alert("Submit Button clicked");
}


//Event handler for clicking on checkbox 
function selectRow(e) {
  var event1 = e || window.event;
  while (event1 && event1.nodeName !== "TR") {
    event1 = event1.parentNode;
  }
  if (event1) {
    if (e.checked) {
      ++checkedRows;
      event1.style.backgroundColor = "yellow";
      let lasttd = event1.lastElementChild;
      let lastButOne = event1.cells[event1.cells.length - 2];
      lasttd.firstElementChild.style.display = "block";
      lastButOne.firstElementChild.style.display = "block";
    } else {
      --checkedRows;
      event1.style.backgroundColor = "white";
      let lasttd = event1.lastElementChild;
      let lastButOne = event1.cells[event1.cells.length - 2];
      lasttd.firstElementChild.style.display = "none";
      lastButOne.firstElementChild.style.display = "none";
    }
    enableSubmitButton()
  }
}

//Handling enabling and disabling of submit button 
function enableSubmitButton() {
  let table = document.getElementById("myTable");
  let firstRow = table.rows[0];
  var elements = document.getElementsByClassName("conditionalColumn");
  if (checkedRows) {
    document.getElementById("button").disabled = false;
    document.getElementById("button").classList.add("activeButton");
    document.getElementById("button").classList.remove("disabledButton");
    Array.prototype.forEach.call(elements, function (element) {
      element.style.display = "table-cell";
    });
  } else {
    document.getElementById("button").disabled = true;
    document.getElementById("button").classList.remove("activeButton");
    document.getElementById("button").classList.add("disabledButton");
    Array.prototype.forEach.call(elements, function (element) {
      element.style.display = "none";
    });
  }
}

//Displaying delete and edit button initially when page loads
function setupDeleteAndEditColumns() {
  var checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
  checkedBoxes.forEach(element => {
    let selectRow = element;
    while (selectRow && selectRow.nodeName !== "TR") {
      selectRow = selectRow.parentNode;
    }
    if (selectRow) {
      let deleteColumn = selectRow.cells[selectRow.cells.length - 1];
      let editColumn = selectRow.cells[selectRow.cells.length - 2];
      deleteColumn.firstElementChild.style.display = "block";
      editColumn.firstElementChild.style.display = "block";
    }
  });
}

//Event handler for delete functionlaity(Delete row)
function deleteRow(e) {
  try {
    --checkedRows;
    var event1 = e || window.event;
    while (event1 && event1.nodeName !== "TR") {
      event1 = event1.parentNode;
    }
    if (event1.nextElementSibling && event1.nextElementSibling.nodeName.localeCompare("tr") && event1.nextElementSibling.classList.length > 0 && event1.nextElementSibling.classList[0].includes("dropDownTextArea")) {
      event1.nextElementSibling.remove();
    }
    event1.remove();
    let allTableRows = document.querySelectorAll('tr');
    if (allTableRows.length === 1) {
      rowCounter = 0;
    }
    alert("Record deleted successfully");
  } catch (error) {
    alert("Unable to delete record");
  }
  enableSubmitButton();
}

//Handling toggling of displaying student description
function displayDescription(e) {
  var event1 = e || window.event;
  while (event1 && event1.nodeName !== "TR") {
    event1 = event1.parentNode;
  }
  if (event1.nextElementSibling && event1.nextElementSibling.nodeName.localeCompare("tr") && event1.nextElementSibling.classList.length === 2 && event1.nextElementSibling.classList[1].includes("showTextArea")) {
    event1.nextElementSibling.classList.remove("showTextArea");
  } else if (event1.nextElementSibling && event1.nextElementSibling.nodeName.localeCompare("tr") && event1.nextElementSibling.classList.length === 1 && event1.nextElementSibling.classList[0].includes("dropDownTextArea")) {
    event1.nextElementSibling.classList.add("showTextArea");
  }
}