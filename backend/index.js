const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/config");
const bodyParser = require("body-parser");
require("./models/User");
require("./models/Survey")
require("./models/auth/passport-google");

mongoose.connect(keys.mongoURI);
const app = express();

//middlewares
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/auth")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

app.listen(5000);
