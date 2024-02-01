import clsx from "clsx";
import Navigation from "./Navigation";
import Button from "./ui/Button";
import Icon from "./ui/Icon";

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
          <Icon
            className="stroke-light-white"
            w={28}
            iconName="icon-close-menu"
          />
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
