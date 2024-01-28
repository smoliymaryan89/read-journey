const ProgressMessage = () => {
  return (
    <div className="md:w-[305px]">
      <h2 className="text-18 font-gilroy-bold leading-none tracking-[-0.36px] mb-[14px] md:text-20 md:tracking-[-0.4px]">
        Progress
      </h2>
      <p className="text-grey text-14 leading-[1.29] tracking-[-0.28px] mb-[20px] md:mb-[50px]">
        Here you will see when and how much you read. To record, click on the
        red button above.
      </p>

      <div className="w-[80px] h-[80px] bg-dark-grey rounded-full mx-auto flex items-center justify-center md:w-[100px] md:h-[100px]">
        <span className="text-32 leading-none tracking-[-0.64px] md:text-50 md:tracking-[-1px]">
          🌟
        </span>
      </div>
    </div>
  );
};

export default ProgressMessage;
