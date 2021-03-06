const express = require('express')
const app = express()
const port = 3001
require("dotenv").config();
const cors = require("cors");
const db = require("./db/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwtGenerator = require("./utils/jwtGenerator");
const authorization = require("./middleware/authorization");
const validInfo = require("./middleware/validInfo");


//middleware

app.use(express.json()) //req.body
app.use(cors())


//routes


// /auth handles /login, /register, and /isverify to authenticate already logged in users.
app.use("/auth", require("./routes/jwtAuth"));

// first protected route
app.use("/dashboard", require("./routes/dashboard"));




app.listen(port, (req, res) => {
        console.log(`App running at http://localhost:${port}`)
})