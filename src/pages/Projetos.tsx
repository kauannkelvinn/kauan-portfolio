import { projetos } from "../data/projects.ts";

export function Projetos() {
  return (
    <div className="bg-zinc-950 px-4 py-24 text-white">
      <h1 className="mb-12 text-center text-4xl font-bold"> Projetos</h1>

      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl bg-zinc-900 shadow-lg duration-300 hover:scale-105"
          >
            <img
              src={projeto.imagem}
              alt={projeto.titulo}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="mb-2 text-xl font-semibold">{projeto.titulo}</h2>
              <p className="text-sm text-zinc-400">{projeto.descricao}</p>
              <div className="mt-4 flex gap-3">
                <a
                  href={projeto.link}
                  target="_blank"
                  className="rounded bg-emerald-600 px-3 py-1 text-white hover:bg-emerald-700"
                >
                  Ver Projeto
                </a>
                <a
                  href={projeto.codigo}
                  target="_blank"
                  className="rounded border border-zinc-400 px-3 py-1 text-white hover:bg-zinc-800"
                >
                  Código
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projetos;
