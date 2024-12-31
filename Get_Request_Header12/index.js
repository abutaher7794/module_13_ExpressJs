
let express = require('express');
let app = express();

app.get('/', (req, res) => {
    let firstName =  req.header('firstName')
    let lastName =  req.header('lastName')

    res.end(firstName + ' ' + lastName)
})

app.listen(4040,function(){
    console.log('Express server started with 4040');

})































