import { BookProgress } from "types/book";
import CircleProgress from "./ui/CircleProgress";

interface StatisticsProps {
  progress: BookProgress[];
  totalPages: number;
}

const Statistics = ({ progress, totalPages }: StatisticsProps) => {
  const totalPagesRead = Math.min(
    progress
      .filter(({ status }) => status === "inactive")
      .reduce((acc, page) => acc + (page.finishPage - page.startPage), 1),
    totalPages
  );

  const percentage = parseFloat(
    ((totalPagesRead / totalPages) * 100).toFixed(2)
  );

  return (
    <div className="bg-dark-grey rounded-12 py-[20px] flex flex-col items-center gap-[21px] md:py-[28px] md:w-[321px] md:gap-[16px] lg:w-[313px]">
      <CircleProgress percentage={percentage} />

      <div className="flex items-baseline gap-[15px]">
        <div className="bg-green w-[14px] h-[14px] rounded-4" />

        <div>
          <p className="text-14 leading-[1.29] tracking-[-0.28px] mb-[4px] md:text-20 md:tracking-[-0.4px] md:leading-none md:mb-[8px]">
            {percentage}%
          </p>
          <p className="text-grey text-10 leading-[1.2] tracking-[-0.2px] md:text-12 md:leading-[1.17] md:tracking-[-0.24px]">
            {totalPagesRead} pages read
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
