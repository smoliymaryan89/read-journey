import clsx from "clsx";
import { PuffLoader } from "react-spinners";

interface LoaderProps {
  className: string;
}

const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={clsx("flex items-center justify-center", className)}>
      <PuffLoader size={80} color="#F9F9F9" />
    </div>
  );
};

export default Loader;
