const { randomiser } = require('../helpers/apiHelpers');
const dataArr = require('../models/apiData');

exports.getOne = (req, res) => {
	try {
		const { id } = req.params;
		const data = dataArr[id];
		res.render('animalPage', { data });
	} catch (err) {
		console.log(err.message);
		res.send('something went wrong');
	}
};

exports.random = (req, res) => {
	try {
		const val = randomiser();
		const data = dataArr[val];
		res.render('animalPage', { data });
	} catch (err) {
		console.log(err.message);
		res.send(' something went wrong.');
	}
};

exports.all = async (req, res) => {
	try {
		const data = await dataArr;
		res.render('allAnimals', { data });
	} catch (err) {
		console.log(err.message);
		res.send('something went wrong.');
	}
};
