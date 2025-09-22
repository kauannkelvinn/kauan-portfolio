import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { X } from "lucide-react";
import { ButtonMenu } from "./ButtonMenu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="w-full bg-zinc-950">
      <div className="max-7xl mx-auto flex items-center justify-between px-7 py-3">
        <Link to="/" className="text-lg font-bold text-white">
          <img src={Logo} alt="Logo" />
        </Link>

        <nav>
          <ul className="flex items-center space-x-8">
            <div className="hidden space-x-6 text-sm text-white md:flex">
              <li>
                <a
                  href="/"
                  className="text-sm font-light tracking-wider text-zinc-300 uppercase transition-colors duration-300 hover:text-emerald-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/sobre"
                  className="text-sm font-light tracking-wider text-zinc-300 uppercase transition-colors duration-300 hover:text-emerald-400"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="/projetos"
                  className="text-sm font-light tracking-wider text-zinc-300 uppercase transition-colors duration-300 hover:text-emerald-400"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="/skills"
                  className="text-sm font-light tracking-wider text-zinc-300 uppercase transition-colors duration-300 hover:text-emerald-400"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="/contato"
                  className="text-sm font-light tracking-wider text-zinc-300 uppercase transition-colors duration-300 hover:text-emerald-400"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="/certificados"
                  className="text-sm font-light tracking-wider text-zinc-300 uppercase transition-colors duration-300 hover:text-emerald-400"
                >
                  Certificados
                </a>
              </li>
            </div>

            {/* Botao Hamburguer */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hiden group relative flex h-5 w-5 cursor-pointer flex-col items-center justify-between"
              aria-label="Toggle menu"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <ButtonMenu isOpen={isOpen} isHovered={isHovered}/>
            </button>
          </ul>

          {/* pagina hamburguer */}
          {isOpen && (
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center space-y-8 bg-black text-4xl font-bold text-white transition-all duration-500">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 cursor-pointer transition hover:text-gray-400"
              >
                <X size={40} />
              </button>
              <Link onClick={() => setIsOpen(false)} to="/">
                HOME
              </Link>
              <Link onClick={() => setIsOpen(false)} to="/">
                ABOUT
              </Link>
              <Link onClick={() => setIsOpen(false)} to="/">
                WORK
              </Link>
              <Link onClick={() => setIsOpen(false)} to="/">
                STATISTICS
              </Link>
              <Link onClick={() => setIsOpen(false)} to="/">
                CONTACT
              </Link>
            </div>
          )}

          {/*menu mobile*/}
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
      </div>
    </header>
  );
}

export default Navbar;
