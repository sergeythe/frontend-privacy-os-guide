import { memo, type ComponentProps } from "react";

export const NextButton = memo(
  ({
    onClick,
    disabled,
    children,
  }: Pick<ComponentProps<"button">, "onClick" | "disabled" | "children">) => {
    console.log("nextbutton render");
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className="block disabled:bg-sky-300 bg-sky-600  text-sky-100 
        font-unbounded uppercase w-48 p-2 mx-auto my-2 
        active:bg-sky-400 hover:bg-sky-500 transition-colors select-none"
      >
        {children}
      </button>
    );
  }
);
