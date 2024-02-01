import { BtnType } from "../types/pagination";
import PaginationBtn from "./PaginationBtn";

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
        <PaginationBtn
          disabled={page === 1}
          onClick={() => handlePage(BtnType.Prev)}
          iconName="icon-prev"
          className={page === 1 ? "stroke-grey-20" : "stroke-light-white"}
        />
      </li>
      <li>
        <PaginationBtn
          disabled={totalPages === page}
          onClick={() => handlePage(BtnType.Next)}
          iconName="icon-next"
          className={
            totalPages === page ? "stroke-grey-20" : "stroke-light-white"
          }
        />
      </li>
    </ul>
  );
};

export default BookPagination;
