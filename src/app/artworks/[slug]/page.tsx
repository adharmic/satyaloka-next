import Image from "next/image";
import MdxTitle from "@/components/markdown/MdxTitle";
import SectionHeader from "@/components/SectionHeader";
import { getAllArtworks, getArtwork } from "@/utilities/content-manager";

export async function generateStaticParams() {
  return getAllArtworks().map((artwork) => ({
    slug: artwork.slug,
  }))
}

interface ArtworkPageProps {
  params: Promise<{ slug: string }>
}

export default async function ArtworkSlug(props: ArtworkPageProps) {
  const { slug } = await props.params;

  const frontmatter = getArtwork(slug);
  return (
    <div className="flex flex-col">
      <div className="mb-8">
        <SectionHeader title="Artwork" />
      </div>
      <MdxTitle >
        {frontmatter?.title}
      </MdxTitle>
      <div className="h-full w-full rounded-xl">
        <Image width={2000} height={2000} alt={slug} className="h-full w-full object-contain border-2 border-[var(--damask)]" src={frontmatter?.img || ""} />
      </div>
      <div className="text-end p-4 bg-[var(--damask)] w-full rounded-b-xl self-end text-[var(--paper)] mb-8">
        {`Published on ${new Date(frontmatter?.date || 0).toLocaleDateString()}`}
      </div>
    </div>
  )
}
