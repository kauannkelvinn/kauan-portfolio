const projetos = [
  {
    titulo: "Pokédex",
    descricao:
      "Uma Pokédex responsiva feita com React, consumindo a PokéAPI",
    imagem: "/imgs/homepokedex.png",
    link: "https://vercel.com/kauan-kelvins-projects/pokedex-test",
    codigo: "https://github.com/kauannkelvinn/pokedex",
  },
  {
    titulo: "Painel de Funcionários",
    descricao: "CRUD com autenticação (React, TypeScript, Firebase)",
    imagem: "/imgs/employeemanager.png",
    link: "https://kauan-employee-manager-hokjk58ao-kauan-kelvins-projects.vercel.app/",
    codigo: "https://github.com/kauannkelvinn/kauan-employee-manager",
  },
  {
    titulo: "Validador de Formulário",
    descricao: "Validações personalizadas e testes manuais (HTML, JS)",
    imagem: "/imgs/formvalidator.png",
    link: "https://kauannkelvinn.github.io/login-teste-manual/",
    codigo: "https://github.com/kauannkelvinn/login-teste-manual",
  }
];
export function Projetos() {
    return (
      <div className="bg-zinc-950 text-white px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12"> Projetos</h1>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projetos.map((projeto, index) => (
            <div key={index} className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 duration-300">
              <img src={projeto.imagem} alt={projeto.titulo} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{projeto.titulo}</h2>
                <p className="text-zinc-400 text-sm">{projeto.descricao}</p>
                <div className="flex gap-3 mt-4">
                  <a href={projeto.link} target="_blank" className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded">
                    Ver Projeto
                  </a>
                  <a href={projeto.codigo} target="_blank" className="border border-zinc-400 hover:bg-zinc-800 text-white px-3 py-1 rounded">
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
