import prisma from "../../prisma/prisma.js";

class MusicModel {
    // Obter todos os canals
    async findAll(title, description, url, rating, page, limit) {
        if (Number(page) < 1) {
            page = 1;
        }
        if (Number(limit) < 1 || Number(limit) > 100) {
            limit = 10;
        }
        const skip = (Number(page) - 1) * Number(limit);
        //                4 - 1 = 3 * 10 = 30
        const where = {};

        if (title) {
            where.title = {
                contains: title,
            };
        }

        if (description) {
            where.description = {
                contains: description,
            };
        }

        if (url) {
            where.url = {
                contains: url,
            };
        }

        if (rating) {
            where.rating = {
                contains: rating,
            };
        }

        const musics = await prisma.music.findMany({
            skip,
            take: Number(limit),
            where,
            orderBy: {
                createdAt: "desc",
            },
            include: {
                singer: {
                    select: {
                        name: true,
                        biography: true,
                        photoUrl: true,
                    },
                },
            },
        });

        const totalViews = musics.length;
        const grandTotal = await prisma.music.count({
            where,
        });

        return { totalViews, grandTotal, musics };
    }

    async findById(id) {
        const music = await prisma.music.findUnique({
            where: {
                id: Number(id),
            },
            include: {
                singer: {
                    select: {
                        name: true,
                        biography: true,
                        photoUrl: true,
                    },
                },
            },
        });
        return music;
    }

    // Criar um novo canal
    async create(data) {
        const music = await prisma.music.create({
            data,
        });

        return music;
    }

    async update(id, data) {
        const music = await prisma.music.update({
            where: {
                id: Number(id),
            },
            data,
        }); 
        return music;
    }

    // Excluir um canal
    async delete(id) {
        await prisma.music.delete({
            where: {
                id: Number(id),
            },
        });

        return true;
    }
}

export default new MusicModel();
