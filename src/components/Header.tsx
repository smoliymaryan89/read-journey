import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { selectUser } from "@store/auth/authSelectors";
import { logOut } from "@store/auth/authOperations";
import { resetStore } from "@store/auth/authSlice";

import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";
import Button from "./ui/Button";
import Icon from "./ui/Icon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();
  const { name } = useAppSelector(selectUser);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogOut = () => {
    dispatch(logOut());
    dispatch(resetStore());
  };

  return (
    <header className="py-[11px] px-[20px] mb-[10px] bg-light-dark rounded-15 flex items-center justify-between md:py-[17px] md:px-[24px] md:mb-[16px] lg:px-[16px]">
      <Link to="/">
        <div className="lg:flex lg:items-center lg:gap-[4px]">
          <Icon
            className="fill-light-white"
            w={42}
            h={17}
            iconName="icon-logo"
          />
          <span className="hidden text-18 font-gilroy-bold leading-none uppercase tracking-[0.36px] lg:block">
            read journey
          </span>
        </div>
      </Link>

      <Navigation className="hidden md:block" />

      <div className="flex items-center gap-[10px] md:gap-[16px]">
        <div className="lg:flex lg:items-center lg:gap-[8px]">
          <div className="w-[35px] h-[35px] rounded-full border border-grey-20 bg-dark-grey flex items-center justify-center md:w-[40px] md:h-[40px]">
            <span className="font-gilroy-bold leading-none tracking-[-0.32px] md:leading-[1.13]">
              {[...name][0]}
            </span>
          </div>
          <p className="hidden font-gilroy-bold leading-[1.13] tracking-[-0.32px] lg:block">
            {name}
          </p>
        </div>

        <button type="button" className="md:hidden" onClick={toggleMenu}>
          <Icon
            className="stroke-light-white"
            w={28}
            iconName="icon-open-menu"
          />
        </button>

        <Button
          type="button"
          primary={false}
          title={"Log out"}
          className="hidden !h-[42px] px-[28px] !text-[16px] !leading-[1.13] !tracking-[0.32px] md:block "
          onClick={handleLogOut}
        />
      </div>

      <MobileMenu
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        handleLogOut={handleLogOut}
      />
    </header>
  );
};

export default Header;
