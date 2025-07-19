import { Routes, Route } from "react-router-dom";
import BusMap from "./components/BusMap";
import DiaryPage from "./pages/DiaryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BusMap />} />
      <Route path="/diary/:id" element={<DiaryPage />} />
    </Routes>
  );
}

export default App;
