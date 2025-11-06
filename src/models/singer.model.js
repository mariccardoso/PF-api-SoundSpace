import prisma from "../../prisma/prisma.js";

class SingerModel {
  // Obter todos os usuários
  async findAll() {
    const singers = await prisma.singer.findMany();

    return singers;
  }

  // Obter um usuário pelo ID
  async findById(id) {
    const singer = await prisma.singer.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        musics: true,
      }
    });

    return singer;
  }

  // Criar um novo usuário
  async create(data) {
    const singer = await prisma.singer.create({
      data,
    });

    return singer;
  }

  async update(id, data) {
    const singer = await prisma.singer.update({
      where: {
        id: Number(id),
      },
      data,
    });
    return singer;
  }

  // Excluir um usuário
  async delete(id) {
    await prisma.singer.delete({
      where: {
        id: Number(id),
      },
    });
  }
  
}

export default new SingerModel();
