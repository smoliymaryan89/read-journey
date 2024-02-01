import { useRemoveReadingMutation } from "@store/book/bookSlice";
import { BookProgress } from "types/book";

import clsx from "clsx";
import formatTime from "@utils/helpers/formatTime";
import getProgressByDate from "@utils/helpers/getProgressByDate";
import getReadingTime from "@utils/helpers/getReadingTime";
import Icon from "./ui/Icon";

interface DiaryListProps {
  progress: BookProgress[];
  totalPages: number;
  bookId: string;
}

const DiaryList = ({ progress, totalPages, bookId }: DiaryListProps) => {
  const [removeReading] = useRemoveReadingMutation();

  return (
    <div className="overflow-y-auto rounded-12 diary-list-scroll h-[211px] md:w-[321px] md:h-[252px] lg:w-[313px] lg:h-[373px]">
      <ul className="rounded-12 mr-[7px] bg-dark-grey p-[16px] pl-[41px] md:pb-[30px] md:pl-[46px]  lg:p-[20px] lg:pb-[28px] lg:pl-[50px]">
        {getProgressByDate({ progress, totalPages })?.map(
          ({ date, totalPagesRead, detail }, index) => (
            <li
              key={date}
              className={clsx(
                "relative diary-item",
                index === 0 ? "before:bg-light-white" : "before:bg-grey"
              )}
            >
              <div className="flex justify-between mb-[17px]">
                <p className="text-12 font-gilroy-bold leading-[1.3] tracking-[0.24px] md:text-16 md:leading-[1.13] md:tracking-[0.32px]">
                  {formatTime(date)}
                </p>
                <p className="text-12 text-grey leading-[1.3] tracking-[0.24px] mr-[22px] md:text-14 md:leading-[1.29] md:tracking-[-0.28px] md:mr-[28px] lg:mr-[22px]">
                  {totalPagesRead} pages
                </p>
              </div>

              <ul className="mb-[17px] md:mb-[14px]">
                {detail.map(
                  ({
                    percent,
                    startReading,
                    finishReading,
                    readingSpeed,
                    _id,
                  }) => (
                    <li className="flex justify-between mb-[27px] last:mb-0">
                      <div>
                        <p className="text-14 leading-[1.29] mb-[4px] tracking-[-0.28px] md:text-20 md:leading-none md:tracking-[-0.4px] md:mb-[8px]">
                          {percent}%
                        </p>
                        <p className="text-grey text-10 leading-[1.2] tracking-[-0.2px] md:text-12 md:leading-[1.17] md:tracking-[-0.24px]">
                          {getReadingTime(startReading, finishReading)}
                        </p>
                      </div>

                      <div className="flex gap-[8px]">
                        <div>
                          <Icon
                            className="mb-[7px] md:w-[59px] md:h-[25px]"
                            w={43}
                            h={18}
                            iconName="icon-line-diagram"
                          />
                          <p className="max-w-[43px] text-10 text-grey leading-[1.2] tracking-[-0.2px] text-center md:text-12 md:leading-[1.17] md:tracking-[-0.24px] md:max-w-[55px]">
                            {readingSpeed} pages per hour
                          </p>
                        </div>
                        <button
                          type="button"
                          className="self-start"
                          onClick={() =>
                            removeReading({ bookId, readingId: _id })
                          }
                        >
                          <Icon
                            className="stroke-grey fill-transparent md:w-[20px] md:h-[20px] lg:w-[14px] lg:h-[14px]"
                            w={14}
                            iconName="icon-trash"
                          />
                        </button>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default DiaryList;
