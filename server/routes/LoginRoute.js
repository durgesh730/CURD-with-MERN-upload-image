const express = require("express");
const {
    LoginController,
    GetALLData,
    DeleteUser,
} = require("../controller/LoginController");
const Login = express.Router();

// create data api
Login.put("/user/login", LoginController)

// get data 
Login.get("/user/all/data", GetALLData)

// delete
Login.delete('/user/delete/:id', DeleteUser)


// export default 

module.exports = Login