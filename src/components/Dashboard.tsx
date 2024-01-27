import clsx from "clsx";
import { ReactNode } from "react";

interface DashboardProps {
  children: ReactNode;
  className?: string;
}

const Dashboard = ({ children, className }: DashboardProps) => {
  return (
    <aside
      className={clsx(
        "p-[20px] rounded-30 bg-light-dark mb-[10px] md:mb-[16px] md:p-[32px] md:flex md:gap-[32px] lg:mb-0 lg:pt-[40px] lg:pb-[20px] lg:px-[20px] lg:flex-col lg:gap-[20px]",
        className
      )}
    >
      {children}
    </aside>
  );
};

export default Dashboard;
