const router = require('express').Router();

router.get('/', (req, res) => {
	res.json({
		result: 'all articles will be displayed for you',
	});
});

module.exports = router ;
