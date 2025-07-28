import { Mail, Linkedin, Github } from "lucide-react"

export default function Contato() {
  return (
    <section className="min-h-screen bg-zinc-950 text-white px-4 py-20 flex items-center justify-center">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold text-emerald-400 mb-6">Entre em Contato</h1>
        <p className="text-zinc-400 mb-10 text-lg">
          Estou disponível para oportunidades, colaborações e projetos. Me chama!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=kauannkelvin0504@gmail.com"
            className="flex items-center gap-2 border border-emerald-500 px-4 py-2 rounded-xl hover:bg-emerald-600 transition"
          >
            <Mail className="w-5 h-5" />
            kauankelvin7777@gmail.com
          </a>

          <a
            href="https://linkedin.com/in/kauannkelvinn"
            target="_blank"
            className="flex items-center gap-2 border border-emerald-500 px-4 py-2 rounded-xl hover:bg-emerald-600 transition"
          >
            <Linkedin className="w-5 h-5" />
            /in/kauannkelvinn
          </a>

          <a
            href="https://github.com/kauannkelvinn"
            target="_blank"
            className="flex items-center gap-2 border border-emerald-500 px-4 py-2 rounded-xl hover:bg-emerald-600 transition"
          >
            <Github className="w-5 h-5" />
            /kauannkelvinn
          </a>
        </div>
      </div>
    </section>
  )
}
