import { create } from "zustand";
import { persist } from "zustand/middleware";

type PerkId = string;

interface PerkState {
  selectedMajor: PerkId | null;
  selectedMinor: PerkId | null;
  selectMajor: (id: PerkId) => void;
  selectMinor: (id: PerkId) => void;
  resetPerks: () => void;
}

export const usePerkStore = create<PerkState>()(
  persist(
    (set) => ({
      selectedMajor: null,
      selectedMinor: null,
      selectMajor: (id) =>
        set({ selectedMajor: id }),
      selectMinor: (id) =>
        set({ selectedMinor: id }),
      resetPerks: () =>
        set({
          selectedMajor: null,
          selectedMinor: null,
        }),
    }),
    { name: "perk-store" }
  )
);
