import "./App.css";
import MainContent from "./components/main-content/MainContent";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
