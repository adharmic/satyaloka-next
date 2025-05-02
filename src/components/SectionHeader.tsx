import { PropsWithChildren } from "react"

interface SectionHeaderProps {
  title?: string
}

export default function SectionHeader(props: PropsWithChildren<SectionHeaderProps>) {
  return (
    <div className="w-full flex flex-row items-center gap-0 justify-center">
      <div className="w-full border-t-1 border-[var(--damask)]" />
      <div className="border-1 border-[var(--damask)] text-[var(--damask)] p-2 px-4 rounded-lg font-extrabold d-respira text-3xl w-full flex items-center justify-center text-center">{props.title || props.children}</div>
      <div className="w-full border-t-1 border-[var(--damask)]" />
    </div>

  )
}
