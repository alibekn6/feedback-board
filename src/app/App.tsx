import "./App.css";
import { FeedbackForm } from "../modules/feedback/components/feedbackform";
import { FeedbackList } from "../modules/feedback/components/feedbacklist";
import { SortControls } from "../modules/feedback/components/sortcontrols";


function App() {

  return (
    <>
      <div className="max-w-lg mx-auto p-8 min-h-screen">
        <h1 className="text-3xl font-bold text-blue-200 mb-8 text-center">Product Feedback Board</h1>
        <FeedbackForm />
        <SortControls />  
        <FeedbackList />
      </div>
    </>
  );
}

export default App;
