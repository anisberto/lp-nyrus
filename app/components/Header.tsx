import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { Input } from "./ui/input"

export default function Header() {
  return (
    <header className="bg-black py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/placeholder.svg" alt="Nyrus" width={100} height={32} className="h-8 w-auto" />
            </Link>
            <nav className="hidden md:flex ml-10 space-x-8">
              <Link href="/" className="text-white hover:text-purple-400">
                Home
              </Link>
              <Link href="/sobre-nos" className="text-white hover:text-purple-400">
                Sobre Nós
              </Link>
              <Link href="/servicos" className="text-white hover:text-purple-400">
                Serviços
              </Link>
              <Link href="/projetos" className="text-white hover:text-purple-400">
                Projetos
              </Link>
              <Link href="/contato" className="text-white hover:text-purple-400">
                Contato
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className="pl-3 pr-10 py-2 bg-gray-800 text-white border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-[200px]"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

