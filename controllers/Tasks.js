const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createTask = async(req,res)=>{
    try{
        const task = await prisma.post.create({
            data:req.body
        }); 
        res.status(200).json(task); 
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

exports.getTaskById = async(req,res) =>{
    try{
        const task = await prisma.post.findUnique({
            where:{id: req.params.id}
        })
        res.status(200).json(task)
    } catch(error){
       res.status(500).json({message: error.message}) 
    }

}

exports.getTaskByType = async(req,res) =>{
    try{
        const tasks = await prisma.post.findMany({
            where:{type:req.params.type}
        });
        res.status(200).json(tasks)
    }catch(error){
        res.status(500).json({message: error.message}) 
     }
}

exports.getAllTasks = async(req,res)=>{
    try{
        const tasks = await prisma.post.findMany()
        res.status(200).json(tasks)
    }catch(error){
        res.status(500).json({message:error.message})
    }
};


exports.updateTaskById = async(req,res)=>{
    try{
        const task = await prisma.post.findUnique({
            where:{id: req.params.id}
        })
        if(!task){
            res.status(404).json({message:'Tarefa não encontrada'}); 
        }
        const updatedTask = await prisma.post.update({
            where:{id: req.params.id},
            data: req.body,
        })
        res.status(200).json({message:`Tarefa atualizado com sucesso ${updatedTask}`});
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}; 

exports.deleteTaskById = async(req,res) =>{
    try{
        const task = await prisma.post.delete({
            where:{id: req.params.id}
       
        });
        console.log(task)
        if (!task){
            res.status(404).json({message:'Tarefa não encontrado'}); 
        }
        res.status(200).json({message:`Tarefa deletado com sucesso `});
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

