

let express = require('express');
let app = express();

app.get('/', function (req, res) {
    res.download("./img/1st.jpg")
})

app.listen(3000, function () {
    console.log("Express server listening on port 3000");
});





















