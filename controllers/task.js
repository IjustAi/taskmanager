const Task=require('../models/Task')

const getALLTasks=async (req,res)=>{
    try{
        const tasks= await Task.find({})
        res.status(200).json({tasks})

    }catch(error){
        res.status(500).json({msg:error})

    }

}

const createtasks=async (req,res)=>{
    try{
        const task =await Task.create(req.body)
        res.status(201).json({task})

    }catch(error){
        res.status(500).json({mse:error})
    }
}

const getTask=async (req,res)=>{
    try{
        const{id:taskID}=req.params
        const task =await Task.findOne({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`no task with id ${taskID}`})
        }
        res.statue(200).json({task})
    }catch(err){
        res.status(500).json({mse:error})
    }
}

const updataTask=async (req,res)=>{

    try{
        const {id:taskID} =req.params

        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:True,
            runValidators: True,
        })
        if(!task){
            return res.status(404).json({msg:`no task with id ${taskID}`})
        }
        res.status(200).json({id:taskID,data:req.body})

    }catch{

    }
}

const deleteTask=async (req,res)=>{
    try{
        const {id:taskID}=req.params;
        const task =await Task.findOneAndDelete({_id:taskID});
        if(!task){
            return res.status(404).json({msg:`no task with id ${taskID}`})
        }
        res.status(200).send()

    }catch(error){
        res.status(500).json({mse:error})
    }

}


module.exports={
    getALLTasks,
    createtasks,
    getTask,
    updataTask,
    deleteTask
}