import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useGetRecommendedBooksQuery } from "@store/book/bookSlice";

import getRandomBooks from "@utils/helpers/getRandomBooks";
import Loader from "./ui/Loader";
import BookList from "./BookList";
import Icon from "./ui/Icon";

const Recommendations = () => {
  const { data, isFetching } = useGetRecommendedBooksQuery({});

  const books = useMemo(
    () => getRandomBooks(data?.results ?? [], 3),
    [data?.results]
  );

  return (
    <div className="rounded-12 p-[20px] bg-dark-grey md:w-[313px] md:py-[26px] lg:py-[20px]">
      <h2 className="text-18 font-gilroy-bold leading-none tracking-[-0.36px] mb-[14px] md:text-20 md:tracking-[-0.4px] md:mb-[20px]">
        Recommended books
      </h2>

      {isFetching ? (
        <Loader className="h-[161px]" />
      ) : (
        books && (
          <BookList
            books={books}
            styles={{
              list: "!gap-[20px] sm:!justify-start mb-[11px] md:mb-[20px]",
              item: "w-[71px]",
              img: "!h-[107px] !cursor-default",
              title: "!text-10 !leading-[1.2] !tracking-[-0.2px]",
              text: "overflow-hidden whitespace-nowrap overflow-ellipsis",
            }}
          />
        )
      )}

      <Link
        to="/"
        className="text-12 leading-[1.17] tracking-[-0.24px] text-grey underline hover:text-current transition-colors duration-350 flex justify-between items-center"
      >
        Home
        <Icon className="stroke-light-white" w={20} iconName="icon-log-in" />
      </Link>
    </div>
  );
};

export default Recommendations;
