const router = require('express').Router();
const { 
  getUsers, 
  createUser, 
  getOneUser, 
  updateUser, 
  deleteUser, 
  addFriend, 
  deleteFriend } = require('../../controllers/userController');

  //@description base route to get or create users
  //@route /api/users/
router.route('/')
  .get(getUsers)
  .post(createUser);

  //@description route to update or delete user
  //@route /api/users/:id
router.route('/:id')
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser);

  //@description route to add or delete friends
  //@route /api/users/:id/friends/:friendId
router.route('/:id/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router