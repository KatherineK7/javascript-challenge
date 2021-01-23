// from data.js
var tableData = data;

// YOUR CODE HERE!

//select table body
var tbody = d3.select("tbody");


//loop through data, create rows for each object in the array, append each value to a cell.

function buildTable(tableData){
    tableData.forEach(record => {
        var row = tbody.append("tr");
        Object.values(record).forEach(col => {
            row.append("td").text(col);
        });
    })
}

buildTable(tableData);

function filterTable(elem){
        
    var changedElem = d3.event.target;
    var elemName = changedElem.id;
    var elemValue = changedElem.value;

    console.log(elemName);
    console.log(elemValue);
    

    filteredData = tableData.filter(rec => rec[elemName] == elemValue);

    tbody.html('');

    buildTable(filteredData);

}

btn = d3.select("#filter-btn");
datetimefield = d3.select("#datetime");

btn.on("click", filterTable);
datetimefield.on("change", filterTable);

//
d3.selectAll('.filter').on('change', filterTable);

buildTable(tableData);


