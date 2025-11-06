import prisma from "../../prisma/prisma.js";

class StreamModel {
    // Obter todoas as transmissoes
    async findAll(title, page, limit) {
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

        const streams = await prisma.stream.findMany({
            skip,
            take: Number(limit),
            where,
            orderBy: {
                createdAt: "desc",
            },
            include: {
                user: {
                    select: {
                        displayName: true,
                        email: true,
                    },
                },
                channel: {
                    select: {
                        name: true,
                        description: true,
                    },
                },
                game: {
                    select: {
                        title: true,
                        description: true,
                        platform: true,
                    },
                },
            },
        });

        const totalViews = streams.length;
        const grandTotal = await prisma.stream.count({
            where,
        });

        return { totalViews, grandTotal, streams };
    }

    // Criar uma nova transmissao
    async create(data) {
        const stream = await prisma.stream.create({
            data,
        });

        return stream;
    }

    // Excluir um transmissao
    async delete(id) {
        await prisma.stream.delete({
            where: {
                id: Number(id),
            },
        });

        return true;
    }
}

export default new StreamModel();
