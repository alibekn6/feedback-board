import { FeedbackItem } from "./feedbackitem";
import { useFeedbackStore } from "../../hooks/useFeedbackState";

export const FeedbackList = () => {
  const feedbacks = useFeedbackStore((s) => s.feedbacks);
  const sortBy = useFeedbackStore((s) => s.sortBy);
  const sorted = [...feedbacks].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else {
      return b.likes - a.likes;
    }
  });
  return (
    <div className="space-y-4">
      {sorted.length === 0 ? (
        <div className="text-gray-500 text-center">Нет предложений</div>
      ) : (
        sorted.map((fb) => <FeedbackItem key={fb.id} feedback={fb}/>)
      )}
    </div>
  );
};
