const { Schema, Types, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => {
        //@description formats the date
        let day = ``
        switch(timestamp.getDate()%10){
          case 1:
            day = `${timestamp.getDate()}st`;
            break;
          case 2:
            day = `${timestamp.getDate()}nd`;
            break;
          case 3:
            day = `${timestamp.getDate()}rd`;
            break;
          default:
            day = `${timestamp.getDate()}th`;
            break;
        }
         //@description converting military time to standard
        let standardTime = timestamp.getHours() % 12 === 0 ? `12` : timestamp.getHours() % 12;
        let timeframe = timestamp.getHours() > 12 ? 'PM' : 'AM' ;
        return `${timestamp.toString().substring(4,7)} 
                ${day}, 
                ${timestamp.getFullYear()} at 
                ${standardTime}:${timestamp.getMinutes()} 
                ${timeframe}`;
      }
    },
    username: {
      type: String,
      required: true,
      ref: 'user'
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
})

module.exports = Thought;
