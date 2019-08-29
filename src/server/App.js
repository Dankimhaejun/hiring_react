const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

var corsOptions = {
	origin: 'http://localhost:3000', // 허용되는 Origin
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

let dbconfig = require(__dirname+'/../server/config/db-config.json');
let connection = mysql.createConnection(dbconfig);

const app = express();
const port = 5000;

app.use('/', express.static(__dirname + "/src/App.js"));
app.options('/' , (req,res) => {
	res.send(200).end();
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/users', cors(corsOptions), (req, res) =>{
	connection.query("SELECT * FROM users", (err, rows) => {
		if(err) throw err;

		res.send(rows);
	});
});
const server = app.listen(port, () => {
	console.log('Express listening on port', port);
});