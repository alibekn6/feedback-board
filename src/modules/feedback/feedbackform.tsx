import { useState, type FormEvent } from "react";

type Props = {
  onAdd: (text: string) => void;
};

export const FeedbackForm = ({ onAdd }: Props) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ваше предложение"
        className="flex-1 rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 transition mr-5"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg transition">Добавить</button>
    </form>
  );
};
