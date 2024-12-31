
let express = require('express');
let app = express();

app.post('/', (req,res)=>{
    let name =  req.header('Name')
    let age =  req.header('Age');

    res.end(name + ' ' + age);
})
app.listen(3000,function(){
    console.log('Server started on port 3000');
})









































