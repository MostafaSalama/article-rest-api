const mongoose = require('mongoose');

// Article Schema
const ArticleSchema = new mongoose.Schema({
	title: String,
	body: String,
	date: Date,
	author: String,
	votes: Number,
	comments: [{ body: String, _id: mongoose.Types.ObjectId }],
});
// Article collection
const Article = mongoose.model('article', ArticleSchema);
// export it 
module.exports = Article;
