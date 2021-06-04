// from data.js
var tableData = data;

//initial variables
var table_body = d3.select("tbody")
var table_filter = d3.select("#filter-btn");

// function appends a table to web page 
function table_dp(data){

    data.forEach(input_data=>{
        var table_row = table_body.append("tr");
        column= [
            "datetime", 
            "city", 
            "state", 
            "country", 
            "shape", 
            "durationMinutes", 
            "comments"];
        column.forEach(key=>{
            table_row.append("td").text(input_data[key]);
        })
    })
}

// show the entire dataset to the table

table_dp(tableData);

// select the date to filter the table
table_filter.on("click", function(){
    d3.event.preventDefault();
    table_body.selectAll('tr').remove()
    var input_date = d3.select("#datetime").property("value");
    console.log(input_date);
    var filteredData = tableData.filter(input_data=> input_data.datetime === input_date);

    // show the filtered dataset to the table
    table_dp(filteredData);
})

