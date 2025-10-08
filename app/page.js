import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.03)_0%,transparent_50%)]"></div>
      
      <main className="relative z-10 text-center px-6 sm:px-8">
        <div className="mb-12 sm:mb-16">
          <Image
            src="/logo.png"
            alt="Obsidian Global Logo"
            width={400}
            height={400}
            className="mx-auto w-64 h-64 sm:w-64 sm:h-64 lg:w-96 lg:h-96"
            priority
          />
        </div>
        
        <div className="space-y-6 sm:space-y-4">
          <div className="flex justify-center items-center gap-4 text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter">
            <span className="bg-gradient-to-r from-black via-black to-gray-600 bg-clip-text text-transparent">
              COMING SOON
            </span>
          </div>
        </div>
        
        <div className="mt-16 sm:mt-20 flex justify-center items-center space-x-4">
          <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-2 h-2 bg-black rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </main>
      
      <div className="absolute top-20 left-20 w-1 h-1 bg-black rounded-full animate-ping opacity-20"></div>
      <div className="absolute bottom-32 right-32 w-1 h-1 bg-black rounded-full animate-ping opacity-30" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-gray-500 rounded-full animate-pulse opacity-40" style={{animationDelay: '1.5s'}}></div>
    </div>
  );
}
