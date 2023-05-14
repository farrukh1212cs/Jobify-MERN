import User from '../models/user.js'
import { StatusCodes } from 'http-status-codes'
import {BadRequestError} from '../errors/index.js'





const register = async (req,res) =>{
    const {name,email,password} = req.body

    if(!name || !email || !password){
        throw new BadRequestError('please provide all values')
    }

    const userAlreadyExists = await User.findOne({email});
    if(userAlreadyExists)
    {
        throw new BadRequestError('Email already in use');
    }
    const user = await User.create({name,email,password})
   const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({user:{name:user.name,email:user.email,lastName:user.lastName,location:user.location,id:user._id},token})
   
}

const login = async (req,res) =>{
    res.send('login user')
}

const updateUser = async (req,res) =>{
    res.send('upodate user')
}

export {register,login,updateUser}