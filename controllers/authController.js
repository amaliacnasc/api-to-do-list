const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET;

exports.register = async (req, res) => {
  try {
    const { userName, phone, password, email } = req.body;

   console.log('rodou ate 1 linha')
    const existingUser = await prisma.user.findUnique({
      where: { email:req.body.email},
    });

    if (existingUser) {
      console.log('rodou ate o if');
      return res.status(400).json({ message: 'Email já cadastrado.' });
     
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        userName,
        phone,
        password: hashedPassword,
        email,
      },
    });

    res.status(201).json({
      message: 'Usuário registrado com sucesso!',
      user: { userId: newUser.userId, userName: newUser.userName, email: newUser.email },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao registrar usuário.' });
  }
};

// Função para login de usuário
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: {email:req.body.email } });
    if (!user) {
      return res.status(400).json({ message: 'Email ou senha incorretos.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Email ou senha incorretos.' });
    }

    const token = jwt.sign(
      { userId: user.userId},
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ message: 'Login bem-sucedido!', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao realizar login.' });
  }
};
