import clsx from "clsx";

type Type = "button" | "submit";

interface ButtonProps {
  type: Type;
  title: string;
  className?: string;
  primary?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  type = "button",
  title,
  className,
  onClick,
  primary,
  disabled,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={clsx(
        "h-[42px] rounded-30 border text-14 font-gilroy-bold leading-[1.29] tracking-[0.28px] duration-350 md:text-20 md:leading-none md:tracking-[0.4px] md:h-[52px]",
        primary
          ? "border-transparent bg-light-white text-light-dark hover:bg-transparent hover:text-current hover:border-grey-20 transition-colors"
          : "border-grey-20 bg-transparent text-current hover:bg-light-white hover:border-transparent hover:text-light-dark transition-colors",
        className
      )}
    >
      {title}
    </button>
  );
};

export default Button;
