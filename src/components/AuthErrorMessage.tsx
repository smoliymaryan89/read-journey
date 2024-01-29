import clsx from "clsx";

interface AuthErrorMessageProps {
  message: string;
  isError?: boolean;
}

const AuthErrorMessage = ({
  message,
  isError = true,
}: AuthErrorMessageProps) => {
  return (
    <p
      className={clsx(
        "absolute left-[14px] bottom-[-16px] text-10 leading-[1.2] tracking-[-0.2px] md:text-12 md:leading-[1.17] md:tracking-[-0.24] md:bottom-[-22px]",
        isError ? "text-red" : "text-green"
      )}
    >
      {message}
    </p>
  );
};

export default AuthErrorMessage;
