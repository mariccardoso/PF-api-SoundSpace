import prisma from "../../prisma/prisma.js";

class ChannelModel {
    // Obter todos os canals
    async findAll(name, isLive, page, limit) {
        if (Number(page) < 1) {
            page = 1;
        }
        if (Number(limit) < 1 || Number(limit) > 100) {
            limit = 10;
        }
        const skip = (Number(page) - 1) * Number(limit);
        //                4 - 1 = 3 * 10 = 30
        const where = {};

        if (name) {
            where.name = {
                contains: name,
            };
        }

        if (isLive) {
            where.isLive = {
                contains: isLive,
            };
        }

        const channels = await prisma.channel.findMany({
            skip,
            take: Number(limit),
            where,
            orderBy: {
                createdAt: "desc",
            },
            include: {
                streams: true,
                user: {
                    select: {
                        displayName: true,
                        email: true,
                    },
                },
            },
        });

        const totalViews = channels.length;
        const grandTotal = await prisma.channel.count({
            where,
        });

        return { totalViews, grandTotal, channels };
    }

    // Criar um novo canal
    async create(data) {
        const channel = await prisma.channel.create({
            data,
        });

        return channel;
    }

    // Excluir um canal
    async delete(id) {
        await prisma.channel.delete({
            where: {
                id: Number(id),
            },
        });

        return true;
    }
}

export default new ChannelModel();
