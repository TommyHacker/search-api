const { fetchData } = require('../helpers/apiHelpers');
const { randomiser } = require('../helpers/apiHelpers');
const dataArr = require('../models/apiData');
const apiData = require('../models/apiData');
exports.getOne = (req, res) => {
	const { id } = req.params;
	const result = fetchData(id);
	console.log(result);
	res.redirect('/');

	// try {
	// 	const { id } = req.params;
	// 	if (!apiData[id]) {
	// 		const message = 'could not find page with that ID.';
	// 		res.render('index', { message });
	// 	} else {
	// 		res.render(`infoPage`, { message: 'found data', data: apiData[id] });
	// 	}
	// } catch (err) {
	// 	console.log(err.message);
	// 	res.render('index', { message: err.message });
	// }
};

exports.random = async (req, res) => {
	const val = randomiser();
	const data = await dataArr[val];
	console.log('hit random route');
	console.log(data);
	// grab a random calss object to serve
	//render the info page with that class info
	res.render('animalPage', { data });
};

exports.all = async (req, res) => {
	const data = await dataArr;
	res.render('index', { data});
};
