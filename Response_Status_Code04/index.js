
// Response status code creat
let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.status(401).send('Unauthorized');
})
app.get('/one', (req, res) => {
    res.status(201).send('Created');
})


app.listen(7070,function(){
    console.log('Express server started on port 7070');
})



























