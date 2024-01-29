import clsx from "clsx";
import { BtnType } from "../types/pagination";

interface BookPaginationProps {
  page: number;
  totalPages: number;
  handlePage: (type: BtnType) => void;
}

const BookPagination = ({
  page,
  handlePage,
  totalPages,
}: BookPaginationProps) => {
  return (
    <ul className="flex items-center gap-[8px]">
      <li>
        <button
          className="w-[32px] h-[32px] border border-grey-20 rounded-full flex items-center justify-center md:w-[40px] md:h-[40px]"
          disabled={page === 1}
          onClick={() => handlePage(BtnType.Prev)}
        >
          <svg
            className={clsx(
              "fill-transparent md:w-[20px] md:h-[40px]",
              page === 1 ? "stroke-grey-20" : "stroke-light-white"
            )}
            width="16"
            height="16"
          >
            <use href="/icons/sprite.svg#icon-prev"></use>
          </svg>
        </button>
      </li>
      <li>
        <button
          className="w-[32px] h-[32px] border border-grey-20 rounded-full flex items-center justify-center md:w-[40px] md:h-[40px]"
          disabled={totalPages === page}
          onClick={() => handlePage(BtnType.Next)}
        >
          <svg
            className={clsx(
              "fill-transparent md:w-[20px] md:h-[40px]",
              totalPages === page ? "stroke-grey-20" : "stroke-light-white"
            )}
            width="16"
            height="16"
          >
            <use href="/icons/sprite.svg#icon-next"></use>
          </svg>
        </button>
      </li>
    </ul>
  );
};

export default BookPagination;
