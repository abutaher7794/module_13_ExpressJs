
let express = require('express');

let app = express();
app.get('/one', (req, res) => {
    res.cookie('Name','Taher')
    res.cookie('age','32')
    res.end('Cooki set successful')
})
app.get('/two', (req, res) => {
    res.clearCookie('name')
    res.clearCookie('age')

    res.end('Cooki Clear successful')
})



app.listen(3001,function(){
    console.log('Server started on port 3000');
});
























