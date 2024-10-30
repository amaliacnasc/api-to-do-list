const task = require('../controllers/Tasks');
const express = require("express");
const router = express.Router(); 

router.post('/', task.createTask);
router.get('/tasks', task.getAllTasks); 
router.get('/task/:id', task.getTaskById); 
router.get('/task/type/:type', task.getTaskByType); 
router.put('/task/update/:id', task.updateTaskById); 
router.delete('/task/delete/:id', task.deleteTaskById); 

module.exports = router; 