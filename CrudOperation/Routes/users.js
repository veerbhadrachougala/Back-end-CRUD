const express = require('express')
const router = express.Router()
const user = require('../models/user')

router.get('/', async(req,res)=>{
    try{
        const users = await user.find()
        res.json(users)
    }
    catch(err){
        res.send('Error' + err)
    }
})

router.get('/:id', async(req,res)=>{
    try{
        const user = await user.findById(req.params.id)
        res.json(user)
    }
    catch(err){
        res.send('Error' + err)
    }
})

router.post('/', async(req,res)=>{
    const user = new user({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        qualification: req.body.qualification
    })
    try{
        const u1 = await user.save()
        res.json(u1)
    }
    catch(err){
        res.send('Error' + err)
    }
})

router.patch('/:id', async(req,res)=>{
    try{
        const user = await user.findById(req.params.id)
        user.qualification = req.body.qualification
        const u1 = await user.save()
        res.json(u1)
    }
    catch(err){
        res.send('Error' + err)
    }
})

module.exports = router