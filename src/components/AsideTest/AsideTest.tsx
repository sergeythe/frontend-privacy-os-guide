import testIcon from "@/assets/icons/test-icon.svg";
import { useRef } from "react";
import { Link, useLocation } from "react-router";

export const AsideTest = () => {
  const link = useRef<HTMLAnchorElement>(null);
  const location = useLocation();

  const classes = location.pathname === "/test" || "lg:flex";

  return (
    <aside
      className={`hidden ${classes} justify-center items-center h-fit w-3xs bg-sky-200 border-b-6 border-sky-300 mx-4 my-6 p-6 shadow`}
    >
      <div
        className="flex flex-col justify-center items-center p-4 size-full cursor-pointer bg-sky-400 rounded-4xl shadow hover:shadow-2xl transition-shadow"
        onClick={() => link?.current?.click()}
      >
        <img src={testIcon} alt="test" className="w-2/3 -rotate-12" />
        <span className="px-6 text-white font-unbounded text-xl">
          Test: Which Operating System should I choose?
        </span>
        <Link className="hidden" to="/test" ref={link}></Link>
      </div>
    </aside>
  );
};
