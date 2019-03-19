const express = require('express');
const router = express.Router();
const Task = require("../models/Task");

router.get('/',async (req,res)=>{ 
    const tasks = await Task.find();
    console.log(tasks);
    console.table(req);
    res.json(tasks);
});

router.get('/:id',async (req,res) =>{

  const task =  await Task.findById(req.params.id);
    res.status(200).json(task);
});


router.post('/',async (req,res)=>{ 
    const task =  new Task(req.body);
    await task.save();
    res.status(200).json(task);
});

router.put('/:id',async (req,res)=>{
   await Task.findByIdAndUpdate(req.params.id,req.body);

    res.status(200).json({
       response:"Task Updated",
       param:req.params,
       obj:req.body
    })
});


router.delete('/:id',async (req,res)=>{
  await Task.findByIdAndRemove(req.params.id);
 
});

module.exports = router;