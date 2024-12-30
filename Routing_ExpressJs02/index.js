
let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the ExpressJS Home Page');
})

app.post('/about', (req, res) => {
    res.send('Welcome to the ExpressJS about Page');
})

app.put('/contact', (req, res) => {
    res.send('Welcome to the ExpressJS contact Page');
})

app.delete('/terms', (req, res) => {
    res.send('Welcome to the ExpressJS tearms Page');
})

app.listen(3000, () => {
    console.log('Express server started on port 3000!');
})



// only get method show in Brouser and put , post , delete ,patch method show in postman dextop app



























