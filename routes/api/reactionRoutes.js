const router = require('express').Router();
const { 
  postReaction, 
  deleteReaction } = require('../../controllers/reactionController');

  //@description base route to post a reaction
  //@route /api/thought/:thoughtId/reaction
router.route('/:thoughtId/reaction')
  .post(postReaction);

  //@description base route to delete a reaction
  //@route /api/thought/:thoughtId/reaction/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;