const { Reaction, Thought, User } = require('../models');

 //@description gets all users and associated thoughts and friends
const getUsers = async (req, res) => {
  await User.find()
    
    .populate('thoughts friends')
    .select('-__v')
    .then((allUsers) => 
        res.json(allUsers))
    .catch((err) => 
      res.status(500).json(err));
};

//@description gets one user by id
//@apiRequest use user id in the URL params
const getOneUser = async (req, res) => {
  await User.findOne({ _id: req.params.id })
    
    .populate('thoughts friends')
    .select('-__v')
    .then((oneUser) => {

        if(!oneUser){
            res.status(404).json({message: 'User does not exist, Sorry.'});
            return;
          }
        res.json(oneUser);
      })
    .catch((err) => 
      res.status(500).json(err));
};

//@description creates a new user
//@apiRequest use the json body to create user 
// {
//    "username": "",
//    "email": ""
// }
const createUser = async (req, res) => {
   await User.create(req.body)

     .then((newUser) => 
      res.json({message: "User created successfully."}))
    
     .catch((err) => 
      res.status(500).json(err));
};

//@description updates a user
//@apiRequest use user id in the URL params and json body to update
// {
//    "username": "",
//    "email": ""
// }
const updateUser = async (req, res) => {
  await User.findOneAndUpdate(
        { _id: req.params.id }, 
          req.body, 
          {new: true})
    
    .then((user) => {

        if(!user){
          res.status(404).json({message: 'User does not exist, Sorry.'});
          return;
        }
       res.json({message: "User updated successfully."});
      })
    .catch((err) => 
      res.status(500).json(err));
};

//@description deletes a user
//@apiRequest use user id in the URL params to delete a user
const deleteUser = async (req, res) => {
  await User.findOneAndDelete({_id: req.params.id})
    
    .then((user) => {

      if(!user){
        res.status(404).json({message: 'User does not exist, Sorry.'});
      }
      return Thought.deleteMany({ _id: { $in: user.thoughts}});
    })
    
    .then(() => 
      res.json({ message: "User and thoughts were deleted."}))
    .catch((err) => 
      res.status(500).json(err));
};

//@description adds a friend 
//@apiRequest use user id and friend id in URL params to add
const addFriend = async (req, res) => {
  await User.findOneAndUpdate(
        {_id: req.params.id}, 
        { $push: {friends: req.params.friendId}},
        {new: true})
   
    .then((friend) => {

        if(!friend){
          res.status(404).json({message: 'Sorry no one wants to be your friend.'});
          return;
        }
      res.json({message: "You have a friend!"});
      })
    .catch((err) => 
      res.status(500).json(err));
};

//@description deletes a friend
//@apiRequest use user id and friend id in URL params to delete
const deleteFriend = async (req, res) => {
  await User.findOneAndUpdate(
        {_id: req.params.id}, 
        { $pull: {friends: req.params.friendId}},
        {new: true})
    
    .then((friend) => {

      if(!friend){
        res.status(404).json({message: 'Sorry no you do not have a friend.'});
        return;
      }
    res.json({message: "Sorry you lost your friend!"});
    })
    .catch((err) => 
      res.status(500).json(err));
};

module.exports = { getUsers, getOneUser, createUser, updateUser, deleteUser, addFriend, deleteFriend }