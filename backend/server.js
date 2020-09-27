// by oran collins
// github.com/wisehackermonkey
// oranbusiness@gmail.com
// 20200925

let express = require('express');
let app = express();
let path = require("path")
let PORT = process.env.PORT || 3000
// app.use(express.static('public'));
// app.use(express.static('images'));
app.use('/', express.static(path.join(__dirname, '../website/')))
console.log(`Listeting on port:${PORT} http://localhost:${PORT} `)
app.listen(PORT);