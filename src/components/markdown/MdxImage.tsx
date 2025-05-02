interface MdxImageProps {
  src?: string,
  alt?: string,
}

export default function MdxImage(props: MdxImageProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="drop-shadow-2xl flex flex-col bg-[var(--damask)] rounded-xl items-center justify-center w-fit p-4">
        <img className="max-h-[400px] border-1 border-[var(--damask)] rounded-xl object-contain w-fit" src={props.src} alt={props.alt} />
      </div>
      <div className="px-4 rounded-xl bg-[var(--damask)] text-[var(--paper)] border-1 border-[var(--damask)] -mt-6 z-10">
        {props.alt}
      </div>
    </div>
  )
}
