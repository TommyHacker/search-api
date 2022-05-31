const express = require('express');
const app = express();
const cors = require('cors');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const path = require('path');
const dotenv = require('dotenv').config();
// pull apiRoutes to handle all localhost:3000/api/
const apiRoutes = require('./routes/apiRoutes');

// ensure that request.body can be read
app.use(express.urlencoded({ extended: true }));
// ensure json can be parsed
app.use(express.json());
// negate issues with cors blocking
app.use(cors());
// using ejs templating instead of traditional HTML
app.set('view engine', 'ejs');
// ejs-mate allows pulling components into main <body/> e.g. nav,footer
app.engine('ejs', ejsMate);
// tells express where the root directory is for style.css or script.js
app.use(express.static(path.join(__dirname, 'public')));

// route all localhost:3000/api/ to these external routes
app.use('/api', apiRoutes);

// serve the index.ejs from home page.
app.get('/', (req, res) => {
	try {
		console.log('home route gotten.');
		res.render('index', { message: '', data: '' });
	} catch (err) {
		console.log(err.message);
		res.send('something went wrong, try again.');
	}
});

// export to index.js
module.exports = app;
