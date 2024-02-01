import clsx from "clsx";
import Icon from "./ui/Icon";

interface PaginationBtnProps {
  disabled: boolean;
  iconName: string;
  className: string;
  onClick: () => void;
}

const PaginationBtn = ({
  disabled,
  onClick,
  iconName,
  className,
}: PaginationBtnProps) => {
  return (
    <button
      type="button"
      className="w-[32px] h-[32px] border border-grey-20 rounded-full flex items-center justify-center md:w-[40px] md:h-[40px]"
      disabled={disabled}
      onClick={onClick}
    >
      <Icon
        className={clsx("fill-transparent md:w-[20px] md:h-[40px]", className)}
        w={16}
        iconName={iconName}
      />
    </button>
  );
};

export default PaginationBtn;
