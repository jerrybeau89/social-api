const router = require('express').Router();
const { 
  getThoughts, 
  getOneThought, 
  newThought, 
  updateThought, 
  deleteThought, } = require('../../controllers/thoughtController.js');

  //@description base route to get or post thoughts
  //@route /api/thoughts
router.route('/')
  .get(getThoughts)
  .post(newThought);

  //@description route to update or delete thoughts
  //@route /api/thoughts/:id
router.route('/:id')
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;