import { Link } from "react-router-dom"

export default function Home() {
    return (
      <main className="bg-zinc-950 text-white">
        {/* HERO / INTRODUÇÃO */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-emerald-400 drop-shadow mb-4">
            Kauan Kelvin
          </h1>
          <p className="text-zinc-300 text-lg md:text-2xl max-w-2xl leading-relaxed mb-6">
            Desenvolvedor Front-End apaixonado por transformar ideias em interfaces incríveis. Especializado em React, TypeScript, Firebase e soluções modernas.
          </p>
          <a
            href="#projetos"
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-medium transition"
          >
            Ver projetos
          </a>
        </section>
  
        {/* SOBRE MIM */}
        <section className="py-24 bg-zinc-900 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="text-4xl font-bold text-emerald-400 mb-4">Sobre mim</h2>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor apaixonado por tecnologia. Tenho experiência prática com diversos projetos reais como Pokédex, e-commerce completo, dashboards com Firebase e muito mais.
              </p>
              <p className="text-zinc-400 mt-4">
                Estou sempre aprendendo, focado em criar interfaces acessíveis, responsivas e com código limpo.
              </p>
            </div>
          </div>
        </section>
  
        {/* SKILLS */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-emerald-400 mb-8">Skills Técnicas</h2>
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
                "APIs REST"
              ].map((skill, i) => (
                <span
                  key={i}
                  className="px-5 py-2 bg-zinc-800 text-sm rounded-full border border-zinc-700 hover:border-emerald-500 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
  
        {/* PROJETOS */}
        <section id="projetos" className="py-24 bg-zinc-900 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-emerald-400 mb-6">Projetos em Destaque</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
              Confira alguns dos meus projetos que demonstram minha experiência prática, criatividade e atenção aos detalhes técnicos e visuais.
            </p>
            <Link
                to="/Projetos"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition"
            >
              Ver todos os projetos
            </Link>
          </div>
        </section>
  

  
        {/* CONTATO */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-emerald-400 mb-4">Vamos conversar?</h2>
            <p className="text-zinc-300 text-lg mb-8">
              Estou disponível para freelas, vagas CLT ou colaboração em projetos. Se quiser conversar ou me conhecer melhor:
            </p>
            <Link
              to="/Contato"
              className="inline-block px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition font-semibold"
            >
              Entrar em contato
            </Link>
          </div>
        </section>
      </main>
    )
  }
  