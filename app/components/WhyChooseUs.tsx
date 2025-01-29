import { Button } from "./ui/button"
import Link from "next/link"

const reasons = [
  {
    title: "Expertise em Health Care",
    description: "Lorem ipsum available, but the major ity have suffered alteration in some words which.",
    image: "/placeholder.svg",
  },
  {
    title: "Soluções sob medida para cada cliente",
    description: "Lorem ipsum available, but the major ity have suffered alteration in some words which.",
    image: "/placeholder.svg",
  },
  {
    title: "Suporte contínuo e acompanhamento pós-implementação",
    description: "Lorem ipsum available, but the major ity have suffered alteration in some words which.",
    image: "/placeholder.svg",
  },
  {
    title: "Eficiência no gerenciamento de projetos",
    description: "Lorem ipsum available, but the major ity have suffered alteration in some words which.",
    image: "/placeholder.svg",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Por Que Escolher a Nyrus?</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="aspect-square bg-gray-200 rounded-lg mb-6"></div>
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-gray-600 mb-4">{reason.description}</p>
              <Link href="#" className="text-[#4338CA] hover:text-[#3730A3] font-medium">
                Saiba+
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-[#4338CA] hover:bg-[#3730A3] text-white px-8 py-3">Solicite uma Consultoria</Button>
        </div>
      </div>
    </section>
  )
}

