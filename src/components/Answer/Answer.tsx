import type { osVariant } from "@/data/types/osVariant";
import { memo } from "react";

interface AnswerProps {
  id: number;
  answer: string;
  variant: osVariant;
  checked: boolean;
  onChoose: (variant: osVariant) => void;
}

export const Answer = memo(
  ({ id, answer, variant, checked, onChoose }: AnswerProps) => {
    const classes = checked
      ? "border-sky-400 bg-sky-300 border-l-sky-100 border-l-10"
      : "border-sky-500 bg-sky-400 border-l-20";

    return (
      <label
        className={`block border-b-4 ${classes} select-none p-2 m-2 transition-all lg:max-w-2/3 lg:mx-auto`}
        htmlFor={variant}
      >
        <input
          type="radio"
          checked={checked}
          onChange={() => onChoose(variant)}
          name={id.toString()}
          id={variant}
          className=" appearance-none"
        />
        <span>{answer}</span>
      </label>
    );
  }
);
