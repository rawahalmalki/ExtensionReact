import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactCon from "./pages/ReactCon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReactCon />} />
      </Routes>
    </BrowserRouter>
       );
}

export default App;