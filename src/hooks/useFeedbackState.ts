import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

export interface Feedback {
  id: string;
  text: string;
  likes: number;
  dislikes: number;
  createdAt: string;
}

export type SortType = "date" | "popularity";


interface FeedbackStore {
  feedbacks: Feedback[];
  sortBy: SortType;
  setSort: (type: SortType) => void;
  addFeedback: (text: string) => void;
  deleteFeedback: (id: string) => void;
  likeFeedback: (id: string) => void;
  dislikeFeedback: (id: string) => void;
}

export const useFeedbackStore = create<FeedbackStore>((set) => ({
  feedbacks: [],
  sortBy: "date",
  setSort: (type) => set({ sortBy: type }),

  addFeedback: (text) =>
    set((state) => ({
      feedbacks: [
        ...state.feedbacks,
        {
          id: uuidv4(),
          text,
          likes: 0,
          dislikes: 0,
          createdAt: new Date().toISOString(),
        },
      ],
    })),

  deleteFeedback: (id) =>
    set((state) => ({
      feedbacks: state.feedbacks.filter((fb) => fb.id !== id),
    })),

  likeFeedback: (id) =>
    set((state) => ({
      feedbacks: state.feedbacks.map((fb) =>
        fb.id === id ? { ...fb, likes: fb.likes + 1 } : fb
      ),
    })),

  dislikeFeedback: (id) =>
    set((state) => ({
      feedbacks: state.feedbacks.map((fb) =>
        fb.id === id ? { ...fb, dislikes: fb.dislikes + 1 } : fb
      ),
    })),
}));
