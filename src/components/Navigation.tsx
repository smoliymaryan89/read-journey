import clsx from "clsx";
import navigation from "@utils/data/navigation";

import { NavLink } from "react-router-dom";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  return (
    <nav className={clsx(className)}>
      <ul className="md:flex md:items-center md:gap-[32px] lg:gap-[40px]">
        {navigation.map(({ path, label }) => (
          <li key={label} className="mb-[20px] md:mb-0">
            <NavLink
              to={path}
              className={({ isActive }) =>
                clsx(
                  "relative inline-block text-14 leading-[1.29] tracking-[-0.28px] md:text-16 md:leading-[1.13] md:tracking-[-0.32px]",
                  isActive
                    ? "text-current after:absolute after:content-[''] after:block after:left-1/2 after:-translate-x-1/2 after:-bottom-[4px] md:after:-bottom-[8px] after:w-full after:h-[3px] after:bg-blue after:rounded-2"
                    : "text-grey"
                )
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
