import SectionHeader from "@/components/SectionHeader";
import PostPreview from "@/components/PostPreview";
import { getAllArticles } from "@/utilities/content-manager";

export default function Articles() {
  const articles = getAllArticles();

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader title="Articles" />
      {articles.map((article, index) => {
        return (
          <div key={index}>
            <PostPreview img={article.img} link={"/articles/" + article.slug} title={article.title} description={article.description} alt={index % 2 == 0} />
          </div>
        )
      })}
    </div >
  )
}

