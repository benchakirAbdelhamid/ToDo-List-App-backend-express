const express = require('express')
const router = express.Router()
const Task = require('../model/task')

router.get('/tasks', async(req , res)=>{
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({
            error : error.message
        })
    }
})

// branch test
router.post('/tasks' , async(req ,res)=>{
    try {
        const task = new Task(req.body)
        await task.save()
        res.status(200).json({message : "added successfuly" , task})
    } catch (error) {
        res.status(400).json({error : error.message})
    }
})

router.put('/tasks/:id' , async (req , res)=>{
    try {
        const {id} = req.params
        const task = await Task.findByIdAndUpdate(id , req.body,{new : true})
       return res.status(200).json({
            message : 'updated successfuly',
            task        })
    } catch (error) {
        res.status(400).json({error : error.message})
    }
})

router.delete('/tasks/:id' , async(req , res)=>{
    try {
        const {id} = req.params
       await Task.findByIdAndDelete(id)
        res.status(200).json({
            message : "Deleted successfuly",
            id
        })
    } catch (error) {
        res.status(400).json({error : error.message})
    }
})

module.exports = router