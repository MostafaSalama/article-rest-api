const router = require('express').Router();
const Article = require('../models/Article');
router.get('/', async (req, res) => {
	const articles = await Article.find({}, { comments: 0 ,__v:0});
	res.json(articles);
});
// router for adding new article
router.post('/', async (req, res) => {
	try {
		const article = new Article(req.body) ;
		await  article.save() ;
		res.json(article)
	}
	catch (e) {
		res.send(e);
	}
});

module.exports = router;
