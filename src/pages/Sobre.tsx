import { Link } from "react-router-dom"

export default function Sobre() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-zinc-900 text-white px-4 py-20">
      <div className="max-w-3xl w-full text-center md:text-left">
        <h1 className="text-4xl font-bold mb-6 text-emerald-400">Sobre mim</h1>

        <p className="text-lg text-zinc-300 mb-4 leading-relaxed">
          Olá, eu sou o <strong>Kauan Kelvin</strong>, desenvolvedor Front-End apaixonado por tecnologia, design e boas experiências digitais.
        </p>

        <p className="text-lg text-zinc-300 mb-4 leading-relaxed">
          Atualmente estou cursando <strong>Análise e Desenvolvimento de Sistemas</strong> e me aprofundei em <strong>HTML, CSS, JavaScript, React, TypeScript, Tailwind CSS</strong> e <strong>AWS</strong>.
        </p>

        <p className="text-lg text-zinc-300 mb-4 leading-relaxed">
          Já desenvolvi projetos completos como uma <strong>Pokédex responsiva</strong>, <strong>painel de funcionários com Firebase</strong> e um <strong>e-commerce com carrinho, estoque e dashboard</strong> — tudo com foco em performance, visual profissional e código limpo.
        </p>

        <p className="text-lg text-zinc-300 mb-4 leading-relaxed">
          Meu objetivo é transformar ideias em interfaces funcionais, responsivas e com visual impactante. Estou sempre em busca de evolução e novas oportunidades no mundo dev.
        </p>

        <p className="text-zinc-400 italic mb-6">"Transformando ideias em interfaces incríveis."</p>

        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Link
            to="/contato"
            className="bg-emerald-500 text-white px-5 py-2 rounded-xl hover:bg-emerald-600 transition"
          >
            Entrar em contato
          </Link>
          <a
            href="/curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-emerald-500 text-emerald-400 px-5 py-2 rounded-xl hover:bg-emerald-600 hover:text-white transition"
          >
            Ver currículo
          </a>
        </div>
      </div>
    </section>
  )
}
