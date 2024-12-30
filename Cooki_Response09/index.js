
let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.cookie('Name','AbuTaher')
    res.cookie('roll','4')
    res.cookie('class','eight')
    res.end("Cookis Set Successful")
})
app.listen(3000,function(){
    console.log("Server started on port 3000");
});
























