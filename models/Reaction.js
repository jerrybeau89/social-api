const {Schema, Types, model} = require('mongoose');
const thoughtSchema = require('./Thought');
const userSchema = require('./User');

const reactionSchema = new Schema(
  {
    
    reactionBody: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
        ref: 'user'
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
        return `${timestamp.toString().substring(4,7)} ${day}, ${timestamp.getFullYear()} at ${standardTime}:${timestamp.getMinutes()} ${timeframe}`;
      },
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);


const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
