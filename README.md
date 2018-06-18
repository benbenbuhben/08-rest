
![cf](https://i.imgur.com/7v5ASc8.png) Lab 08: Vanilla REST API
======



#### Configuration
  * clone this repository
  * cd into the server folder
  * run 'npm i'
  * run 'npm watch'
  * open postman or use httpie 


## Server Endpoints
### `/api/v1/notes`
* `POST` request
 * pass data as stringifed JSON in the body of a **POST** request 
 * For example, `{
	"title": "This is the title",
    "content": "These are the notes"
}`
* `GET` request
 * pass `?id=<uuid>` as a query string parameter to retrieve a specific note. Copy the uuid from the post response as the id here.
* `DELETE` request
 * pass `?id=<uuid>` in the query string to **DELETE** a specific resource. Copy the uuid from the post response as the id here.
