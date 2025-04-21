import { useState } from 'react';

export default function ChatBotIsland() {
  const [chatLog, setChatLog] = useState([]);

  const handleSend = async (message) => {
    setChatLog((prev) => [...prev, { role: 'user', content: message }]);

    const response = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    setChatLog((prev) => [...prev, { role: 'ai', content: data.reply }]);
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg flex flex-col overflow-hidden">
      <div className="bg-blue-500 text-white p-3 font-bold text-lg">Asistente Clima</div>
      <div className="flex-1 p-3 overflow-y-auto max-h-64 text-sm space-y-2">
        {chatLog.map((msg, index) => (
          <div key={index} className={`p-2 rounded ${msg.role === 'user' ? 'bg-gray-200 dark:bg-gray-700' : 'bg-blue-100 dark:bg-blue-900'}`}>
            <strong>{msg.role === 'user' ? 'Tú' : 'IA'}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <form
        className="flex border-t dark:border-gray-700"
        onSubmit={(e) => {
          e.preventDefault();
          const input = e.target.elements.message;
          handleSend(input.value);
          input.value = '';
        }}
      >
        <input name="message" type="text" placeholder="Pregunta sobre el clima..." className="flex-1 px-2 py-1 text-sm dark:bg-gray-900" />
        <button type="submit" className="px-3 py-1 bg-blue-500 text-white text-sm">Enviar</button>
      </form>
    </div>
  );
}
