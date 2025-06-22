import { useRef, type ComponentProps } from "react";
import type { OS } from "@/data/types/os";
import { Link } from "react-router";

export const ButtonOS = ({
  os,
  ...props
}: ComponentProps<"button"> & { os: OS }) => {
  const link = useRef<HTMLAnchorElement>(null);

  return (
    <button
      onClick={() => link.current?.click()}
      {...props}
      className="bg-sky-500 rounded-2xl p-4 text-xl shadow cursor-pointer text-sky-50 select-none font-bold min-w-40 flex-1
       hover:shadow-xl hover:bg-sky-600 transition-all"
    >
      {os.title}
      <Link ref={link} to={`/articles/${os.slug}`} className="hidden" />
    </button>
  );
};
