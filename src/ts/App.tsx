import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [name] = useState('name');

  return (
    <>
      <div className="container py-4 px-3 mx-auto">
        <h1 className="text-primary text-center">
          Hello {name}, good to have you here
        </h1>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          <i
            className="bi-camera"
            style={{ fontSize: '4em' }}
            aria-label="camera button"
          ></i>
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
