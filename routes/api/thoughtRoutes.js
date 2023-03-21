const router = require('express').Router();
const { getThoughts, getOneThought, newThought, updateThought, deleteThought, postReaction, deleteReaction } = require('../../controllers/thoughtController.js');

router.
route('/')
.get(getThoughts)
.post(newThought);

router.route('/:id')
.get(getOneThought)
.put(updateThought)
.delete(deleteThought);

router
.route('/:id/reactions')
.post(postReaction);

router
.route('/:id/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;