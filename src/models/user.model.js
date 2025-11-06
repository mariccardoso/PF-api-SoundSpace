import prisma from "../../prisma/prisma.js";

class UserModel {
  // Obter todos os usuários
  async findAll() {
    const users = await prisma.user.findMany();

    return users;
  }

  // Obter um usuário pelo ID
  async findById(id) {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        channels: true,
        streams: true
      }
    });

    return user;
  }

  // Obter um usuário pelo email
  async findByEmail(email) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  // Criar um novo usuário
  async create(data) {
    const user = await prisma.user.create({
      data,
    });

    return user;
  }
}

export default new UserModel();
