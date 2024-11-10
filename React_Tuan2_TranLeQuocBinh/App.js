import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState(null);

  const solveQuadratic = () => {
    const A = parseFloat(a);
    const B = parseFloat(b);
    const C = parseFloat(c);

    if (isNaN(A) || isNaN(B) || isNaN(C)) {
      alert('Please enter valid numbers for a, b, and c');
      return;
    }

    const delta = B * B - 4 * A * C;
    if (delta < 0) {
      setResult('Phương trình vô nghiệm');
    } else if (delta === 0) {
      const x = -B / (2 * A);
      setResult(`Phương trình có nghiệm kép: x = ${x}`);
    } else {
      const x1 = (-B + Math.sqrt(delta)) / (2 * A);
      const x2 = (-B - Math.sqrt(delta)) / (2 * A);
      setResult(`Nghiệm của phương trình: x1 = ${x1}, x2 = ${x2}`);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Giải phương trình bậc 2</h1>
      <div className="form-group">
        <label>Nhập hệ số a</label>
        <input
          type="number"
          className="form-control"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Nhập hệ số b</label>
        <input
          type="number"
          className="form-control"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Nhập hệ số c</label>
        <input
          type="number"
          className="form-control"
          value={c}
          onChange={(e) => setC(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={solveQuadratic}>
        Giải phương trình
      </button>
      {result && <div className="alert alert-success mt-3">{result}</div>}
    </div>
  );
}

export default App;
