import Image from "next/image";
import MdxH1 from "@/components/markdown/MdxH1";
import MdxH2 from "@/components/markdown/MdxH2";
import MdxImage from "@/components/markdown/MdxImage";
import MdxLink from "@/components/markdown/MdxLink";
import MdxList from "@/components/markdown/MdxList";
import MdxTitle from "@/components/markdown/MdxTitle";
import SectionHeader from "@/components/SectionHeader";
import { ArticleMeta, getArticle, getArticleMdxContent } from "@/utilities/content-manager";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeUnwrapImages from "rehype-unwrap-images";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default async function ArticleSlug({ params }: ArticlePageProps) {
  const slug = params.slug;
  const frontmatter = getArticle(slug);
  const { content} = await compileMDX<ArticleMeta>({
    options: {
      mdxOptions: {
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
        rehypePlugins: [rehypeUnwrapImages]
      },
      parseFrontmatter: true
    },
    source: getArticleMdxContent(slug)?.content || "",
    components: {
      h1: MdxH1,
      img(props: object) { return <MdxImage {...props} /> },
      a(props: object) { return <MdxLink {...props} /> },
      ul: MdxList,
      h2: MdxH2,
    }
  });
  console.dir(frontmatter);

  return (
    <div className="flex flex-col">
      <div className="mb-8">
        <SectionHeader title="Article" />
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
      <div className="flex flex-col gap-8 text-lg im-fell">
        {content}
      </div>
    </div>
  )
}
