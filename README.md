# MERN-Stack-Playground
(In Progress) Features:: User-Authentication, Mailer, Payment w/ stripe, CRUD: Comment-Like-Bookmark, Dashboard, Real-time update chat

This repo focuses on well made MERN project structure which follows MVC pattern design with Redux arcitecture as well.

If you looking for building specific features like CRUD, User Auth, Comments, Likes and etc, I recommand to look others' works.

Any questions related to this repo, create issues or email me to hogyun3709@gmail.com but rather prefer to make issues.

Especailly very beignner of MERN stack web development, dont hesitate to ask questions related with the project sturctures.

## Built with

- Frontend: Creat React App(CRA) with ejected && Semantic-Ui-React
- Backend: MongoDB && Node.js

## Development

1. You need to run `npm install` three times according to this following project structure.

```
root
├── frontend
│   ├── ...
│   ├── ...
│   └── package.json
├── backend  
│   ├── ...
│   ├── ...
│   ├── ...
│   └── package.json
└── package.json

```
2. In order to work client side css rendering works properly, install semanti-ui node_module independently.


Follow this https://jsramblings.com/2018/03/04/how-to-use-semantic-ui-with-a-custom-theme-in-your-CRA-app.html


3. Create config.js file in /backend/config folder. Write follwing configurations:

```
module.exports = {
  googleClientID: "From Provider's credential",
  googleClientSecret: "From Provider's credential",
  mongoURI: "From Provider's credential",
  cookieKey: "You can create your own random key",
  stripePublishableKey: "From Provider's credential",
  stripeSecretKey: "From Provider's credential",
  sendGridKey: "From Provider's credential"
}

```

4. Go to project's root directory, run `npm run dev` for development. This command will run both server and client

Last Update :: 30, April, 2018
