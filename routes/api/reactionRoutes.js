const router = require('express').Router();
const { postReaction, deleteReaction } = require('../../controllers/thoughtController');

router
.route('/:id/reactions')
.post(postReaction);

router
.route('/:id/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;