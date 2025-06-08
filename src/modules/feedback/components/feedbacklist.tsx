import { FeedbackItem } from "./feedbackitem";
import { useFeedbackStore } from "../store/feedbackStore";
import { EditFeedbackModal } from "./editmodal";
import { useState } from "react";

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

  const [editingId, setEditingId] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {sorted.length === 0 ? (
        <div className="text-gray-500 text-center">Нет предложений</div>
      ) : (
        sorted.map((fb) => <FeedbackItem key={fb.id} feedback={fb} onEdit={() => setEditingId(fb.id)} />)
      )}
      {editingId && (
        <EditFeedbackModal
          feedbackId={editingId}
          onClose={() => setEditingId(null)}
        />
      )}
    </div>
  );
};
