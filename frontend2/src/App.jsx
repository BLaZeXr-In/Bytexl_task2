import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mark, setMark] = useState("");
  const [result, setResult] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const student = {
      name: name,
      age: age,
      mark: mark
    };

    const response = await fetch("http://localhost:5000/students2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(student)
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div>
      <h1>Student Application</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Age: </label>
          <input type="number" value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Mark: </label>
          <input type="number" value={mark}
            onChange={(e) => setMark(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">
          Submit
        </button>
      </form>
      {result && (
        <div>
          <h2>Result</h2>
          <p>Name: {result.name}</p>
          <p>CGPA: {result.cgpa}</p>
        </div>
      )}
    </div>
  );
}
export default App;
