const {  Thought, User } = require('../models');

//@description gets all thoughts and reactions associated 
const getThoughts = async(req, res)=>{
  await Thought.find({})
  .populate('reactions')
  .select('-__v')
  //@description sorts so newest thought is on top
  .sort({_id: -1})
  .then((thoughts) => 
    res.json(thoughts))
  .catch((err) => 
    res.status(500).json(err));
};

//@description gets one thought and reactions associated by id
//@apiRequest use thought id in the URL params
const getOneThought = async (req, res) => {
   await Thought.findOne({ _id: req.params.id })
      
      .populate('reactions')
      .select('-__v')
      .then((oneThought) => {
        
        if(!oneThought) {
          res.status(404).json({message: "No thought found"});
          return;
        }
        res.json(oneThought);
      })
      .catch((err)=> 
        res.status(500).json(err));
};

//@description creates a new thought
//@apiRequest use the json body to create thought 
// {
//    "thoughtText": "",
//    "username": ""
// }
const newThought = async (req, res) => {
  await Thought.create(req.body)

    .then(({_id}) => {
      return User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { thoughts: _id }},
            { new: true});
    })
    .then((user) => {

      if(!user){
        res.status(404).json({message: "No User found."});
        return;
      } 
      res.json({message: "New thought created."});
    })
    .catch((err) => 
      res.status(500).json(err));
};

//@description updates a thought by id
//@apiRequest use thought id in the URL params and json body to update
// {
//   "thoughtText": "",
//    "username": ""
// }
const updateThought = async (req, res) => {
   await Thought.findOneAndUpdate(
        {_id: req.params.id}, 
        req.body,
        {new: true})

    .then((updatedThought) => {

        if (!updateThought) {
          res.status(404).json({message: "No thought found to update."});
          return;
        }
      res.json({message: "Thought updated successfully."});
    })
    .catch((err) => 
      res.status(500).json(err));
};

//@description deletes a thought and updates user associated to thought
//@apiRequest use thought id in the URL params
const deleteThought = async (req, res) => {
   await Thought.findOneAndDelete({_id: req.params.id})
    
    .then((thought) => {

      if (!thought) {
        res.status(404).json({message: "No thought found."});
        return;
      } return User.findOneAndUpdate(
        {username: thought.username},
        {$pull: {thoughts: req.params.thoughtId}},
        {new: true}
      );
    })
    .then((user) => {

      if(!user){ 
        res.status(404).json({message: "No User found"});
        return;
      }
      res.json({message: "Thought deleted successfully."});
    })
    .catch((err) => 
      res.status(500).json(err));
};

module.exports = { getThoughts, getOneThought, newThought, updateThought, deleteThought };