import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Image 
          src="/logos.png"
          alt="HomeCook ASMR Logo"
          width={150}
          height={150}
          className="rounded-full object-cover"
          priority
        />
        <p className="text-center text-lg">
          Welcome to HomeCook ASMR. We are Currently under development
        </p>
        <p className="text-center text-lg">
          Stay tuned for our upcoming ASMR cooking videos!
        </p>
        <p className="text-center text-lg">
            contact us at: info@homecookasmr.com
        </p>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        &copy; 2025 HomeCook ASMR. All rights reserved.
      </footer>
    </div>
  );
}
