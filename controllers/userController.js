const asyncHandler = require("express-async-handler");
const User = require('../models/userModel');
const bcrypt = require("bcrypt");

//@desc Register a user
//@route POST /api/users/register
//@access public

const registerUser = asyncHandler( async(req, res) =>{
    const {username, email, password } = req.body;

    if( !username || !email || !password){
        res.status(400);
        throw new Error("All the fields are mandatory");

    }

    const userAvailable = await User.findOne({email});

    if( userAvailable ){
        res.status(400);
        res.json({
            error: "User already exsist!!!",
        })
    }

    const hasedPass = await bcrypt.hash(password, 10);
    console.log("hased password is : ",hasedPass);

    const user = await User.create({
        username,
        email,
        password : hasedPass,
    });

    console.log(`user created ${user}`);
    if(user){
        res.json({
            _id: user.id,
            email : user.email,
        });
    }else{
        res.status(400);
        throw new Error("user data not valid")
    }



    res.json({
        message: "Register the user"
    });
});

//@desc Login a user
//@route POST /api/users/login
//@access public

const loginUser = asyncHandler( async(req, res) =>{
    res.json({
        message: "login a user"
    });
});


//@desc Get the current user
//@route GET /api/users/current
//@access private

const currentUser = asyncHandler( async(req, res) =>{
    res.json({
        message: "current user information"
    });
});

module.exports = {registerUser, loginUser, currentUser};