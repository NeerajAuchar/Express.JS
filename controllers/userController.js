const express = require("express");
const asyncHandler = require("express-async-handler");
const { model } = require("mongoose");

//@desc Register a user
//@route POST /api/users/register
//@access public

const registerUser = asyncHandler( (req, res) =>{
    res.json({
        message: "Register the user"
    });
});

//@desc Login a user
//@route POST /api/users/login
//@access public

const loginUser = asyncHandler( (req, res) =>{
    res.json({
        message: "login a user"
    });
});


//@desc Get the current user
//@route GET /api/users/current
//@access private

const currentUser = asyncHandler( (req, res) =>{
    res.json({
        message: "current user information"
    });
});

module.exports = {registerUser, loginUser, currentUser};