// 4. Consider the following JSON: -
//   Print user details in a list format using javascript / jquery using table tag 

const employees = {
  "employees": [
    {
      "first_name": "Amit",
      "last_name": "Sharma",
      "department": "SEO"
    },
    {
      "first_name": "Vineet",
      "last_name": "Kumar",
      "department": "Accounts"
    },
    {
      "first_name": "Ajay",
      "last_name": "Thakur",
      "department": "QA"
    },
    {
      "first_name": "Chandra",
      "last_name": "Sharma",
      "department": "Designer"
    }
  ]
};

//create table
const table = document.createElement("table");
// create a tr tag 
const headerRow = document.createElement("tr");

// create a th tag 
const firstName = document.createElement("th");
// append data in firstName 
firstName.innerText = "First Name";
// append firstName cell in header row 
headerRow.appendChild(firstName);


const lastName = document.createElement("th");
lastName.innerText = "Last Name";
headerRow.appendChild(lastName);


const department = document.createElement("th");
department.innerText = "Department";
headerRow.appendChild(department);

// append heading row in table 
table.appendChild(headerRow);


// iterating over employee obj 
for (let employee of employees.employees) {

  // create a new row
  const row = document.createElement("tr");
  //create a table data tag
  const cell1 = document.createElement("td");
  //appending value in td
  cell1.innerText = employee.first_name;
  //appending the cell in row
  row.appendChild(cell1);

  const cell2 = document.createElement("td");
  cell2.innerText = employee.last_name;
  row.appendChild(cell2);

  const cell3 = document.createElement("td");
  cell3.innerText = employee.department;
  row.appendChild(cell3);

  //finally upending the row in table
  table.appendChild(row);
}

// appending the table inside the body
document.body.appendChild(table);