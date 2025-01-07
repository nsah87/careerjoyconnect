import { useState } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

const Interview = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Here we would start recording and analyzing
      setFeedback(null);
    } else {
      // Here we would stop recording and provide feedback
      setFeedback(
        "In a full implementation, I would provide real-time feedback on your interview responses, including tone analysis, content evaluation, and improvement suggestions."
      );
    }
  };

  const resetPractice = () => {
    setIsRecording(false);
    setFeedback(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-primary mb-6">
          Interview Practice Assistant
        </h1>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Current Question:</h2>
          <p className="text-gray-700 mb-4">
            "Tell me about a challenging project you've worked on and how you handled it."
          </p>
          
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={toggleRecording}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-colors ${
                isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-secondary hover:bg-secondary/90'
              }`}
            >
              {isRecording ? (
                <>
                  <Pause className="w-5 h-5" />
                  Stop Recording
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" />
                  Start Recording
                </>
              )}
            </button>
            <button
              onClick={resetPractice}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              Reset
            </button>
          </div>

          {isRecording && (
            <div className="text-center text-red-500 animate-pulse">
              Recording in progress...
            </div>
          )}
        </div>

        {feedback && (
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Feedback:</h2>
            <p className="text-gray-700">{feedback}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Interview;