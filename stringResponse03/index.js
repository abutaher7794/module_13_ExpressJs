let express = require('express');
let app = express();


// simple String Response
// res.send() body nerdes kore
// res.end()  responser ending point niddes kore
app.get('/one', (req, res) => {
    res.send(`Hello World! This is Home Page`);
})

app.post('/two', (req, res) => {
    res.end(`Hello World! This is about Page`);
})
app.listen(3000,function () {
    console.log('Express server started on port 3000!');
});















