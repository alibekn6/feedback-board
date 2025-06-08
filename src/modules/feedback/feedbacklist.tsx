import { type Feedback } from "../../types/feedback";
import { FeedbackItem } from "./feedbackitem";

type Props = {
  feedbacks: Feedback[];
  onDelete: (id: string) => void;
};

export const FeedbackList = ({ feedbacks, onDelete }: Props) => (
  <div>
    {feedbacks.length === 0 && <div className="text-red-400 text-center mt-5">Нет предложений</div>}
    {feedbacks.map((fb) => (
      <FeedbackItem
        key={fb.id}
        text={fb.text}
        onDelete={() => onDelete(fb.id)}
      />
    ))}
  </div>
);
