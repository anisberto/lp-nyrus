import Image from "next/image"
import { Button } from "./ui/button"
import { Play } from "lucide-react"

export default function AboutUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Quem Somos</h2>
            <p className="text-gray-600">
              Lorem ipsum available but the majority suffered alteration in some form, by injected humour or randomised
              words.
            </p>
            <Button className="bg-[#4338CA] hover:bg-[#3730A3] text-white">Continue agora</Button>
          </div>

          {/* Right Column */}
          <div className="relative group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-28%20at%2020.11.03-jPYromoY3IP5X5pLjfoqsAep5EOEkz.png"
              alt="Dashboard Analytics"
              width={600} // Defina uma largura realista
              height={400} // Defina uma altura realista
              className="w-full rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="bg-white rounded-full p-4 shadow-lg cursor-pointer 
                           transition-transform transform hover:scale-110"
              >
                <Play className="h-8 w-8 text-[#4338CA]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}