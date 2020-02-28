const router = require('express').Router();
const Article = require('../models/Article')
router.get('/', async (req, res) => {
	const articles = await  Article.find({},{comments:0});
	res.json(articles);
});


module.exports = router ;
