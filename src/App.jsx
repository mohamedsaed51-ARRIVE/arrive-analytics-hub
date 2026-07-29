import { Box, Toolbar } from "@mui/material";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />

      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />

        <Home />
      </Box>
    </Box>
  );
}

export default App;