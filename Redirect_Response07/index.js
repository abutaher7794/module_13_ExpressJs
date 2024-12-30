
let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.redirect(`http://localhost:7070/india`);
})

app.get('/india', (req, res) => {
    res.send('This is india')
})


app.listen(7070,function(){
    console.log('Express server listening on port 7070')
})













