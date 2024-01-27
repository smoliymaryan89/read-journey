import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { selectUser } from "@store/auth/authSelectors";
import { logOut } from "@store/auth/authOperations";
import { resetStore } from "@store/auth/authSlice";
import { toggleModal } from "@store/modal/modalSlice";
import { selectModal } from "@store/modal/modalSelectors";

import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";
import Button from "./ui/Button";

const Header = () => {
  const dispatch = useAppDispatch();
  const { name } = useAppSelector(selectUser);
  const { isOpen } = useAppSelector(selectModal);

  const toggleMenu = () => {
    dispatch(toggleModal("mobileMenu"));
  };

  const handleLogOut = () => {
    dispatch(logOut());
    dispatch(resetStore());
  };

  return (
    <header className="py-[11px] px-[20px] mb-[10px] bg-light-dark rounded-15 flex items-center justify-between md:py-[17px] md:px-[24px] md:mb-[16px] lg:px-[16px]">
      <Link to="/">
        <div className="lg:flex lg:items-center lg:gap-[4px]">
          <svg className="fill-light-white" width="42" height="17">
            <use href="./src/assets/icons/sprite.svg#icon-logo"></use>
          </svg>
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
          <svg className="stroke-light-white" width="28" height="28">
            <use href="./src/assets/icons/sprite.svg#icon-open-menu"></use>
          </svg>
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
