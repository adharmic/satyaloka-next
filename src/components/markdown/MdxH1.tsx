import { PropsWithChildren } from "react";
import { Della_Respira } from "next/font/google";

const d_respira = Della_Respira({
  subsets: ["latin"],
  weight: "400"
})

export default function MdxH1(props: PropsWithChildren) {
  return (
    <div className={"font-[600] text-2xl pr-8 pl-8 p-2 border-r-1 border-y-1 border-[var(--damask)] w-fit rounded-r-lg drop-shadow-xl bg-[var(--damask)] text-[var(--paper)] relative -left-8 " + d_respira.className}>
      {props.children}
    </div>
  )
}
