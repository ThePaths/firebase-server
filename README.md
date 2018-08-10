# The Path's Backend
This is the server side code for The Paths,
you can find the front side code [here](https://github.com/ThePaths/client).

## Where to find

You can visit a deployed client at: [https://melata-app.firebaseapp.com](https://the-paths.firebaseapp.com)

The deployed API URL is: [https://the-paths-server.firebaseapp.com](https://the-paths-server.firebaseapp.com)

## API Documentation
The API is organized around REST acrchitecture. All request and response bodies are JSON and should have `"Content-Type":"application/json"` in their header.

### Authenitcation
User's are authenticated using JSON Web Tokens. Most enpoints require a JWT in the request header, `"Authorization": "Bearer <JWT>"`. To get a JWT call `POST /auth/login` with a username and password. To create a user with a username and password call `POST /auth/register`.

#### POST /auth/register
<small>For creating a user.</small>

Request Body:
```json
{
  "username":<String>,
  "email":<String>,
  "password":<String>
}
```
Successful Response Body, Status `201`:
```json
{
  "username":<String>,
  "email":<String
}
```
Unsuccessful Response Body: \
Username Taken, Status `422`:
```json
{
  "code": 422,
  "reason": "ValidationError",
  "message": "Username already taken",
  "location": "regusername"
}
```

#### POST /auth/login
For retrieving a JWT to put in the header of future requests. JWTs expire in 30 days.

Request Body:
```json
{
  "username":<String>,
  "password":<String>
}
```
Successful Response Body, Status `200`:
```json
{
  "authToken":<String>,
}
```

### Users
These's don't have much use on our front-end at the moment. For retrieving user data.
#### GET /users?id=MongoDbObjectId&username=username
Retrieve infomation about user with a valid user id or username in the URL query. \
Successful Response Body, Status `200`:
```json
{
  "username":<String>,
  "email":<String>
}
```
Returns status `404` if there is no user with the recieved id or username.

Returns status `400` if no id or username is recieved. 

### Paths
Retrieve infomation about the paths, which contain their own infomation and references to videos and creators.
#### GET /paths/
Retieve all paths. Used for explore page. \s
Successful Response Body, Status `200`:
```json
[
  {
    "title": <String>,
    "creator": 
      { 
        "id": <ObjectId>,
        "name": <String>
      },
    "length": <Number> (seconds),
    "description": <String>, 
    "videos": [<ObjectId>]
  },
  ...
]
```

#### GET /paths/:pathId
Retieve one paths by it's Mongo ObjectId.\
Successful Response Body, Status `200`:
```json
{
  "title": "Path Title",
  "creator": 
    { 
      "id": "<ObjectId>",
      "name": "Creator Name"
    },
  "length": 1000 /*seconds*/,
  "description": "Lorem Ipsum", 
  "videos": 
    [
      {
        "creator": {
            "youtube": "https://www.youtube.com/channel/channelId",
            "name": "Creator Name",
            "id": "<ObjectId>"
        },
        "description": "Lorem Ipsum",
        "replit": "https://repl.it/@<reptUser>/<replId>",
        "title": "Video Title",
        "videoId": "<Youtube videoId>",
        "id": "<ObjectId>"
      }
    ]
}
```

#### GET /paths/guest
Retieve 3 paths for displaying guest/tutorial paths \
Successful Response Body, Status `200`:
```
 Same as /paths/:pathId but with 3 paths in an array with only one video each.
```


### Userpaths


### Overview
Combines information about a path and a user's progress in that path. Used for Path Overview Page. \

## Instructions

- Clone this repository to local directory.
- Run 'npm install' to install the dependencies needed to run this server.
- Create a Mongo database and have a URL to connect to.
- Create a '.env' file in your local directory and create a 'JWT_SECRET' variable with your secret word, and a 'DATABASE_URL' variable with your MongoDB URL.

## Contributions

Contributions to the application are accepted. 

## Built With

- [Node.js](https://nodejs.org/en) - Runtime
- [Express.js](https://expressjs.com) - Main Framework used for CRUD endpoints
- [MongoDB](https://www.mongodb.com) - Database
- [Mongoose](http://mongoosejs.com/docs/guide.html) - Library to access DB
- [Passport](http://www.passportjs.org/) - Authentication
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs) - Hashing user passwords
- [JWT-decode](https://www.npmjs.com/package/jwt-decode) - Using JWTs from Passport


## Authors
[Jimm Lusk](https://github.com/jimmlusk) | [Sayed Khan](https://github.com/arsalonk) | [Dameon Mendoza](https://github.com/Dameon1) | [Terrance Corley](https://terrancecorley.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

[Thinkful](https://www.thinkful.com/)

