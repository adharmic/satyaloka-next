import type { MDXComponents } from "mdx/types";
import MdxH1 from "./components/markdown/MdxH1";
import MdxImage from "./components/markdown/MdxImage";
import MdxLink from "./components/markdown/MdxLink";
import MdxList from "./components/markdown/MdxList";
import MdxH2 from "./components/markdown/MdxH2";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: MdxH1,
    img(props: object) { return <MdxImage {...props} /> },
    a(props: object) { return <MdxLink {...props} /> },
    ul: MdxList,
    h2: MdxH2,
  }
}
