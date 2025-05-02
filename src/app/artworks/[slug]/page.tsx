import Image from "next/image";
import MdxTitle from "@/components/markdown/MdxTitle";
import SectionHeader from "@/components/SectionHeader";
import { getArtwork } from "@/utilities/content-manager";

export default async function ArtworkSlug(params: Promise<{ params: { slug: string } }>) {
  const p = await params
  const frontmatter = getArtwork(p.params.slug);
  return (
    <div className="flex flex-col">
      <div className="mb-8">
        <SectionHeader title="Artwork" />
      </div>
      <MdxTitle >
        {frontmatter?.title}
      </MdxTitle>
      <div className="h-full w-full rounded-xl">
        <Image width={2000} height={2000} alt={p.params.slug} className="h-full w-full object-contain border-2 border-[var(--damask)]" src={frontmatter?.img || ""} />
      </div>
      <div className="text-end p-4 bg-[var(--damask)] w-full rounded-b-xl self-end text-[var(--paper)] mb-8">
        {`Published on ${new Date(frontmatter?.date || 0).toLocaleDateString()}`}
      </div>
    </div>
  )
}
