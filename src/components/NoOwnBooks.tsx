const NoOwnBooks = () => {
  return (
    <div className="max-w-[197px] mx-auto mb-[60px] md:max-w-[274px] md:mb-[120px] lg:mb-0">
      <div className="w-[100px] h-[100px] flex items-center justify-center bg-dark-grey rounded-full mx-auto mb-[10px] md:w-[130px] md:h-[130px] md:mb-[20px]">
        <span className="text-50 leading-none tracking-[-1px] md:text-70 md:tracking-[-1.4px]">
          📚
        </span>
      </div>
      <p className="text-14 leading-[1.29] tracking-[-0.28px] text-center">
        To start training, add{" "}
        <span className="text-grey">some of your books</span> or from the
        recommended ones
      </p>
    </div>
  );
};

export default NoOwnBooks;
