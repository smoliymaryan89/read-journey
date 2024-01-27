import clsx from "clsx";
import Navigation from "./Navigation";
import Button from "./ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  handleLogOut: () => void;
}

const MobileMenu = ({ isOpen, toggleMenu, handleLogOut }: MobileMenuProps) => {
  return (
    <div
      className={clsx(
        "fixed top-0 right-0 h-screen w-screen bg-overlay z-40 md:hidden transition-all duration-350",
        isOpen ? "opacity-100" : "opacity-0 invisible"
      )}
    >
      <div
        className={clsx(
          "fixed top-0 right-0 h-screen w-1/2 py-[40px] bg-dark-grey z-50 flex flex-col justify-between items-center transition-all duration-350",
          isOpen ? "translate-x-0 " : "translate-x-full "
        )}
      >
        <button
          type="button"
          className="absolute top-[34px] right-[40px]"
          onClick={toggleMenu}
        >
          <svg className="stroke-light-white" width="28" height="28">
            <use href="./src/assets/icons/sprite.svg#icon-close-menu"></use>
          </svg>
        </button>

        <div className="flex-grow flex items-center">
          <Navigation />
        </div>

        <Button
          type="button"
          primary={false}
          title={"Log out"}
          className="!h-[38px] px-[20px]"
          onClick={handleLogOut}
        />
      </div>
    </div>
  );
};

export default MobileMenu;
