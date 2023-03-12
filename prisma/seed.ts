import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const user = {
        email: 'admin@admin.com',
        password: '12345678',
        profile: 1,
    };

    await prisma.user.create({
        data: {
            email: user.email,
            password: user.password,
            profile: user.profile
        }
    });

    const store = {
        name: 'Curtytech',
    };
    await prisma.store.create({
        data: {
            name: store.name,
        }
    });

    await prisma.userStore.create({
        data: {
            id_user: 1,
            id_store: 1,
        }
    });

    const categories = {
        name: 'Acessórios',
    };
    await prisma.category.create({
        data: {
            name: categories.name,
        }
    });

}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
