exports.getOne = (req, res) => {
	try {
		const { id } = req.params;
		if (!apiData[id]) {
			const message = 'could not find page with that ID.';
			res.render('index', { message });
		} else {
			res.render(`infoPage`, { message: 'found data', data: apiData[id] });
		}
	} catch (err) {
		console.log(err.message);
		res.render('index', { message: err.message });
	}
};
