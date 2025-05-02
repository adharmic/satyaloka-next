import PostPreview from "@/components/PostPreview";
import SectionHeader from "@/components/SectionHeader";
import SquareThumb from "@/components/SquareThumb";
import { getFeaturedArticles, getFeaturedArtworks, getRecentArticles, getRecentArtworks } from "@/utilities/content-manager";

export default function Home() {
  const featuredArticles = getFeaturedArticles();
  const featuredArtwork = getFeaturedArtworks();
  const recentArticles = getRecentArticles();
  const recentArtwork = getRecentArtworks();

  return (
    <div className="w-full flex flex-col gap-8">
      <SectionHeader title="Featured" />
      <div className="w-full flex flex-col md:flex-row items-center gap-4 justify-between">
        {featuredArtwork.map((artwork, index) => <SquareThumb key={index} link={"/artworks/" + artwork.slug} img={artwork.img} title={artwork.title} />)}
      </div>
      {featuredArticles.map((featuredArticle, index) =>
        <PostPreview key={index} title={featuredArticle.title} link={"/articles/" + featuredArticle.slug} description={featuredArticle.description} img={featuredArticle.img} />
      )}
      <SectionHeader title="Recent" />
      {recentArticles.map((article, index) =>
        <PostPreview key={index} title={article.title} link={"/articles/" + article.slug} description={article.description} img={article.img} />
      )}
      <div className="w-full flex flex-col md:flex-row items-center gap-4 justify-between">
        {recentArtwork.map((artwork, index) => <SquareThumb key={index} link={"/artworks/" + artwork.slug} img={artwork.img} title={artwork.title} />)}
      </div>
    </div>
  )
}

