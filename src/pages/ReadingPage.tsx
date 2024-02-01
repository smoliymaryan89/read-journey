import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  useFinishReadingMutation,
  useGetBookInfoQuery,
  useStartReadingMutation,
} from "@store/book/bookSlice";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { selectModal } from "@store/modal/modalSelectors";
import { toggleModal } from "@store/modal/modalSlice";

import clsx from "clsx";
import toast from "react-hot-toast";
import ReadingForm, { ReadingFormData } from "@components/ReadingForm";
import BookItem from "@components/BookItem";
import Dashboard from "@components/Dashboard";
import ProgressMessage from "@components/ProgressMessage";
import getTimeLeftString from "@utils/helpers/getTimeLeft";
import Statistics from "@components/Statistics";
import DiaryList from "@components/DiaryList";
import Modal from "@components/Modal";
import AlertModalContent from "@components/AlertModalContent";
import Icon from "@components/ui/Icon";

const ReadingPage = () => {
  const { state } = useLocation();
  const [isActive, setIsActive] = useState({
    statistics: false,
    diary: true,
  });

  const dispatch = useAppDispatch();
  const { isOpen, modalName } = useAppSelector(selectModal);

  const { data: bookInfo } = useGetBookInfoQuery(state?.bookId ?? "");
  const [startReading] = useStartReadingMutation();
  const [finishReading] = useFinishReadingMutation();

  const lastSessionStatus =
    bookInfo?.progress[bookInfo?.progress.length - 1]?.status;

  const handleReadingForm = ({ page }: ReadingFormData) => {
    const pageAsNumber = typeof page === "string" ? parseFloat(page) : page;

    if (lastSessionStatus === "active") {
      finishReading({
        page: pageAsNumber,
        id: state?.bookId ?? "",
      })
        .unwrap()
        .then((res) => {
          res.status === "done" && dispatch(toggleModal("finishBook"));
        })
        .catch((err) => {
          toast.error(err.data.message);
        });
    } else {
      startReading({
        page: pageAsNumber,
        id: state?.bookId ?? "",
      })
        .unwrap()
        .catch((err) => {
          toast.error(err.data.message);
        });
    }
  };

  return (
    <>
      <Dashboard
        className={clsx(
          "md:gap-[40px]",
          bookInfo?.progress.length === 0 ||
            bookInfo?.progress[0]?.status !== "inactive"
            ? "pb-[40px] md:pb-[84px]"
            : "md:pr-[16px] md:pb-[16px] justify-between"
        )}
      >
        <ReadingForm
          handleReading={handleReadingForm}
          isReadingStarted={lastSessionStatus === "active"}
        />

        {bookInfo?.progress.length === 0 ||
        bookInfo?.progress[0]?.status !== "inactive" ? (
          <ProgressMessage />
        ) : (
          <div>
            <div className="flex items-center justify-between mb-[20px] md:mb-[16px] lg:mb-[20px]">
              <h2 className="text-18 font-gilroy-bold leading-none tracking-[-0.36px] md:text-20 md:tracking-[-0.4px]">
                {isActive.statistics ? "Statistics" : "Diary"}
              </h2>

              <ul className="flex items-center gap-[8px]">
                <li className="h-[16px] md:h-[20px]">
                  <button
                    type="button"
                    onClick={() =>
                      setIsActive({ diary: true, statistics: false })
                    }
                  >
                    <Icon
                      className={clsx(
                        " md:w-[20px] md:h-[20px]",
                        isActive.diary
                          ? "fill-light-white stroke-light-white"
                          : "fill-grey stroke-grey transition-colors duration-350 hover:fill-light-white hover:stroke-light-white"
                      )}
                      w={16}
                      iconName="icon-hourglass"
                    />
                  </button>
                </li>
                <li className="h-[16px] md:h-[20px]">
                  <button
                    type="button"
                    onClick={() =>
                      setIsActive({ diary: false, statistics: true })
                    }
                  >
                    <Icon
                      className={clsx(
                        "fill-transparent md:w-[20px] md:h-[20px]",
                        isActive.statistics
                          ? "stroke-light-white"
                          : "stroke-grey transition-colors duration-350 hover:stroke-light-white"
                      )}
                      w={16}
                      iconName="icon-diary"
                    />
                  </button>
                </li>
              </ul>
            </div>

            {isActive.statistics && (
              <p className="hidden text-grey text-14 leading-[1.29] tracking-[-0.28px] mb-[20px] max-w-[293px] lg:block">
                Each page, each chapter is a new round of knowledge, a new step
                towards understanding. By rewriting statistics, we create our
                own reading history.
              </p>
            )}

            {bookInfo && isActive.statistics && (
              <Statistics
                progress={bookInfo?.progress}
                totalPages={bookInfo?.totalPages}
              />
            )}

            {bookInfo && isActive.diary && (
              <DiaryList
                progress={bookInfo?.progress}
                totalPages={bookInfo?.totalPages}
                bookId={bookInfo?._id}
              />
            )}
          </div>
        )}
      </Dashboard>

      <section className="section md:pb-[25px] lg:pb-[53px]">
        <div className="mb-[40px] flex items-center flex-wrap gap-[10px] justify-between md:items-start md:mb-[32px] lg:mb-[44px]">
          <h1 className="title">My reading</h1>
          <p className="text-grey text-12 leading-[1.3] tracking-[-0.24px] md:text-14 md:leading-[1.29] md:tracking-[-0.28px]">
            {bookInfo && getTimeLeftString(bookInfo?.timeLeftToRead)}
          </p>
        </div>

        {bookInfo && (
          <>
            <BookItem
              className={{
                item: "mx-auto mb-[20px] md:mb-[16px] md:w-[317px] lg:mb-[25px]",
                img: "mb-[10px] cursor-default mx-auto md:mb-[25px] md:w-[169px] md:h-[256px] lg:w-[224px] lg:h-[340px]",
                title:
                  "overflow-visible !whitespace-normal font-gilroy-bold text-center mb-[5px] md:mb-[4px] md:text-20 md:tracking-[-0.4px] md:leading-none",
                text: "text-center md:text-14 md:leading-[1.29] md:tracking-[-0.28px]",
              }}
              {...bookInfo}
            />

            <Icon
              className="mx-auto fill-red md:w-[50px] md:h-[50px]"
              w={40}
              iconName={
                lastSessionStatus === "active"
                  ? "icon-stop-record"
                  : "icon-start-record"
              }
            />
          </>
        )}
      </section>

      {isOpen && modalName === "finishBook" && (
        <Modal
          className="py-[60px] px-[46px] md:!w-[342px] md:px-[50px]"
          handleModal={() => dispatch(toggleModal("finishBook"))}
        >
          <AlertModalContent
            emoji="📚"
            title="The book is read"
            text="It was an exciting journey, where each page revealed new horizons, and the characters became inseparable friends."
          />
        </Modal>
      )}
    </>
  );
};

export default ReadingPage;
