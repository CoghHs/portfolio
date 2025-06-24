import { create } from "zustand";

type IntroState = {
  introDone: boolean;
  introExited: boolean;
  setIntroDone: (v: boolean) => void;
  setIntroExited: (v: boolean) => void;
};

export const useIntroStore = create<IntroState>((set) => ({
  introDone: false,
  introExited: false,
  setIntroDone: (v) => set({ introDone: v }),
  setIntroExited: (v) => set({ introExited: v }),
}));
