const mongoose = require('mongoose')

const uri = "mongodb+srv://durgeshchaudhary020401:Durgesh%402022@cluster0.azjfogw.mongodb.net/"

 const ConnectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("database connected")
    } catch (error) {
        console.log(error )
    }

}

module.exports = ConnectDB
