import { lazy, Suspense } from "react";
import { useParams } from "react-router";
import SectionHeader from "./SectionHeader";
import { getArtwork } from "../utilities/content-manager";
import MdxTitle from "./markdown/MdxTitle";
import MdxH1 from "./markdown/MdxH1";
import MdxList from "./markdown/MdxList";
import MdxImage from "./markdown/MdxImage";
import MdxLink from "./markdown/MdxLink";
import MdxH2 from "./markdown/MdxH2";
import { IM_Fell_English } from "next/font/google";

const im_fell = IM_Fell_English({
  weight: [400]
})

export default function Artwork() {
  const { slug } = useParams();
  const frontmatter = getArtwork(slug || "");
  const MdxArtwork = lazy(() => import(`../content/artwork/${slug}.mdx`));

  return (
    <div>
      <div className="mb-8">
        <SectionHeader title="Artwork" />
      </div>
      <MdxTitle >
        {frontmatter?.title}
      </MdxTitle>
      <div className="h-fit w-full rounded-xl">
        <img className="h-fit w-full object-contain border-2 border-[var(--damask)]" src={frontmatter?.img} />
      </div>
      <div className="text-end p-4 bg-[var(--damask)] w-full rounded-b-xl self-end text-[var(--paper)] mb-8">
        {`Published on ${new Date(frontmatter?.date || 0).toLocaleDateString()}`}
      </div>
      <Suspense fallback={<div>Loading article...</div>}>
        <div className={"flex flex-col gap-8 text-lg " + im_fell.className}>
          <MdxArtwork components={{
            h1: MdxH1,
            img(props: object) { return <MdxImage {...props} /> },
            a(props: object) { return <MdxLink {...props} /> },
            ul: MdxList,
            h2: MdxH2,
          }} />
        </div>
      </Suspense>
    </div>
  )

}
