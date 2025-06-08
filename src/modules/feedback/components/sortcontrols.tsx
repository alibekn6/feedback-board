import { useFeedbackStore } from "../store/feedbackStore";

export const SortControls = () => {
  const sortBy = useFeedbackStore((s) => s.sortBy);
  const setSort = useFeedbackStore((s) => s.setSort);
  const btnClass = (active: boolean) =>
    active
      ? "px-3 py-1 rounded bg-blue-600 text-white"
      : "px-3 py-1 rounded border border-gray-400 text-gray-200";

  return (
    <div className="flex gap-2 mb-4 mt-6">
      <button
        className={btnClass(sortBy === "date")}
        onClick={() => setSort("date")}
      >
        🕒 Сначала свежие
      </button>
      <button
        className={btnClass(sortBy === "popularity")}
        onClick={() => setSort("popularity")}
      >
        ⭐ По лайкам
      </button>
    </div>
  );
};
