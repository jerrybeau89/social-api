const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThought } = require('./data');

connection.once('open', async () => {

  await User.deleteMany({});
  await Thought.deleteMany({});

  const names = [
    'Catherine',
    'Ian',
    'Algena',
    'Bain',
    'Dwyane',
    'Wilson',
    'Mark',
    'Shane',
    'Scooter',
    'Scott',
    'Nelson',
    'Forrest',
    'Maria',
    'Whitney',
    'Becky',
    'Inna',
    'Tamara',
    'Vita',
    'Vlad',
    'Ruslan',
    'Daniel',
  ];

  const thoughts = [
    `Theme parks can snap a crystal clear picture of you on a roller coaster at 70 mph, but bank cameras can't get a clear shot of a robber standing still.`,
    `If my calculator had a history, it would be more embarrassing than my browser history.`,
    `Lawyers hope you get sued, doctors hope you get sick, cops hope you're criminal, mechanics hope you have car trouble, but only a thief wishes prosperity for you.`,
    `As a kid my parents taught me to not believe everything I see on TV, now I have to teach them to not believe everything they see on Facebook.`,
    `The Olympics should have a 'For Fun' section at the end of all the games so all the athletes can try different sports.`,
    `Tall people are expected to use their reach to help shorter people, but if a tall person were to ask a short person to hand them something they dropped on the floor it'd be insulting.`, 
    `What if Earth is like one of those uncontacted tribes in South America, like the whole Galaxy knows we're here but they've agreed not to contact us until we figure it out for ourselves.`,
    `If I get up 10 minutes earlier than usual, I treat it like 2 extra hours and end up late for work.`,
    `If someone offered to pay for my food and rent for the next 18 years, I'd do anything they ask of me. But I complained every time I took the trash out while living at my parent's house.`,
    `Aliens invaded the Moon on July 20th, 1969.`,
    `When you say 'Forward' or 'Back', your lips move in those directions.`,
    `Instead of colorizing photos, in 50 years we will be removing filters.`,
    `I've woken up over 10,000 times and I'm still not used to it`,
    `Tobacco companies kill their best customers and condom companies kill their future customers.`,
    `When a company offers me a better price after I cancel their subscription, they're just admitting they were overcharging me.`,
    `Somewhere in the world, there is somebody with your dream job that hates going to work everyday.`,
    `Christmas feels more like a deadline than a holiday.`,
    `"DO NOT TOUCH" would probably be a really unsettling thing to read in braille.`,
    `After years of disliking the way i look, only now i realize I'm not ugly, I'm just not my type.`,
    `We talk about Ancient Romans like they were basically all the same, but the civilization lasted almost 1000 years. That's like saying people in 2016 and 1016 are basically the same.`,
    `Vehicles today can surf the web, link to your phone, stream music and videos, etc.. but they still can't perform a simple database lookup to tell you what the check engine light is on for.`,
  ];

  const users = [];

  
  for (let i = 0; i < 21; i++) {
      
      const username = names[i];
      const email = username+"@aol.com";
      users.push({
        username,
        email,
      });
    }   
    await User.collection.insertMany(users);
    
  process.exit();
});