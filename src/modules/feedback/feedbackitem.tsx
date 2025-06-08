type Props = {
  text: string;
  onDelete: () => void;
};

export const FeedbackItem = ({ text, onDelete }: Props) => (
  <div className="flex items-center justify-between rounded-xl px-4 py-3 shadow-sm border border-gray-100 mb-5 mt-2">
    <span>{text}</span>
    <button className="ml-2 text-red-500 hover:text-red-700 font-medium transition cursor-pointer" onClick={onDelete}>Удалить</button>
  </div>
);
