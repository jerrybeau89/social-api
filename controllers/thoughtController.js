const {  Thought, User } = require('../models');


const getThoughts = async(req, res)=>{
  await Thought.find()
  .then((thoughts) => res.json(thoughts))
  .catch((err) => res.status(500).json(err));
};

const getOneThought = async (req, res) => {
   await Thought.findOne({ _id: req.params.id })
   .then((oneThought) => res.json(oneThought))
   .catch((err)=> res.status(500).json(err));
};

const newThought = async (req, res) => {
  await Thought.create(req.body)
    .then((thought) => {
      return User.findOneAndUpdate(
            { username: req.body.username },
            { $push: { thoughts: thought._id }},
            { new: true});
    })
    .then((thought, user) => {
    if(!user){
      res.status(404).json({ message: 'Tag created, but found no post with that ID'});
      res.json('Created the tag 🎉')
    } res.json({ thought, user })
    })
    .catch((err) => res.status(500).json(err));
};

const updateThought = async (req, res) => {
   await Thought.findOneAndUpdate({_id: req.params.id}, req.body)
   .then((updatedThought) => res.json(updatedThought))
   .catch((err) => res.status(500).json(err));
};

const deleteThought = async (req, res) => {
   await Thought.findOneAndDelete({_id: req.params.id})
    .then((thought) => res.json(thought))
    .catch((err) => res.status(500).json(err));
};

const postReaction = async (req, res) => {
  await Thought.findOneAndUpdate(
            {_id: req.params.id},
            {$push: {reactions: req.body}})
    .then((reaction) => res.json(reaction), console.log(reaction))
    .catch((err) => res.status(500).json(err));
};

const deleteReaction = async (req, res) => {
  await Thought.findOneAndUpdate(
            {_id: req.params.id},
            {$push: {reactions: req.body}})
    .then((reaction) => console.log(reaction), res.json(reaction))
    .catch((err)=> res.status(500).json(err));
};

module.exports = { getThoughts, getOneThought, newThought, updateThought, deleteThought, postReaction, deleteReaction };