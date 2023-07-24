const express = require("express");
const {ServerConfig,MongoConnection} = require('./src/config');

const app = express();

app.listen(ServerConfig.PORT, ()=>{
    console.log(`server is listnening on port ${ServerConfig.PORT}`);
    MongoConnection.connect();
    console.log("mongo db is connected");
})