const asyncHandler = require('express-async-handler')

const registerVolunteer = asyncHandler(async (req,res)=>{
    return res.status(201).json({
        success: true
    })
})


const loginVolunteer = asyncHandler(async(req,res)=>{
    const { email, password } = await req.body;
    return res.status(200).json({
        email,
        password,
    })
})                                                                          

const searchVolunteer = asyncHandler(async(req,res)=>{
    return res.status(200).json({
        success: true
    })
})

const updateVolunteerData = asyncHandler(async (req,res)=>{
    return res.status(200).json({
        success: true
    })
})


module.exports = {registerVolunteer, loginVolunteer, searchVolunteer, updateVolunteerData}