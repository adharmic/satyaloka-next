import Link from "next/link";
import Separator from "./decorations/Separator";

export default function Navbar() {
  return (
    <div className="flex flex-col gap-0">
      <Separator />
      <div className="h-full w-full flex flex-row items-center gap-4 d-respira font-extrabold justify-evenly text-[10px] md:text-lg">
        <Link href="/" className="transition-all hover:text-[var(--red)] hover:cursor-pointer">HOME</Link>
        <div className="h-10 border-r border-[var(--damask)]" />
        <Link href="/about" className="transition-all hover:text-[var(--red)] hover:cursor-pointer">ABOUT</Link>
        <div className="h-10 border-r border-[var(--damask)]" />
        <Link href="/artworks" className="transition-all hover:text-[var(--red)] hover:cursor-pointer">ARTWORK</Link>
        <div className="h-10 border-r border-[var(--damask)]" />
        <Link href="/articles" className="transition-all hover:text-[var(--red)] hover:cursor-pointer">ARTICLES</Link>
      </div>
      <Separator />
    </div>
  )
}
