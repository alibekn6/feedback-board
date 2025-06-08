import { useState, useEffect } from "react";
import { useFeedbackStore } from "../store/feedbackStore";

interface Props {
  feedbackId: string;
  onClose: () => void;
}



export const EditFeedbackModal = ({ feedbackId, onClose }: Props) => {
  const feedback = useFeedbackStore((s) =>
    s.feedbacks.find((f) => f.id === feedbackId)
  );

  const editFeedback = useFeedbackStore((s) => s.editFeedback);

  const [text, setText] = useState(feedback?.text || "");


  useEffect(() => {
    if (feedback) setText(feedback.text);
  }, [feedback]);

  const handleSave = () => {
    if (text.trim() && feedback) {
      editFeedback(feedback.id, text.trim());
      onClose();
    }
  };

  if (!feedback) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-xl w-full max-w-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Редактировать предложение</h2>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-100 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 transition"
        />
        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            Отмена
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};
