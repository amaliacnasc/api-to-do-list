const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


exports.getUserById = async(req,res) =>{
    try{
        const user = await prisma.user.findUnique({
            where:{userId: req.params.userId}
        })
        res.status(200).json(user)
    } catch(error){
       res.status(500).json({message: error.message}) 
    }

}

exports.getUserByEmail = async(req,res)=>{
    try{
        const user = await prisma.user.findUnique({
            where:{email: req.params.email}
        })
        res.status(200).json(user)
    }catch(error){
        res.status(500).json({message: error.message}) 
     }
}
exports.getAllUsers = async(req,res)=>{
    try{
        const users = await prisma.user.findMany()
        res.status(200).json(users)
    }catch(error){
        res.json(500).json({message:error.message})
    }
};

exports.updateUserById = async(req,res)=>{
    try{
        const user = await prisma.user.findUnique({
            where:{userId: req.params.userId}
        })
        if(!user){
            res.status(404).json({message:'Usuário não encontrado'}); 
        }
        const updatedUser = await prisma.user.update({
            where:{userId:req.params.userId}, 
            data: req.body,
        })
        res.status(200).json({message:`Usuário atualizado com sucesso ${updatedUser}`});
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}; 

exports.deleteUserById = async(req,res) =>{
    try{
        const user = await prisma.user.delete({
            where:{userId: req.params.userId}
        });
        if (!user){
            res.status(404).json({message:'Usuário não encontrado'}); 
        }
        res.status(200).json({message:`Usuário${user.name} deletado com sucesso `});
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

