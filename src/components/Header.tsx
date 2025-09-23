import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { X } from "lucide-react";
import { ButtonMenu } from "./ButtonMenu";
import CreativeBackground from "./CreativeBackground";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

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
              <ButtonMenu isOpen={isOpen} isHovered={isHovered} />
            </button>
          </ul>

          {/* pagina hamburguer */}
          {isOpen && (
            <div className="fixed inset-0 z-50 bg-zinc-950 flex flex-col items-center justify-center space-y-4 text-4xl font-bold text-white transition-all duration-500">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 cursor-pointer transition hover:text-gray-400"
              >
                <X size={30} />
              </button>
              <Link
                className="text-6xl font-extrabold tracking-[-0.08em] transition-all duration-100 ease-in-out text-shadow-white hover:text-gray-400"
                onClick={() => setIsOpen(false)}
                to="/"
              >
                HOME
              </Link>
              <Link
                className="text-6xl font-extrabold tracking-[-0.08em] transition-all duration-100 ease-in-out hover:text-gray-400"
                onClick={() => setIsOpen(false)}
                to="/"
              >
                ABOUT
              </Link>
              <Link
                className="text-6xl font-extrabold tracking-[-0.08em] transition-all duration-100 ease-in-out hover:text-gray-400"
                onClick={() => setIsOpen(false)}
                to="/"
              >
                WORK
              </Link>
              <Link
                className="text-6xl font-extrabold tracking-[-0.08em] transition-all duration-100 ease-in-out hover:text-gray-400"
                onClick={() => setIsOpen(false)}
                to="/"
              >
                STATISTICS
              </Link>
              <Link
                className="text-6xl font-extrabold tracking-[-0.08em] transition-all duration-100 ease-in-out hover:text-gray-400"
                onClick={() => setIsOpen(false)}
                to="/"
              >
                CONTACT
              </Link>

              <CreativeBackground />

              {/* RODAPE RESPONSIVO */}
              <footer className="absolute inset-x-0 bottom-0 px-8 pb-8 md:px-12">
                <div className="flex w-full flex-col items-start space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                  <div className="font-mono text-xs tracking-widest uppercase">
                    ©2025 ALL RIGHTS RESERVED
                  </div>

                  <div className="flex flex-col items-start space-y-2 text-xs font-mono uppercase tracking-widest text-white md:flex-row md:items-center md:space-y-0 md:space-x-6">
                    <a href="https://www.linkedin.com/in/kauannkelvinn" target="_blank">
                      LINKEDIN
                    </a>
                    <a href="https://www.instagram.com/kauannkelvin/" target="_blank">
                      INSTAGRAM
                    </a>
                    <a href="https://github.com/kauannkelvinn" target="_blank">
                      GITHUB
                    </a>
                  </div>
                </div>
              </footer>
            </div>
          )}

          
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
