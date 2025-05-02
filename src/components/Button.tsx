import Link from "next/link"

interface ButtonProps {
  title: string,
  alt?: boolean,
  link: string
}

export default function Button(props: ButtonProps) {
  return (
    <Link href={props.link} className={"text-lg w-fit hover:!bg-[var(--damask)] hover:!text-[var(--paper)] hover:cursor-pointer transition-all border-1 border-[var(--damask)] px-2 rounded-lg bg-[var(--red)] d-respira active:scale-90 text-[var(--paper)] " + (props.alt && " !bg-[var(--secondary)] !text-[var(--damask)]")}>{props.title}</Link>
  )
}
