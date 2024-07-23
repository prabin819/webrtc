import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="homepage">homepage for connection</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
