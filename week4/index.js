const express = require('express');
const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
    res.send('<h1> Hello World! </h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1> About Us </h1>');
});

app.get('/contact', (req, res) => {
    res.send('<h1> Contact Us </h1>');
});

app.get('/hello', (req, res) => {
    res.status(200)
    res.send('<h1> GET - Hello World! </h1>');
});

app.post('/hello', (req, res) => {
    res.status(201)
    res.send('<h1> POST - Hello World! </h1>');
});

// app.all('/hello', (req, res) => {
//     res.status(200)
//     res.send('<h1> All - Hello World! </h1>');
// });

app.put('/hello', (req, res) => {
    res.status(203)
    res.send('<h1> PUT - Hello World! </h1>');
});

app.delete('/hello', (req, res) => {
    res.status(204)
    res.send('<h1> DELETE - Hello World! </h1>');
});

app.get('/student', (req, res) => {
    res.status(200)
    const student = {
        name: 'John Doe',
        age: 25,
    }
    res.json(student);
});

// QUERY STRING PARAMETER
//http://localhost:5000/student/123
//http://localhost:5000/student?fnm=pritesh&lnm=patel

app.get('/employee', (req, res) => {
    console.log(req.query);
    // res.send(req.query);
    // const fnm = req.query.fnm;
    // const lnm = req.query.lnm;
    // res.send(`First Name: ${fnm}, Last Name: ${lnm}`);
})

//http://localhost:5000/employee/pritesh/patel/toronto
app.get('/employee/:fnm/:lnm/:city', (req, res) => {
    console.log(req.params);
    const fnm = req.query.fnm;
    const lnm = req.query.lnm;
    const city = req.query.city;
    res.send(`First Name: ${fnm}, Last Name: ${lnm}, City: ${city}`);

})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
