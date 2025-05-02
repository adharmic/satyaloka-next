import { AiFillInstagram } from "react-icons/ai"
import { RiBlueskyFill } from "react-icons/ri"
import { AiOutlineCopyright } from "react-icons/ai"

export default function Footer() {
  return (
    <div className="flex flex-col gap-8 d-respira ">
      <div className="w-full flex flex-row gap-8 items-center justify-between mt-8 border-1 border-[var(--damask)] rounded-lg">
        <div className="h-full w-full flex flex-col gap-4 items-center border-r-1 border-[var(--damask)] p-2">
          <p className="font-bold">Contact</p>
          <p className="text-sm h-full flex items-center gap-2"><b className="underline text-[var(--red)]">adithya@satyaloka.org</b></p>
        </div>
        <div className="h-full w-full flex flex-col gap-4 items-center justify-center p-2">
          <p className="font-bold">Follow</p>
          <div className="h-full w-full flex items-center justify-center flex-row gap-4 text-4xl text-[var(--red)]">
            <a href="https://www.instagram.com/a.dhar.mic/" className="p-2 transition-all hover:bg-[var(--damask)] rounded-full hover:text-[var(--paper)] hover:cursor-pointer">
              <AiFillInstagram />
            </a>
            <a href="https://bsky.app/profile/did:plc:bcijcdaey4of2i4v664j3nl4" className="p-2 transition-all hover:bg-[var(--damask)] rounded-full hover:text-[var(--paper)] hover:cursor-pointer">
              <RiBlueskyFill />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center justify-center h-full">SATYALOKA.ORG <AiOutlineCopyright />2025</div>
    </div>
  )
}
