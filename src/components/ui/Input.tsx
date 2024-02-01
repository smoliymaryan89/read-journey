import { ChangeEvent, FocusEvent, ReactNode } from "react";
import clsx from "clsx";
import Icon from "./Icon";

type Type = "text" | "email" | "password" | "number";

interface InputProps {
  id: string;
  type: Type;
  label: string;
  inputStyles: string;
  placeholder?: string;
  wrapperStyles?: string;
  name: string;
  value: string;
  icon?: boolean;
  showPassword?: boolean;
  children?: ReactNode;
  touched?: boolean;
  errors?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  toggleShowPassword?: () => void;
}

const Input = ({
  id,
  type = "text",
  label,
  name,
  inputStyles,
  wrapperStyles,
  value,
  onChange,
  onBlur,
  showPassword,
  toggleShowPassword,
  icon,
  children,
  touched,
  errors,
  placeholder,
}: InputProps) => {
  return (
    <div className={clsx("relative", wrapperStyles)}>
      <label
        htmlFor={id}
        className="text-grey text-12 leading-[1.3] tracking-[-0.24px] absolute top-[14px] left-[14px] md:text-14 md:leading-[1.29] md:tracking-[-0.28px] md:top-[16px]"
      >
        {label}
      </label>
      <input
        id={id}
        type={showPassword ? "text" : type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className={clsx(
          "w-full h-[44px] bg-dark-grey border border-transparent outline-none placeholder:text-light-white rounded-12 py-[14px] text-12 leading-[1.3] tracking-[-0.24px] hover:border-grey-10 transition-colors duration-350 md:h-[50px] md:text-14 md:leading-[1.29] md:tracking-[-0.28px] md:py-[16px]",
          inputStyles
        )}
      />
      {icon && (
        <button
          type="button"
          className={clsx(
            "absolute top-[13px] z-[1] outline-none md:top-[15px]",
            (touched && errors) || (touched && !errors)
              ? "right-[45px] md:right-[50px]"
              : "right-[16px]"
          )}
          onClick={toggleShowPassword}
        >
          <Icon
            className="stroke-light-white md:w-[20px] md:h-[20px]"
            w={18}
            iconName={showPassword ? "icon-eye" : "icon-eye-off"}
          />
        </button>
      )}

      {children}
    </div>
  );
};

export default Input;
