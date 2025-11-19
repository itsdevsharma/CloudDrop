import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Upload from "./components/Upload";
import MyFiles from "./components/MyFiles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/my-files" element={<MyFiles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

