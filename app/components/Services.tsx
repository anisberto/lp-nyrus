export default function Services() {
  const services = [
    {
      title: "Lorem ipsum",
      description: "Somos uma referência no setor de Health Care",
    },
    {
      title: "Lorem ipsum",
      description: "Experiência com dezenas de softwares já testados",
    },
    {
      title: "Lorem ipsum",
      description: "Experiência com gestão de projetos e implementação de processos",
    },
  ]

  return (
    <section className="py-16 bg-[#4338CA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-200 aspect-square rounded-lg mb-4"></div>
              <h3 className="text-white text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-white text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

