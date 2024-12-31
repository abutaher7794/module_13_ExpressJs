
let express = require('express');
let app = express();

app.get('/get', (req, res) => {
    res.send('Get Recuest Successfully');
})

app.post('/post', (req, res) => {
    res.send('Post Recuest Successfully');
})
app.listen(3000,function () {
    console.log('Server is running on port 3000');
});

































