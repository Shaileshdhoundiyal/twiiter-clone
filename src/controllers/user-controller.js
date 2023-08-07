const {UserService} = require('../services');
const {StatusCodes} = require('http-status-codes');
const {ErrorResponse,SucessResponse,AppError} = require('../utils');
const { error } = require('../utils/common/sucess-response');


async function  signup(req,res){
    try {
        const response = UserService.signup({
            user_name : req.body.user_name,
            email : req.body.email,
            password : req.body.password,
            bio : req.body.bio

        })
        SucessResponse.message = "the user is created";
        SucessResponse.data = response;
        res.status(StatusCodes.OK).json(SucessResponse);
    } catch (error) {
        if(error  instanceof AppError){
            ErrorResponse.message = error.message
            res.status(error.statusCode).json(ErrorResponse)
        }
        else{
            ErrorResponse.message = "the user is not created due to some internal error"
            ErrorResponse.error = error;
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
        }
    }
}

async function signin(req,res){
    try {
        const response = UserService.signin({
            email : req.body.email,
            password : req.body.password
        });
        SucessResponse.message = "the user is signin succesfully";
        SucessResponse.data = response;
        res.status(StatusCodes.OK).json(SucessResponse);
    } catch (error) {
        if(error instanceof AppError){
            ErrorResponse.message = error.message,
            ErrorResponse.error = error.explanation
            res.status(error.statusCode).json(ErrorResponse)
        }
        else{
            ErrorResponse.message = "you are not signin due to some technical error";
            ErrorResponse.error = error.explanation;
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        }
    }
}

async function removeUser(req,res){
    try {
        const response = await UserService.removeUser({
            email : req.body.email
        })
        SucessResponse.message = " the account is deleted Sucessfully";
        SucessResponse.data = response;
        res.status(error.statusCode).json(ErrorResponse);
    } catch (error) {
        if(error instanceof AppError){
            ErrorResponse.message = error.message,
            ErrorResponse.error = error.explanation
            res.status(error.statusCode).json(ErrorResponse)
        }
        else{
            ErrorResponse.message = "your account is not deleted due to some technical error";
            ErrorResponse.error = error.explanation;
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        }
    }
}

async function updateUser(req,res){
    try {
        const response = await UserService.updateUser({
            user_name : req.body.user_name,
            email : req.body.email,
            password : req.body.password,
            bio : req.body.bio

        })
        SucessResponse.message = " the account is updated Sucessfully";
        SucessResponse.data = response;
        res.status(error.statusCode).json(ErrorResponse);
    } catch (error) {
        if(error instanceof AppError){
            ErrorResponse.message = error.message,
            ErrorResponse.error = error.explanation
            res.status(error.statusCode).json(ErrorResponse)
        }
        else{
            ErrorResponse.message = "your account is not updated due to some technical error";
            ErrorResponse.error = error.explanation;
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        }
    }
}


