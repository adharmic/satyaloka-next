import { PropsWithChildren } from "react";

export default function MdxList(props: PropsWithChildren) {
  return (
    <div className="pl-8 -mt-4">
      {props.children}
    </div>
  )
}
