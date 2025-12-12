import { create } from 'zustand';

interface SceneState {
  currentUniverse: string | null;
  isLoading: boolean;
  cameraPosition: [number, number, number];
  setCurrentUniverse: (universe: string | null) => void;
  setLoading: (loading: boolean) => void;
  setCameraPosition: (position: [number, number, number]) => void;
}

export const useSceneStore = create<SceneState>((set) => ({
  currentUniverse: null,
  isLoading: false,
  cameraPosition: [0, 0, 5],
  setCurrentUniverse: (universe) => set({ currentUniverse: universe }),
  setLoading: (loading) => set({ isLoading: loading }),
  setCameraPosition: (position) => set({ cameraPosition: position }),
}));
