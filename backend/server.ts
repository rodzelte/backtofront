import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.post('/users', async (req, res) => {
    try {
      const newUser = await prisma.user.create({
        data: {
          email: "rodze@ad",
          name: "rodze@ad",
          password: "rodze@ad",
        },
      });
      res.json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating user' });
    }
  });

  app.get('/users', async (req, res) => {
    try {
      const users = await prisma.user.findMany();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching users' });
    }
  });
  

app.listen(3000, () => { 
    console.log('Server is running on http://localhost:3000');

});