import { Button } from "./ui/button"

export default function Hero() {
  return (
    <div className="bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl">
              <span className="block">Transforme seus</span> <span className="block">processos e sistemas</span>{" "}
              <span className="block">com a Nyrus</span>
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Consultoria especializada em tecnologia para empresas de Health Care
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md text-base font-medium">
                Saiba mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

