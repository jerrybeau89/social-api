const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.once('open', async () => {

  await User.deleteMany({});
  await Thought.deleteMany({});

  const users = [
      {
          username: 'billy',
          email: 'billy@aol.com'
      },
      {
          username: 'bob',
          email: 'bob@aol.com'
      }
  ];

  const thoughts = [
      {
          thoughtText: `Go to bed, you'll feel better in the morning" is the human version of "Did you turn it off and turn it back on again?`,
          username: 'Wilson'
      },
      {
          thoughtText: `Maybe plants are really farming us, giving us oxygen until we eventually expire and turn into mulch which they can consume!`,
          username: 'Hans'
      }
  ];

  await User.collection.insertMany(users);

  await Thought.collection.insertMany(thoughts);
  process.exit();
});