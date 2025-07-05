import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Future routes */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/aspect/:id" element={<AspectPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;