# nutshell
Nutshell: The Information Dashboard
Nutshell is a new product offering that you have been tasked with building. It's a dashboard for people to use to organize their daily tasks, events, news article, friends, and chat messages.

You will be utilizing all of the skills and concepts that you've learned up to this point in the course.

Functions
Databases/API
Github
Objects
CSS
Handling user events
Factory functions
Data entry/editing
Modular code with Browserify
Relational data
To start you off, here's an example of what the resources in your API should look like once it's populated with some data from your application.

Users
{ "id": 1, "username": "Steve", "email": "me@me.com" }
Messages
{ "id": 1, "userId": 1, "message": "What's up?" }
News
{
    "id": 1,
    "userId": 2,
    "url": "https://www.quantamagazine.org/newfound-wormhole-allows-information-to-escape-black-holes-20171023/",
    "title": "Wormholes Allow Information to Escape Black Holes",
    "synopsis": "Check out this recent discovery about workholes"
}
Friends
{ "connectionId": 1, "userId": 1, "otherFriendId": 3 }
Tasks
{ "id": 1, "userId": 3, "task": "Take out garbage" }
Professional Requirements
All teammates must be using Grunt to run ESLint and Browserify during development
Each module should have a comment at the top with the following info: author(s) and purpose of module
The README for your project should include instructions on how another person can download and run the application
Visual Feature List
To help you along, here is a visualization of the features, and behaviors of the application to get you started.

nutshell features