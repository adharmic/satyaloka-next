import { PropsWithChildren } from "react"

export default function Paper(props: PropsWithChildren) {
  return <div className="w-full max-w-[1000px] bg-[var(--paper)] p-8 h-dvh flex flex-col overflow-y-scroll scroller">
    {props.children}
  </div>
} 
