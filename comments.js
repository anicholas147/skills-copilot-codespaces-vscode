// Create web server
// Create a form for user to input comments
// Create a list of comments
// Create a button to submit the form
// Create a button to delete comments

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let comments = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
  <form action="/comments" method="post">
    <input type="text" name="comment" placeholder="Enter your comment here">
    <button type="submit">Submit</button>

    <button type="button" onclick="window.location.href='/comments'">View Comments</button>
    </form>
    `);
}
);

