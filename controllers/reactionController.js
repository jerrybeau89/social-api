const {  Thought, User, Reaction } = require('../models');

//@description creates a new reaction
//@apiRequest use the json body to create reaction 
// {
//    "reactionBody": "",
//    "username": ""
// }
const postReaction = async (req, res) => {
  await Reaction.create(req.body)
    
    .then(({_id}) => {
      return Thought.findOneAndUpdate(
          {_id: req.params.thoughtId},
          {$push: {reactions: _id}},
          {new: true});
    })
    
    .then((reaction) => {

      if (!reaction) {
        res.status(404).json({message: "No thought to react to."});
        return;
      }
      res.json({message: "Reaction posted successfully!"});
    })
    
    .catch((err) => 
      res.status(500).json(err));
};

//@description deletes a reaction
//@apiRequest use thought id and reaction id in the URL params
const deleteReaction = async (req, res) => {
  await Reaction.findOneAndDelete({_id: req.params.reactionId})
    
    .then(reaction => {

      if (!reaction) {
        res.status(404).json({message: "No reaction to delete."});
        return;
      } return Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        {$pull: {reactions: req.params.reactionId}},
        {new: true});
    })
    
    .then((thought) => {

      if (!thought){ 
        res.status(404).json({message: "No thought found associated with a reaction."})
        return;
      }
      res.json({message: "Reaction deleted!"});
    })
    .catch((err)=> 
      res.status(500).json(err));
};

module.exports = { postReaction, deleteReaction };