const express = require ('express'); 
const cors = require("cors"); 
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client'); // Importando o Prisma Client
const bcrypt = require('bcryptjs');



const app = express();

dotenv.config(); 

// Inicializando o cliente Prisma
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json()); 

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

const userRoutes = require('./routes/userRoute');
app.use( '/usuarios', userRoutes); 
const taskRoutes = require('./routes/taskRoute');
app.use( '/tarefas', taskRoutes); 
const authRoutes = require('./routes/authRoute'); 
app.use('/authentication', authRoutes);