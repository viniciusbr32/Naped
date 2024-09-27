export function Footer() {
  return (
    <div className="h-20 max-w-screen-3xl bg-[#090E18]">
      <footer className="flex items-center justify-center w-full h-full ">
        <p className="text-center text-gray-400 font-lg">
          Design {''}
          <a
            className="font-bold text-gray-300"
            href="https://www.iuricode.com"
            target="blank"
          >
            iuricode.com
          </a>
          {''} Desenvolvido Por{' '}
          <span className="font-bold text-gray-300">Luiz Vinicius</span>
        </p>
      </footer>
    </div>
  )
}
