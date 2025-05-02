import { PropsWithChildren } from "react";

export default function MdxH2(props: PropsWithChildren) {
  return (
    <div className="font-[600] text-2xl border-0 border-[var(--damask)] w-fit rounded-lg">
      {"> "}{props.children}{" <"}
    </div>
  )
}
