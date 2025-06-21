import type { OS } from "@/data/types/os";

export interface Article extends OS {
  readonly site: string;
  readonly content: {
    image: string;
    paragraphs: string[];
  };
}
