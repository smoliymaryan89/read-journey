import { useEffect, useState } from "react";
import { useGetRecommendedBooksQuery } from "@store/book/bookSlice";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { selectModal } from "@store/modal/modalSelectors";
import { toggleModal } from "@store/modal/modalSlice";
import { BtnType } from "../types/pagination";
import { Book } from "types/book";

import FilterForm, { FilterData } from "@components/FilterForm";
import BookPagination from "@components/BookPagination";
import Dashboard from "@components/Dashboard";
import QuoteBlock from "@components/QuoteBlock";
import WorkoutSteps from "@components/WorkoutSteps";
import useWindowSize from "@hooks/useWindowSize";
import Loader from "@components/ui/Loader";
import BookList from "@components/BookList";
import Modal from "@components/Modal";
import BookItem from "@components/BookItem";

const RecommendedPage = () => {
  const [limit, setLimit] = useState(2);
  const [page, setPage] = useState(1);
  const [modalData, setModalData] = useState<Book | null>(null);
  const [filter, setFilter] = useState<FilterData>({
    title: "",
    author: "",
  });

  const dispatch = useAppDispatch();
  const { width } = useWindowSize();
  const { isOpen, modalName } = useAppSelector(selectModal);
  const { data, isFetching } = useGetRecommendedBooksQuery({
    limit,
    page,
    title: filter.title,
    author: filter.author,
  });

  useEffect(() => {
    if (width < 768) {
      setLimit(2);
    } else if (width > 768 && width < 1439) {
      setLimit(8);
    } else {
      setLimit(10);
    }
  }, [width]);

  const handlePage = (type: BtnType) => {
    if (type === BtnType.Prev) {
      setPage((prev) => prev - 1);
    } else {
      setPage((prev) => prev + 1);
    }
  };

  const handleFilter = (data: FilterData) => {
    setFilter(data);
    setPage(1);
  };

  const handleModal = (data?: Book) => {
    setModalData(data ?? null);
    dispatch(toggleModal("recommendedBook"));
  };

  return (
    <>
      <Dashboard>
        <FilterForm handleFilter={handleFilter} />

        <WorkoutSteps />

        <QuoteBlock />
      </Dashboard>

      <section className="section">
        <div className="flex justify-between mb-[22px] md:mb-[20px]">
          <h1 className="title">Recommended</h1>

          {data && (
            <BookPagination
              page={page}
              handlePage={handlePage}
              totalPages={data?.totalPages}
            />
          )}
        </div>

        {isFetching ? (
          <Loader className="h-[248px] md:h-[523px]" />
        ) : data && data.results.length > 0 ? (
          <BookList books={data} handleModal={handleModal} />
        ) : (
          <div className="flex items-center justify-center h-3/4">
            <p className="text-14 md:text-2xl lg:text-28 text-light-white">
              No books found for your request 😓
            </p>
          </div>
        )}
      </section>

      {isOpen && modalName === "recommendedBook" && modalData && (
        <Modal handleModal={handleModal}>
          <BookItem
            isModal={true}
            handleModal={handleModal}
            className={{
              item: "w-[194px] md:w-[317px]",
              img: "h-[213px] w-[140px] mb-[16px] mx-auto md:w-[153px] md:h-[233px]",
              description: "mb-[20px] md:mb-[32px]",
              title:
                "text-center mb-[2px] text-18 overflow-visible !whitespace-normal font-gilroy-bold leading-none tracking-[-0.36px] md:text-20 md:tracking-[-0.4px]",
              text: "text-center mb-[4px] text-grey text-12 leading-[1.17] tracking-[-0.24px] md:text-14 md:leading-[1.29] md:tracking-[-0.28px]",
            }}
            {...modalData}
          />
        </Modal>
      )}
    </>
  );
};

export default RecommendedPage;
