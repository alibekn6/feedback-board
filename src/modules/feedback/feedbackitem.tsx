import { type Feedback, useFeedbackStore } from "../../hooks/useFeedbackState";

interface Props {
  feedback: Feedback;
}
export const FeedbackItem = ({ feedback }: Props) => {
  const { deleteFeedback, likeFeedback, dislikeFeedback } = useFeedbackStore();

  return (
    <div className="flex justify-between gap-4 rounded-xl px-4 py-3 shadow-sm border border-gray-200 mb-5 mt-2">
      {/* Текст и лайки */}
      <div className="flex-1">
        <p className="text-lg font-medium text-white-800 break-words">
          {feedback.text}
        </p>
        <div className="text-lg text-gray-500 mt-1">
          👍🏽 {feedback.likes} | 👎 {feedback.dislikes}
        </div>
      </div>

      {/* Кнопки справа */}
      <div className="flex flex-col justify-center items-end gap-2 min-w-[100px]">
        <button
          className="text-green-500 hover:underline text-sm"
          onClick={() => likeFeedback(feedback.id)}
        >
          👍 Like
        </button>
        <button
          className="text-gray-500 hover:underline text-sm"
          onClick={() => dislikeFeedback(feedback.id)}
        >
          👎 Dislike
        </button>
        <button
          className="bg-red-700 text-white px-3 py-1 rounded hover:bg-red-800 text-sm"
          onClick={() => deleteFeedback(feedback.id)}
        >
          🗑 Удалить
        </button>
      </div>
    </div>
  );
};
