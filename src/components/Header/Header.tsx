import { Link, useLocation } from "react-router";
import testIcon from "@/assets/icons/test-icon.svg";

export const Header = () => {
  const location = useLocation();
  const classes =
    location.pathname === "/test" ? "hidden" : "relative lg:hidden";

  return (
    <header
      className="bg-sky-300 h-20 lg:h-14 flex justify-between flex-col lg:flex-row p-4 text-black shadow select-none
     border-b-6 border-b-sky-400"
    >
      <Link
        to="/"
        className="relative block cursor-pointer h-6
        after:absolute after:block after:bg-black after:w-48 after:h-0 after:transition-all after:-left-1 after:top-3 hover:after:h-0.5 hover:after:top-0
        before:absolute before:block before:bg-black before:w-48 before:h-0 before:transition-all before:-left-1 before:bottom-3 hover:before:h-0.5 hover:before:bottom-0"
      >
        <span className="font-unbounded">PRIVACY OS GUIDE</span>
      </Link>
      <a
        href="https://github.com/sergeythe"
        target="blank"
        className="block cursor-pointer"
      >
        Github
      </a>
      <Link
        to="/test"
        className={`${classes} bottom-13 self-end w-40 h-16 overflow-clip text-xs font-medium`}
      >
        <img src={testIcon} alt="" className="float-left h-12" />
        Test: Which Operating System should I choose?
      </Link>
    </header>
  );
};
