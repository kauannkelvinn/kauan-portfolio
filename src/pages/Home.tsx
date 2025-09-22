import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projetos } from "../data/projects";

const projetosDestaque = projetos.slice(0, 3);

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white">
      {/* HERO / INTRODUÇÃO */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-4 text-5xl font-extrabold text-emerald-400 drop-shadow md:text-7xl">
          Kauan Kelvin
        </h1>
        <p className="mb-6 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-2xl">
          Desenvolvedor Front-End apaixonado por transformar ideias em
          interfaces incríveis. Especializado em React, TypeScript, Firebase e
          soluções modernas.
        </p>
        <a
          href="#projetos"
          className="rounded-xl bg-emerald-500 px-6 py-3 font-medium text-white transition hover:bg-emerald-600"
        >
          Ver projetos
        </a>
      </section>

      {/* SOBRE MIM */}
      <section className="bg-zinc-900 px-6 py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-4xl font-bold text-emerald-400">
              Sobre mim
            </h2>
            <p className="text-lg leading-relaxed text-zinc-300">
              Estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor
              apaixonado por tecnologia. Tenho experiência prática com diversos
              projetos reais como Pokédex, e-commerce completo, dashboards com
              Firebase e muito mais.
            </p>
            <p className="mt-4 text-zinc-400">
              Estou sempre aprendendo, focado em criar interfaces acessíveis,
              responsivas e com código limpo.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-4xl font-bold text-emerald-400">
            Skills Técnicas
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "TypeScript",
              "Tailwind",
              "Firebase",
              "Git & GitHub",
              "Vite",
              "Figma",
              "AWS",
              "APIs REST",
            ].map((skill, i) => (
              <span
                key={i}
                className="rounded-full border border-zinc-700 bg-zinc-800 px-5 py-2 text-sm transition hover:border-emerald-500"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="min-h-screen bg-zinc-900 px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-emerald-400">
            Projetos em Destaque
          </h2>
          {/* ... */}

          <div className="mb-16 grid gap-8 text-left md:grid-cols-2 lg:grid-cols-3">
            {/* AGORA USAMOS A LISTA "projetosDestaque" */}
            {projetosDestaque.map((projeto, i) => (
              <div key={i} className="rounded-lg bg-zinc-800 ...">
                {" "}
                {/* Seu card de projeto */}
                <img src={projeto.imagem} alt={projeto.titulo} />
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{projeto.titulo}</h3>
                  <p className="mb-4 text-zinc-400">{projeto.descricao}</p>
                  <div className="flex items-center gap-4">
                    <a
                      href={projeto.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="..."
                    >
                      <FaExternalLinkAlt /> Ver ao vivo
                    </a>
                    <a
                      href={projeto.codigo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="..."
                    >
                      <FaGithub /> Código
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/projetos"
            className="rounded-xl bg-emerald-500 px-6 py-3 font-medium text-white transition hover:bg-emerald-600"
          >
            Ver todos os projetos
          </Link>
        </div>
      </section>

      {/* CONTATO */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-emerald-400">
            Vamos conversar?
          </h2>
          <p className="mb-8 text-lg text-zinc-300">
            Estou disponível para freelas, vagas CLT ou colaboração em projetos.
            Se quiser conversar ou me conhecer melhor:
          </p>
          <Link
            to="/Contato"
            className="inline-block rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
          >
            Entrar em contato
          </Link>
        </div>
      </section>
    </main>
  );
}
