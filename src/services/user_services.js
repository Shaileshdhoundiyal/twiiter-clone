const {UserRepository} = require('../repository')
const {AppError,Auth} = require('../utils')
const {StatusCodes} = require('http-status-codes')

const userRepository = new UserRepository();

async function signup(data){
    try {
        const user = await userRepository.create(data);
        return response;
    } catch (error) {
        throw error;
    }
}

async function signin(data){
    try {
        const user = await userRepository.find(data);
        if(!user){
            throw new AppError("the user is not registred",StatusCodes.BAD_REQUEST);
        }
        else if(!Auth.comparePassword(data.password,user.password)){
            throw new AppError("the password didnt match",StatusCodes.BAD_REQUEST);
        }
        else {
            return user;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function removeUser(data){
    try {
        const user = await userRepository.findUser(data)
        if(!user){
            throw new AppError("user is not registered which you want to delete",StatusCodes.BAD_REQUEST);
        }
        else{
            const response = await userRepository.delete(data);
            return response;
        }
    } catch (error) {
        throw error;
    }
}

async function updateUser(data){
    try {
        const user = await userRepository.findUser( data.email,data);
        if(!user){
            throw new AppError('user is nott registered which you want to delete',StatusCodes.BAD_REQUEST);
        }
        else{
            const response = await userRepository.updata(data);
            return response;
        }
    } catch (error) {
        throw error;
    }
}


module.exports = {
    signin,
    signup,
    updateUser,
    removeUser
}

