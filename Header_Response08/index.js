
let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.append("Name","Abu Taher")
    res.append("Age","32 Years old")
    res.status(201).end("Hello World");
})
app.listen(7000,function(){
    console.log("Express server listening on port 8080");
});












































