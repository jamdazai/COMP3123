/**
 * LAB 3 EXERCISE FOR FULL STACK DEVELOPMENT
 * @author: James Furaque / 101382608
 */

const http = require("http");

//TODO - Use Employee Module here
console.log("Lab 03 -  NodeJs");
const employees = require('./Employee.js')
console.log(employees);

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 5000

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
           
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
        //NOTE: Properly set response headers for JSON and HTML content.
        if (req.url === '/') {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h1>Welcome to the Lab Exercise 03</h1>');
            res.end()
        } 

        //TODO - Display all details for employees in JSON format
        //NOTE: Properly set response headers for JSON and HTML content.
        else if (req.url === '/employee') {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(employees.employees));
            res.end()
        }

        //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
        //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
        //NOTE: Properly set response headers for JSON and HTML content.
        else if (req.url === '/employee/names') {
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.write(JSON.stringify(employees.employeeNames.sort()));
            res.end();
        }

        //TODO - Display Sum of all employees salary in given JSON format 
        //e.g. { "total_salary" : 100 }
        //NOTE: Properly set response headers for JSON and HTML content.
        else if (req.url === '/employee/totalsalary') {       
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({ total_salary: employees.total_salary }));
        }

        else {
            res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
        }
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})