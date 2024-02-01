import { Link } from "react-router-dom";
import clsx from "clsx";
import Icon from "./ui/Icon";
import workoutSteps from "@utils/data/workoutSteps";

const WorkoutSteps = () => {
  return (
    <div className="rounded-12 p-[20px] bg-dark-grey md:w-[313px] md:pr-[40px]">
      <h2 className="text-18 font-gilroy-bold leading-none tracking-[-0.36px] mb-[20px] md:text-20 md:tracking-[-0.4px] md:mb-[40px]">
        Start your workout
      </h2>

      <ul className="mb-[14px] md:mb-[20px]">
        {workoutSteps.map(({ text, span }, index) => (
          <li
            className={clsx(
              "relative text-14 leading-[1.29] tracking-[-0.28px] ml-[52px] before:w-[40px] before:h-[40px] before:rounded-full before:bg-light-white before:text-light-dark before:text-center before:text-18 before:font-gilroy-bold before:leading-none before:tracking-[-0.36px] before:flex before:items-center before:justify-center before:absolute before:top-0 before:left-[-52px] before:md:w-[44px] before:md:h-[44px] before:md:text-20 before:md:tracking-[-0.4px] md:before:left-[-56px]",
              index === 0
                ? "mb-[20px] before:content-['1'] max-w-[193px]"
                : "before:content-['2'] md:max-w-[197px]"
            )}
          >
            {text} <span className="text-grey">{span}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/library"
        className="text-14 leading-[1.29] tracking-[-0.28px] text-grey underline hover:text-current transition-colors duration-350 flex justify-between items-center"
      >
        My library
        <Icon className="stroke-light-white" w={24} iconName="icon-log-in" />
      </Link>
    </div>
  );
};

export default WorkoutSteps;
