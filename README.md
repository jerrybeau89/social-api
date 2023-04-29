# social-api
This is a repo that will contain code for a social media api


## Description
Social API is a backend application that accepts user input via insomnia. User input can be URL queries, JSON data, or a combination of the two. Social API allows users to create a user in which the user can post thoughts, reactions to thoughts, and manipulate created data such as updating, creating or deleting the data. 

https://github.com/jerrybeau89/social-api


 ## Table of Contents
  
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Tests](#tests)
  5. [Video](#video)
  6. [Questions](#questions)

## Installation
npm install social-api

## Usage
Navigate to the integrated terminal associated with the index.js file. 

 Then you must source the schema.sql, as well as seeds.sql. Ensure your MySQL server is started. 

    You can run the following commands:

  `npm i`

  `npm run seed`

  `npm run start`

  or 

  `npm run develop`

    And the application will start!

Then you can test via insomnia using get, post, put or delete:

    http://localhost:3001/api/ + (*** the associated query**)

  Users:

  `/api/users/`

  `/api/users/:id`

  Friends:

  `api/users/:id/friends/:friendId`

  Thoughts:

  `/api/thoughts/`

  `/api/thoughts/:id`

  Reactions:

  `/api/thought/:thoughtId/reaction`

  `/api/thought/:thoughtId/reaction/:reactionId`

Sample JSON body data is in the respective controller file.


## License

MIT License

Copyright (c) 2023 Jerry Beau Baggett

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Tests
Tests can be conducted through insomnia or some other similar application.

## Video
Here is a video of the program being used: 

## Questions

  Please contact me at jerrybeau89@gmail.com with any questions you may have. You can also find my GitHub at https://github.com/jerrybeau89. Thank you! 


​


