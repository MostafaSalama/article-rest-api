const router = require('express').Router();
const Article = require('../models/Article');
router.get('/', async (req, res) => {
	const articles = await Article.find({}, { comments: 0, __v: 0 });
	res.json(articles);
});
// router for adding new article
router.post('/', async (req, res) => {
	try {
		const article = new Article(req.body);
		await article.save();
		res.json(article);
	} catch (e) {
		res.send(e);
	}
});
router.get('/:id', async (req, res) => {
	try {
		const article = await Article.findOne({ _id: req.params.id });
		console.log(article.toString());
		if (!article.id)
			res.json({ error: true, message: "error can't find the article" });
		res.json(article);
	} catch (e) {
		console.log(e);
		res.json({ error: true, message: 'please try to pass the correct id' });
	}
});
router.delete('/', async (req, res) => {
	const { articleId } = req.query;
	if (!articleId) {
		res.json({ error: true, message: 'please provide articleId' });
	}
	try {
		console.log(`articleId is ${articleId}`);
		const article = await Article.deleteOne({ _id: articleId });
		console.log(article);
		res.json({ done: true });
	} catch (e) {
		res.json({
			error: true,
			message: e.message,
		});
	}
});
/*
	router fo updating specific article
	using its it and put method
 */
router.put('/:id', async (req, res) => {
	console.log(req.params.id)
	const { title, body } = req.body;
	try {
		const article = await Article.findOne({ _id: req.params.id });
		article.title = title;
		article.body = body;
		await article.save();
		res.json(article);
	} catch (e) {
		res.json({ error: true, message: e.message });
	}
});
module.exports = router;
