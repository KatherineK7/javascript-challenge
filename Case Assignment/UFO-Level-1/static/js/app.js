// from data.js
var tableData = data;

// YOUR CODE HERE!

//select table body
var tbody = d3.select("tbody");


//loop through data, create rows for each object in the array, append each value to a cell.
tableData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
        console.log(value);
        row.append("td").text(value);
    });
});

//loop through table and hide rows where input value does not exist

function myFunction() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datetime");
    filter = input.value;
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        };
      }; 
    };
  };


