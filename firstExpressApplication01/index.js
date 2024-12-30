
let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the ExpressJS');
})

app.listen(8080,function(){
    console.log('Express server listening on 8080');
});





























