import { useState } from 'react';

function App() {
  const [queue, setQueue] = useState([]);
  const [current, setCurrent] = useState(null);
  let nextNumber = queue.length + 1;

  const addToQueue = () => {
    setQueue([...queue, { number: nextNumber, status: '대기중' }]);
  };

  const callNext = () => {
    const next = queue.find((q) => q.status === '대기중');
    if (!next) return;
    const updated = queue.map((q) =>
      q.number === next.number ? { ...q, status: '호출됨' } : q
    );
    setQueue(updated);
    setCurrent(next.number);
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: 20 }}>
      <h2>🏄 수중스쿠터 대기 시스템</h2>
      <button onClick={addToQueue}>대기 등록</button>
      <ul>
        {queue.map((q) => (
          <li key={q.number}>
            #{q.number} - {q.status}
          </li>
        ))}
      </ul>
      <button onClick={callNext}>다음 손님 호출</button>
      {current && <p>📢 호출됨: #{current}번</p>}
    </div>
  );
}

export default App;