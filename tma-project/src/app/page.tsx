import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert rounded-xl"
          src="/default.webp"
          alt="My logo"
          width={48}
          height={48}
          priority
        />
        <h1>Halo, saya Risman Gunawan</h1>
        <p>Harapan saya terhadap TMA adalah mendapatkan pengalaman membangun project nyata, meningkatkan skill teknis, dan berkolaborasi dengan baik.</p>
        <p>Secara teknis mungkin kita semua disini bisa dikatakan mampu, namun kita butuh pemimpin teknis yang mengarahkan kita secara teknis pula. Butuh arah dan tujuan yang lebih jelas karena karyawan semakin banyak, dan tidak bisa menggunnakan metode kekeluargaan lagi.</p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            Jokes
          </a>
          
        </div>
      </main>
    </div>
  );
}
