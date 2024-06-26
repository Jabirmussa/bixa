import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden relative bg-purple-900 h-screen">
      <div className="wrapper max-w-7xl mx-auto">
        <div className="logo"><Image src={'/logo.png'} alt="logo" width={120} height={120} /></div>
        <p className="text-white text-lg">Agora podes fazer bixa <br /> em casa!</p>
        <button className="bg-yellow-400 rounded-md px-8 py-3">
          <a href={'/'} className="flex items-center gap-2">
            Começar!
            <Image src={'/Asset 3.svg'} alt="seta" width={24} height={24} />
          </a>
        </button>
      </div>
      <div className="patern absolute bottom-0 left-0">
        <Image src={'/patern.svg'} alt="patern" width={300} height={300} />
      </div>
    </main>
  );
};

