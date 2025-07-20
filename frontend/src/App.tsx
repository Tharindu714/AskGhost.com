import { useState } from "react";

interface ChatMessage {
  question: string;
  answer: string;
  fromCache: boolean;
}

export default function App() {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  async function askBot(
    question: string
  ): Promise<{ answer: string; fromCache: boolean }> {
    try {
      const res = await fetch("https://ask-ghost-com.vercel.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) {
        throw new Error(`API error: ${res.statusText}`);
      }

      return await res.json();
    } catch (error) {
      console.error("Error fetching bot response:", error);
      return { answer: "Sorry, I couldn't get an answer right now.", fromCache: false };
    }
  }

  const sendQuestion = async () => {
    if (!question.trim()) return;
    setLoading(true);
    const userQuestion = question.trim();
    try {
      const response = await askBot(userQuestion);
      setChatHistory([{ question: userQuestion, ...response }, ...chatHistory]);
      setQuestion("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Ghost Incidents ChatBot 👻</h1>

      <div className="mb-4 flex">
        <input
          type="text"
          className="flex-grow border border-gray-400 rounded px-3 py-2"
          placeholder="Ask me about a ghost incident..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendQuestion()}
          disabled={loading}
        />
        <button
          className="ml-2 bg-indigo-600 text-white px-4 py-2 rounded"
          onClick={sendQuestion}
          disabled={loading}
        >
          {loading ? "Thinking..." : "Ask"}
        </button>
      </div>

      <div>
        {chatHistory.length === 0 && (
          <p className="text-gray-500">
            No questions yet — ask me anything about ghosts!
          </p>
        )}

        {chatHistory.map(({ question, answer, fromCache }, index) => (
          <div
            key={index}
            className="mb-5 p-3 border rounded bg-white shadow-sm"
          >
            <p>
              <strong>You:</strong> {question}
            </p>
            <p>
              <strong>Bot{fromCache ? " (cached)" : ""}:</strong> {answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}