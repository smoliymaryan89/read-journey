import { AddedBookResponse, Book, BookListResponse } from "types/book";
import BookItem from "./BookItem";
import clsx from "clsx";

interface BookListProps {
  books: BookListResponse | AddedBookResponse[] | Book[];
  handleModal?: () => void;
  styles?: {
    list?: string;
    item?: string;
    img?: string;
    title?: string;
    text?: string;
  };
  isButton?: boolean;
}

const BookList = ({ books, handleModal, styles, isButton }: BookListProps) => {
  const booksArray = Array.isArray(books) ? books : books.results;

  return (
    <ul
      className={clsx(
        "flex flex-wrap gap-[21px] sm:justify-center md:gap-x-[25px] md:gap-y-[27px] lg:gap-x-[20px]",
        styles?.list
      )}
    >
      {booksArray.map(({ _id, title, author, imageUrl, totalPages }) => (
        <BookItem
          key={_id}
          _id={_id}
          title={title}
          author={author}
          imageUrl={imageUrl}
          totalPages={totalPages}
          handleModal={handleModal}
          className={{ ...styles }}
          isButton={isButton}
        />
      ))}
    </ul>
  );
};

export default BookList;
