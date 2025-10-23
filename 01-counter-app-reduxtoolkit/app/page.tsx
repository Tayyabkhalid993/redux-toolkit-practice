import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Link href="/counter" className="hover:underline transition-all hover:duration-500 hover:text-red-700">Go to Counter Page</Link>
      
    </div>
  );
}
