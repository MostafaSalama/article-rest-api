# article-rest-api
A simple REST API for reading and updating articles for an app
## REST API for a blog built with express.js framework and MongoDB

## Endpoints
* `GET` `/articles` `get all the articles`
* `POST` `/articles/` `add new article`
* `GET` `/articles/:id` `get a specific article` 
* `DELETE` `/articles?articleId=id` `delete a specific article`
* `PUT` `/articles/:id` `update specific article` 
### Endpoints for article comments 
* `GET` `/articles/:id/comments` `get all comments for specific article using it's id`
* `POST` `/articles/:id/comments` `add new comment for an article`
