
let express = require('express');
let app = express();

app.get('/', (req, res) => {
    let myJesonArray = [
        {
            Name: 'John Doe',
            age: 25,
            roll:1
        },
        {
            Name: 'Taher',
            age: 28,
            roll:2
        },
        {
            Name: 'Tamanna',
            age: 20,
            roll:3
        },
    ]
    res.json(myJesonArray);
})

app.listen(8080,function () {
    console.log('Express server started on port 8080');
});



























