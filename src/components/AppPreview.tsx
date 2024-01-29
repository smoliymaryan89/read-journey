const AppPreview = () => {
  return (
    <div className="bg-light-dark rounded-30 w-full pt-[20px] overflow-hidden md:hidden lg:flex lg:justify-center">
      <picture className="self-end">
        <source
          media="(min-width: 1440px)"
          srcSet="/images/auth/phone_desk@1x.webp 1x,
            /images/auth/phone_desk@2x.webp 2x"
          type="image/webp"
        />
        <source
          media="(min-width: 1440px)"
          srcSet="/images/auth/phone_desk@1x.png 1x,
            /images/auth/phone_desk@2x.png 2x"
          type="image/png"
        />
        <source
          sizes="(max-width: 767px)"
          srcSet="/images/auth/phone_mob@1x.webp 1x,
            /images/auth/phone_mob@2x.webp 2x"
          type="image/webp"
        />
        <source
          sizes="(max-width: 767px)"
          srcSet="/images/auth/phone_mob@1x.png 1x,
            /images/auth/phone_mob@2x.png 2x"
          type="image/png"
        />
        <img
          src="/images/auth/phone_desk@1x.png"
          alt="App Preview"
          loading="lazy"
          className="mx-auto"
        />
      </picture>
    </div>
  );
};

export default AppPreview;
