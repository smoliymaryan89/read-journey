const QuoteBlock = () => {
  return (
    <div className="hidden lg:flex items-center gap-[14px] pt-[15px] pb-[14px] px-[20px] bg-dark-grey rounded-12 w-[313px] ">
      <span className="text-40 leading-none tracking-[-0.8px] text-center">
        📚
      </span>
      <p className="text-14 leading-[1.29] tracking-[-0.28px] text-grey">
        "Books are <span className="text-light-white">windows</span> to the
        world, and reading is a journey into the unknown."
      </p>
    </div>
  );
};

export default QuoteBlock;
