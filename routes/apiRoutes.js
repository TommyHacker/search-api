const express = require('express');
const router = express.Router();
const apiData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
router.get('/:id', (req, res) => {
	try {
		const { id } = req.params;
		if (!apiData[id]) {
			const message = 'could not find page with that ID.';
			res.render('index', { message });
		} else {
			res.redirect(`infoPage`, { data: apiData[id] });
		}
	} catch (err) {
		console.log(err.message);
		res.redirect('index', { message: err.message });
	}
});

module.exports = router;
