const { Reaction, Thought, User } = require('../models');

const getUsers = async (req, res) => {
  await User.find()
        .populate('thoughts')
        .populate('friends')
    .then((allUsers) => res.json(allUsers))
    .catch((err) => res.status(500).json(err));
};

const getOneUser = async (req, res) => {
  await User.findOne({ _id: req.params.id })
        .populate('thoughts')
        .populate('friends')
    .then((oneUser) => {
        if(!oneUser){
            res.status(404).json({message: 'User does not exist, Sorry.'});
        }res.json(oneUser)
      })
    .catch((err) => res.status(500).json(err));
};

const createUser = async (req, res) => {
   await User.create(req.body)
    .then((newUser) => res.json(newUser))
    .catch((err) => res.status(500).json(err));
};

const updateUser = async (req, res) => {
  await User.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
};

const deleteUser = async (req, res) => {
  await User.findOneAndDelete({_id: req.params.id})
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
};


const addFriend = async (req, res) => {
  await User.findOneAndUpdate({_id: req.params.id}, { $push: {friends: req.params.friendId}})
    .then((friend) => res.json(friend))
    .catch((err) => res.status(500).json(err));
};

const deleteFriend = async (req, res) => {
  await User.findOneAndUpdate({_id: req.params.id}, { $pull: {friends: req.params.friendId}})
    .then((friend) => res.json(friend))
    .catch((err) => res.status(500).json(err));
};

module.exports = { getUsers, getOneUser, createUser, updateUser, deleteUser, addFriend, deleteFriend }