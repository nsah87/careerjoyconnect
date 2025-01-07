import { useState } from "react";
import { Send } from "lucide-react";

const Resume = () => {
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'ai', content: string }>>([
    {
      type: 'ai',
      content: "Hello! I'm your Resume & Cover Letter Assistant. Would you like help with your resume or cover letter today?"
    }
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { type: 'user', content: input }]);
    // Here we would integrate with an AI service
    setMessages(prev => [...prev, { 
      type: 'ai', 
      content: "I've received your message. In a full implementation, I would analyze your input and provide specific suggestions for your resume or cover letter." 
    }]);
    setInput("");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-primary mb-6">
          Resume & Cover Letter Assistant
        </h1>
        
        <div className="h-[500px] overflow-y-auto mb-6 space-y-4 p-4 bg-gray-50 rounded-lg">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-secondary text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here..."
            className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <button
            type="submit"
            className="bg-secondary text-white p-3 rounded-lg hover:bg-secondary/90 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Resume;