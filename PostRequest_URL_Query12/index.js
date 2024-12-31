
let express = require('express');
let app = express();

app.post('/', (req, res) => {
   let firstName = req.query.firstName;
   let lastName = req.query.lastName;

   res.send(firstName + ' ' + lastName);
})
app.listen(4000,function(){
    console.log('Express server listening on port 4000');
});




















