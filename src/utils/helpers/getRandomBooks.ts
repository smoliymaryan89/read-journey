import { Book } from "types/book";

const getRandomBooks = (books: Book[], limit: number) => {
  const randomBooks = [...books].sort(() => 0.5 - Math.random());
  return randomBooks.slice(0, limit);
};

export default getRandomBooks;
