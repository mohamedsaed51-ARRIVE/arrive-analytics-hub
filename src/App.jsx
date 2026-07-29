import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/home"
          element={
            <>
              <Header />
              <Sidebar />
              <Home />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;