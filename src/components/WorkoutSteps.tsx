import { Link } from "react-router-dom";

const WorkoutSteps = () => {
  return (
    <div className="rounded-12 p-[20px] bg-dark-grey md:w-[313px] md:pr-[40px]">
      <h2 className="text-18 font-gilroy-bold leading-none tracking-[-0.36px] mb-[20px] md:text-20 md:tracking-[-0.4px] md:mb-[40px]">
        Start your workout
      </h2>

      <ul>
        <li className="relative text-14 leading-[1.29] tracking-[-0.28px] ml-[52px] mb-[20px] before:content-['1'] max-w-[193px] before:w-[40px] before:h-[40px] before:rounded-full before:bg-light-white before:text-light-dark before:text-center before:text-18 before:font-gilroy-bold before:leading-none before:tracking-[-0.36px] before:flex before:items-center before:justify-center before:absolute before:top-0 before:left-[-52px]  before:md:w-[44px] before:md:h-[44px] before:md:text-20 before:md:tracking-[-0.4px] md:before:left-[-56px]">
          Create a personal library:{" "}
          <span className="text-grey">
            add the books you intend to read to it.
          </span>
        </li>
        <li className="relative text-14 leading-[1.29] tracking-[-0.28px] ml-[52px] mb-[14px] before:content-['2'] before:w-[40px] before:h-[40px] before:rounded-full before:bg-light-white before:text-light-dark before:text-center before:text-18 before:font-gilroy-bold before:leading-none before:tracking-[-0.36px] before:flex before:items-center before:justify-center before:absolute before:top-0 before:left-[-52px] before:md:w-[44px] before:md:h-[44px] before:md:text-20 before:md:tracking-[-0.4px] md:before:left-[-56px] md:mb-[20px] md:max-w-[197px]">
          Create your first workout:{" "}
          <span className="text-grey">
            define a goal, choose a period, start training.
          </span>
        </li>
      </ul>

      <Link
        to="/library"
        className="text-14 leading-[1.29] tracking-[-0.28px] text-grey underline hover:text-current transition-colors duration-350 flex justify-between items-center"
      >
        My library
        <svg className="stroke-light-white" width="24" height="24">
          <use href="./src/assets/icons/sprite.svg#icon-log-in"></use>
        </svg>
      </Link>
    </div>
  );
};

export default WorkoutSteps;
