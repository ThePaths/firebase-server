# The Path's Backend
This is the server side code for The Paths,
you can find the front side code [Here](https://github.com/ThePaths/client)

## Where to find

You can visit a deployed client at: [https://the-paths.firebaseapp.com](https://the-paths.firebaseapp.com)

The deployed API URL is: [https://the-paths-server.firebaseapp.com](https://the-paths-server.firebaseapp.com)

## API Documentation
The API is organized around REST acrchitecture. All request and response bodies are JSON and should have `"Content-Type":"application/json"` in their header.

### Authenitcation
User's are authenticated using JSON Web Tokens. Most enpoints require a JWT in the request header, `"Authorization": "Bearer <JWT>"`. To get a JWT call `POST /auth/login` with a username and password. To create a user with a username and password call `POST /auth/register`.

#### POST /auth/register
For creating a user.

Request Body:
```json
  "username":<String>,
  "email":<String>,
  "password":<String>
```
Successful Response Body, Status 201:
```json
  "username":<String>,
  "email":<String>
```
Unsuccessful Response:

Username Taken, Status 422:
```json
  "code": 422,
  "reason": "ValidationError",
  "message": "Username already taken",
  "location": "username"
```

#### POST /auth/login
For retrieving a JWT to put in the header of future requests. JWTs expire in 30 days.

Request Body:
```json
  "username":<String>,
  "password":<String>
```
Successful Response Body, Status 200:
```json
  "authToken":<String>,
```

### Users
### Paths
### Userpaths
### Other

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

