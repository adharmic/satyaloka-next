import { PropsWithChildren } from "react";

interface MdxLinkProps {
  href?: string
}

export default function MdxLink(props: PropsWithChildren<MdxLinkProps>) {
  return (
    <a className="transition-all bg-[var(--secondary)] hover:bg-[var(--damask)] hover:text-[var(--paper)] px-1 rounded-sm" href={props.href}>
      {props.children}
    </a>
  )
}
