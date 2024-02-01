import clsx from "clsx";
import Icon from "./Icon";

interface AuthIconValidationProps {
  touched: boolean | undefined;
  errors: string | undefined;
}

const AuthIconValidation = ({ touched, errors }: AuthIconValidationProps) => {
  return (
    <Icon
      className={clsx(
        "absolute right-[16px] top-[13px] md:right-[18px] md:top-[15px] md:w-[20px] md:h-[20px]",
        touched && errors ? "fill-red" : touched && !errors ? "fill-green" : ""
      )}
      w={18}
      iconName={
        touched && errors
          ? "icon-error"
          : touched && !errors
          ? "icon-check"
          : ""
      }
    />
  );
};

export default AuthIconValidation;
