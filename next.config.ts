import createMdx from '@next/mdx'
import type { NextConfig } from "next";
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeUnwrapImages from 'rehype-unwrap-images'; 

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'tsx', 'mdx']
  
};

const withMdx = createMdx({
  options: {
    remarkPlugins: [ remarkFrontmatter, remarkMdxFrontmatter ],
    rehypePlugins: [ rehypeUnwrapImages ]
  }
  
});

export default withMdx(nextConfig);
