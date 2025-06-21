import type { osVariant } from "@/data/types/osVariant";

export interface IQuestion {
  question: string;
  answers: {
    [K in osVariant]: string;
  };
}
