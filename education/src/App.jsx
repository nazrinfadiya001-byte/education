import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage.jsx";
import Aboutpage from "./pages/Aboutpage.jsx";
import Contactpage from "./pages/Contactpages.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;