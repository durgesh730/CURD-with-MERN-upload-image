const express = require('express');
const app = express();
const cors = require('cors');
const Login = require('./routes/LoginRoute');
const ConnectDB = require('./db/conn');
const port = 5000;

ConnectDB()
app.use(cors());
app.use(express.json());

app.use("/api", Login)

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
