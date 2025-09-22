import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950 p-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="text-lg font-bold text-white">
          Kauan Kelvin
        </Link>

        <div className="hidden space-x-6 text-sm text-white md:flex">
          <Link to="/" className="transition hover:text-green-400">
            Home
          </Link>
          <Link to="/sobre" className="transition hover:text-green-400">
            Sobre
          </Link>
          <Link to="/projetos" className="transition hover:text-green-400">
            Projetos
          </Link>
          <Link to="/skills" className="transition hover:text-green-400">
            Skills
          </Link>
          <Link to="/contato" className="transition hover:text-green-400">
            Contato
          </Link>
          <Link to="/certificados" className="transition hover:text-green-400">
            Certificados
          </Link>
        </div>

        <button
          className="text-white focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col items-center space-y-3 border-t border-zinc-800 bg-zinc-900 py-4 text-sm text-white md:hidden">
          <Link
            onClick={() => setIsOpen(false)}
            to="/"
            className="w-full text-center transition hover:text-green-400"
          >
            Home
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/sobre"
            className="w-full text-center transition hover:text-green-400"
          >
            Sobre
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/projetos"
            className="w-full text-center transition hover:text-green-400"
          >
            Projetos
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/skills"
            className="w-full text-center transition hover:text-green-400"
          >
            Skills
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/contato"
            className="w-full text-center transition hover:text-green-400"
          >
            Contato
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/certificados"
            className="w-full text-center transition hover:text-green-400"
          >
            Certificados
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
