import { SlArrowRight } from "react-icons/sl"
import Link from "next/link"

interface SquareThumbProps {
  title: string,
  img: string,
  alt?: boolean,
  link: string
}

export default function SquareThumb(props: SquareThumbProps) {
  return (
    <div className={`drop-shadow-xl w-full lg:w-72 h-full lg:h-100 text-[var(--paper)] border-1 border-[var(--damask)] rounded-lg bg-[var(--red)] ${props.alt && "bg-[var(--secondary)]"}`}>
      <div className="h-full p-4 flex flex-col gap-2">
        <Link href={props.link} className="w-full">
        <img className={`hover:border-[var(--damask)] transition-all w-full aspect-square object-cover rounded-lg border-1 ${props.alt && "border-[var(--damask)] hover:border-[var(--paper)]" || "border-[var(--paper)]"}`} src={props.img} />
        </Link>
        <div className="h-full d-respira text-xl flex flex-row items-center justify-between">
          <Link href={props.link} className={`hover:underline transition-all hover:cursor-pointer self-start w-full ${props.alt && "text-[var(--damask)]" || ""}`}>
            {props.title}
          </Link>
          <a href={props.link} className="transition-all hover:cursor-pointer active:scale-90 hover:bg-[var(--paper)] hover:text-[var(--damask)] self-end drop-shadow-lg w-12 min-w-12 aspect-square bg-[var(--damask)] rounded-full text-[var(--paper)] flex items-center justify-center text-2xl">
            <SlArrowRight />
          </a>
        </div>
      </div>
    </div>
  )
}
