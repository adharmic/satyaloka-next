import SectionHeader from "@/components/SectionHeader";
import SquareThumb from "@/components/SquareThumb";
import { getAllArtworks } from "@/utilities/content-manager";

export default function Artworks() {
  const artworks = getAllArtworks();

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader title="Artwork" />
      <div className="flex flex-row gap-4 flex-wrap items-center justify-between">
        {artworks.map((artwork, index) => {
          return (
            <div key={index}>
              <SquareThumb link={"/artworks/" + artwork.slug} alt={index % 2 == 1} title={artwork.title} img={artwork.img} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
