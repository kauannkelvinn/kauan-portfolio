export default function Certificados() {
    const certificados = [
      {
        titulo: "Formação Front-End",
        instituicao: "Dev em Dobro",
        ano: "2024",
        link: "/imgs/certificadofront.png",
      },
    ]
  
    return (
      <section className="min-h-screen bg-zinc-950 text-white px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-emerald-400 mb-10 text-center">Certificados</h1>
  
          <div className="grid md:grid-cols-2 gap-6">
            {certificados.map((cert, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-emerald-500 transition"
              >
                <h2 className="text-xl font-semibold text-white mb-2">{cert.titulo}</h2>
                <p className="text-zinc-400">{cert.instituicao} • {cert.ano}</p>
                {cert.link !== "#" && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline text-sm mt-2 inline-block"
                  >
                    Ver certificado
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  