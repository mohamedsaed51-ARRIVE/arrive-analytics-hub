import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import DashboardView from "./pages/DashboardView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard/:id" element={<DashboardView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;