# Assignment2

## Git Organisation

Consists of one master branch

Contains multiple commits of entire Assignment2 folder

## Data Structures

 Each user is represented by a class that consists of
 - username
 - email
 - password
 - valid
 - id
 - image
 - role

 Each chat message is represented by a class that consists of
 - id
 - username
 - message

## Responsibilities

The client is responsible for displaying and updating the information that is stored on the server side, Such as the client receieves whether the login is correct by the server sending the authorised user login that matches the email and password unless the information is wrong. The server holds the database and the tables used and through the client gets requested to be viewed.

## Routes

 - Route to reading the users table that outputs the user that matches the email and password submitted

 - Route to adding initial users into the database

 - Route to edit a logged in user accessed from profile

 - Route to viewing a profile to be able to edit/logout

## Angular Architecture
 ### Components
    - App
    - Account
    - Chat
    - Login
    - Profile
 ### Services
    - chatservice
    - socketservice
 ### Models
    - chatModel
    - users
 ### Routes
    - Account
    - Chat
    - Login
    - Profile

## Interaction Details
 Each component page gets updated each time the user goes to the page and the information that needs to be displayed gets displayed on initialisation. the files and variables get sent to the server and are used to update the database when neccessary.

## UnitTest
 Simply run npm run-script unitTest in the server directory