import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export default function Footer() {
  return (
    <footer className="bg-[#4338CA] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
              <Link href="/sobre-nos" className="hover:text-gray-300">
                Sobre Nós
              </Link>
              <Link href="/servicos" className="hover:text-gray-300">
                Serviços
              </Link>
              <Link href="/projetos" className="hover:text-gray-300">
                Projetos
              </Link>
              <Link href="/contato" className="hover:text-gray-300">
                Contato
              </Link>
            </nav>
            <div className="mt-8">
              <Image src="/placeholder.svg" alt="Nyrus" width={120} height={40} className="h-10 w-auto" />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Title Here</h3>
              <p className="text-gray-300">Lorem ipsum avoilable, but the majorit</p>
            </div>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Email" className="bg-white text-black w-full max-w-xs" />
              <Button className="bg-gray-700 hover:bg-gray-600 p-2">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-300">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-sm text-gray-300">Todos os direitos reservados Nyrus - 2025</div>
      </div>
    </footer>
  )
}

