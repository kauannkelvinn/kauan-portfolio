import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-zinc-900 border-b border-zinc-800 fixed top-0 z-50 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
 
        <Link to="/" className="text-white font-bold text-lg">Meu Portfolio</Link>


        <div className="hidden md:flex space-x-6 text-sm text-white">
          <Link to="/" className="hover:text-green-400 transition">Home</Link>
          <Link to="/sobre" className="hover:text-green-400 transition">Sobre</Link>
          <Link to="/projetos" className="hover:text-green-400 transition">Projetos</Link>
          <Link to="/skills" className="hover:text-green-400 transition">Skills</Link>
          <Link to="/contato" className="hover:text-green-400 transition">Contato</Link>
          <Link to="/certificados" className="hover:text-green-400 transition">Certificados</Link>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 flex flex-col items-center space-y-3 py-4 text-white text-sm">
          <Link onClick={() => setIsOpen(false)} to="/" className="hover:text-green-400 transition w-full text-center">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/sobre" className="hover:text-green-400 transition w-full text-center">Sobre</Link>
          <Link onClick={() => setIsOpen(false)} to="/projetos" className="hover:text-green-400 transition w-full text-center">Projetos</Link>
          <Link onClick={() => setIsOpen(false)} to="/skills" className="hover:text-green-400 transition w-full text-center">Skills</Link>
          <Link onClick={() => setIsOpen(false)} to="/contato" className="hover:text-green-400 transition w-full text-center">Contato</Link>
          <Link onClick={() => setIsOpen(false)} to="/certificados" className="hover:text-green-400 transition w-full text-center">Certificados</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
