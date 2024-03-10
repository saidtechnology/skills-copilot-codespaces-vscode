// Create web server using express
// Create a route to get all comments
// Create a route to post a comment
// Create a route to delete a comment
// Create a route to update a comment
// Create a route to get a comment by id

// Import express
const express = require('express');
// Create a router
const router = express.Router();
// Import the comments array
const comments = require('../data/comments');

// Route to get all comments
router.get('/comments', (req, res) => {
    res.json(comments);
});

// Route to post a comment
router.post('/comments', (req, res) => {
    const { id, body, postId } = req.body;
    if (id && body && postId) {
        const newComment = {
            id: id,
            body: body,
            postId: postId
        };
        comments.push(newComment);
        res.json(comments);
    } else {
        res.status(400).json({ msg: `Please include an id, body, and postId` });
    }
});

// Route to delete a comment
router.delete('/comments/:id', (req, res) => {
    const found = comments.some(comment => comment.id === parseInt(req.params.id));
    if (found) {
        res.json(