const AuthHeader = () => {
  return (
    <>
      <div className="mb-[40px] flex items-center gap-[4px] md:mb-[157px] lg:mb-[107px]">
        <svg className="fill-light-white" width="42" height="17">
          <use href="/icons/sprite.svg#icon-logo"></use>
        </svg>
        <span className="hidden text-18 font-gilroy-bold leading-none uppercase tracking-[0.36px] md:block">
          read journey
        </span>
      </div>
      <h1 className="text-32 font-gilroy-bold leading-none tracking-[0.64px] mb-[20px] md:text-64 md:leading-[0.94] md:tracking-[1.28px] md:w-[444px] md:mb-[40px]">
        Expand your mind, reading <span className="text-grey-50">a book</span>
      </h1>
    </>
  );
};

export default AuthHeader;
