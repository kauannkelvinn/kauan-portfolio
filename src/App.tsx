import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Certificados from "./pages/Certificados";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Skills from "./pages/Skills";
import Sobre from "./pages/Sobre";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/certificados" element={<Certificados />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
