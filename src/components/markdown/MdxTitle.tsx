import { PropsWithChildren } from "react";

export default function MdxTitle(props: PropsWithChildren) {
  return (
    <div className="text-xl md:text-2xl font-[700] p-4 w-full rounded-t-xl text-start bg-[var(--damask)] text-[var(--paper)] drop-shadow-lg">
      {props.children}
    </div>
  )
}
