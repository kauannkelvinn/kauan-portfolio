export interface Projeto {
  titulo: string;
  descricao: string;
  imagem: string;
  link: string;
  codigo: string;
}

export const projetos: Projeto[] = [
  {
    titulo: "Pokédex",
    descricao: "Uma Pokédex responsiva feita com React, consumindo a PokéAPI",
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
  },
];
