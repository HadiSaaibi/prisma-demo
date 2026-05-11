import { faker } from "@faker-js/faker";
import { prisma } from "./lib/prisma";

async function main() {

  // Create a new author with a book
  const author = await prisma.author.create({
    data: { name: faker.person.fullName(), email: faker.internet.email() },
  });

  const publisher = await prisma.publisher.create({
    data: { name: faker.company.name() },
  });

  const genre = await prisma.genre.create({
    data: { type: "Fiction" },
  });

  const user = await prisma.user.create({
    data: { name: faker.person.fullName(), email: faker.internet.email() },
  });

  const book = await prisma.book.create({
    data: {
      title: faker.book.title(),
      authorId: author.id,
      publisherId: publisher.id,
      genres: {
        create: { genreId: genre.id, isPrimary: true },
      },
    },
  });

  await prisma.UserReview.create({
    data: {
      rating: 5,
      comment: faker.lorem.sentence(),
      bookId: book.id,
      userId: user.id,
    },
  });

  console.log("done");
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });