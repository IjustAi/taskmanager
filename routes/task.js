const express= require('express');
const router = express.Router();
const{getALLTasks,createtasks,getTask,updataTask,deleteTask} = require('../controllers/task');
router.route('/').get(getALLTasks).post(createtasks);
router.route('/:id').get(getTask).patch(updataTask).delete(deleteTask);

module.exports=router;
