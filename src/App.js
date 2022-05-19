import "./App.css";
import FullImage from "./components/full-image/FullImage";
import MainContent from "./components/main-content/MainContent";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <MainContent />
      <FullImage />
    </div>
  );
}

export default App;
