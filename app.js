const express = require('express');
const app = express();
const cors = require('cors');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
	try {
		console.log('home route gotten.');
		res.render('index');
	} catch (err) {
		console.log(err.message);
		res.send('something went wrong, try again.');
	}
});

module.exports = app;
