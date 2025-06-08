import { useState } from "react";
import type { Feedback } from "../types/feedback";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { FeedbackForm } from "../modules/feedback/feedbackform";
import { FeedbackList } from "../modules/feedback/feedbacklist";

function App() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  const handleAdd = (text: string) => {
    setFeedbacks((prev) => [...prev, { id: uuidv4(), text }]);
  };

  const handleDelete = (id: string) => {
    setFeedbacks((prev) => prev.filter((fb) => fb.id !== id));
  };

  return (
    <>
      <div className="max-w-lg mx-auto p-8 min-h-screen">
        <h1 className="text-3xl font-bold text-blue-200 mb-8 text-center">Product Feedback Board</h1>
        <FeedbackForm onAdd={handleAdd} />
        <FeedbackList feedbacks={feedbacks} onDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
