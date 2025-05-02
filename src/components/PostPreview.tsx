import Button from "./Button";

interface PostPreviewProps {
  alt?: boolean,
  title?: string,
  description?: string,
  img?: string,
  link?: string,
}

export default function PostPreview(props: PostPreviewProps) {
  console.log(props);
  return (
    <div className={"w-full flex flex-col md:flex-row gap-4 justify-evenly border-1 border-[var(--damask)] p-4 rounded-lg bg-[var(--secondary)] text-[var(--damask)] drop-shadow-xl" + (props.alt && " !bg-[var(--red)] text-[var(--paper)]")}>
      <div className="w-full flex flex-col gap-4 md:p-2 justify-center">
        <div className="d-respira text-2xl font-bold">{props.title || "Here's what a sample blog title would look like."}</div>
        <div className="d-respira">{props.description || "And here's what that post's extended description might say. Lorem ipsum dolor sit amet. Something something something."}</div>
        <Button alt={props.alt} link={props.link || ""} title="Read More" />
      </div>
      <div className="w-full border-1 border-[var(--damask)] h-64 rounded-lg">
        <img className="w-full h-full object-cover rounded-lg" src={props.img} />
      </div>
    </div>
  )
}
