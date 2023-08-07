const express = require("express");
const {ServerConfig,MongoConnection} = require('./src/config');
const {UserRepository,TweetRepository} = require('./src/repository')
const apiRoutes = require('./src/routes')
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async()=>{
    console.log(`server is listnening on port ${ServerConfig.PORT}`);
    MongoConnection.connect();
    console.log("mongo db is connected");
    // const userRepository = new UserRepository();
    // const response = await userRepository.create({
    //     user_name : 'devaKausikh',
    //     email : 'deva@gmail.com',
    //     password : 'deva@123'
    // });
    // const tweetRepository = new TweetRepository();
    // const response = await tweetRepository.create({
    //     content : "india is best #india",

    // })
    //console.log(response);
    
    
})