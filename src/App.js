import { BrowserRouter, Routes, Route } from "react-router-dom";
import Simple from "./components/Navbar";
import About from "./pages/about";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Simple />}>
        <Route index element={<Home />} />
        <Route path="about" index element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
