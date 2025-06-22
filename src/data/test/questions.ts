import type { IQuestion } from "@/data/types/question";

export const Questions: IQuestion[] = [
  {
    question:
      "How often do you use the internet, and how important is anonymity to you?  ",
    answers: {
      whonix: "Only for rare, safe tasks — no risky activity",
      tails:
        "I use the internet frequently from different locations, and anonymity without leaving traces is important",
      qubes:
        "I work online constantly and want to isolate different tasks from each other",
    },
  },
  {
    question: "How important is the mobility of the system to you?",
    answers: {
      whonix: "Desktop setup is fine, doesn’t need to be portable",
      tails: "I want an OS I can run from a USB stick and leave no trace",
      qubes:
        " I prefer a stationary system with strong separation between trusted and untrusted environments",
    },
  },
  {
    question: "What’s your technical skill level?",
    answers: {
      whonix: "I’m an advanced user and comfortable with the terminal",
      tails:
        "Intermediate — I can follow instructions but don’t want to get too deep",
      qubes:
        "I enjoy complex technologies and experimenting, and I’m willing to learn",
    },
  },
  {
    question: "Which privacy threats concern you most?",
    answers: {
      whonix: "Surveillance from ISPs or the system itself",
      tails: "Physical device seizure or public network tracking",
      qubes: "Malware attacks or exploits bypassing app isolation",
    },
  },
  {
    question:
      "Do you need long-term use of the system, like installing software or saving data?",
    answers: {
      whonix:
        "Yes, I want to keep everything and manage the system like a regular OS",
      tails: "No, I prefer everything to be erased after each session",
      qubes:
        "Yes, but I want strict separation between projects and trust levels",
    },
  },
];
