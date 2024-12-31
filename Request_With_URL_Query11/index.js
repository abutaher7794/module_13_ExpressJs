
let express = require('express');
let app = express();

app.get('/', (req, res) => {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.end(firstName + ' ' + lastName);
})

app.listen(6000,function () {
    console.log('Express server listening on port 6000,');
})











































