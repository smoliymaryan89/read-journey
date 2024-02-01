import { useLocation, useNavigate } from "react-router-dom";
import {
  useAddBookToLibraryMutation,
  useRemoveBookFromLibraryMutation,
} from "@store/book/bookSlice";
import { Book } from "types/book";

import clsx from "clsx";
import toast from "react-hot-toast";
import Button from "./ui/Button";
import Icon from "./ui/Icon";

interface BookItemProps extends Omit<Book, "recommend"> {
  isModal?: boolean;
  className?: {
    img?: string;
    title?: string;
    text?: string;
    item?: string;
    description?: string;
  };
  isSuccess?: boolean;
  isButton?: boolean;
  handleModal?: (data?: Book) => void;
}

const BookItem = ({
  _id,
  title,
  totalPages,
  imageUrl,
  author,
  isModal,
  className,
  handleModal,
  isButton,
}: BookItemProps) => {
  const [addBook, { isLoading }] = useAddBookToLibraryMutation();
  const [removeBook] = useRemoveBookFromLibraryMutation();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <li className={clsx("w-[137px] list-none", className?.item)}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          width={137}
          height={208}
          className={clsx(
            "w-full h-[208px] rounded-8 mb-[8px] object-cover cursor-pointer",
            className?.img
          )}
          onClick={() =>
            handleModal &&
            handleModal({ _id, title, totalPages, imageUrl, author })
          }
        />
      ) : (
        <div className="w-full h-[207px] bg-dark-grey rounded-8 mb-[8px] flex items-center justify-center cursor-pointer">
          <img
            src="/images/book.png"
            className={"w-[137px] h-[90px]"}
            onClick={() =>
              handleModal &&
              handleModal({ _id, title, totalPages, imageUrl, author })
            }
          />
        </div>
      )}

      <div
        className={clsx(
          pathname === "/library" && isButton && "flex items-center gap-[14px]"
        )}
      >
        <div
          className={clsx(
            pathname === "/library" && isButton && "w-[95px]",
            className?.description
          )}
        >
          <h2
            className={clsx(
              "mb-[2px] text-14 font-gilroy-bold leading-[1.29] tracking-[-0.28px] overflow-hidden whitespace-nowrap overflow-ellipsis",
              className?.title
            )}
          >
            {title}
          </h2>
          <p
            className={clsx(
              "text-10 leading-[1.2] tracking-[-0.2px] text-grey",
              className?.text
            )}
          >
            {author}
          </p>

          {isModal && (
            <p className="text-center text-10 leading-[1.2] tracking-[-0.2px]">
              {totalPages} pages
            </p>
          )}
        </div>

        {pathname === "/library" && isButton && (
          <button
            type="button"
            onClick={() => removeBook(_id)}
            className="flex items-center justify-center bg-red-10 w-[28px] h-[28px] border border-red-20 rounded-full hover:border-light-red transition-colors duration-350"
          >
            <Icon
              className="stroke-light-red fill-transparent"
              w={14}
              iconName="icon-trash"
            />
          </button>
        )}
      </div>

      {isModal && (
        <Button
          disabled={isLoading}
          type="button"
          className="block px-[24px] h-[42px] mx-auto md:h-[46px] md:px-[28px] md:!text-16 md:!leading-[1.13] md:!tracking-[0.32px]"
          title={pathname === "/library" ? "Start reading" : "Add to library"}
          primary={false}
          onClick={() => {
            pathname === "/library"
              ? (navigate("/reading", { state: { bookId: _id } }),
                handleModal && handleModal())
              : (async () => {
                  try {
                    await addBook(_id).unwrap();
                    toast.success(
                      "The book has been successfully added to your library!"
                    );
                  } catch (e) {
                    toast.error(
                      "The book has already been added to your library!"
                    );
                  }
                })();
          }}
        />
      )}
    </li>
  );
};

export default BookItem;
