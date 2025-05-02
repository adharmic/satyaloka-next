import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { globbySync } from 'globby';


interface ArticleFrontmatter {
  title?: string;
  date?: number; 
  description?: string;
  img?: string;
  featured?: boolean;
}

interface ArtworkFrontmatter {
  title?: string;
  date?: number; 
  description?: string;
  img?: string;
  featured?: boolean;
}

export interface ArticleMeta {
  slug: string;
  title: string;
  date: number; // Timestamp
  description: string;
  img: string;
  featured: boolean;
}

export interface ArtworkMeta {
  slug: string;
  title: string;
  date: number; // Timestamp
  description: string;
  img: string;
  featured: boolean;
}

const contentDirectory = path.join(process.cwd(), 'src/content/'); 
const articlesDirectory = path.join(contentDirectory, 'articles');
const artworkDirectory = path.join(contentDirectory, 'artwork');

let _allArticlesCache: ArticleMeta[] | null = null;
let _allArtworksCache: ArtworkMeta[] | null = null;

/**
 * Reads all article MDX files, parses frontmatter, and returns metadata.
 */
export function getAllArticles(): ArticleMeta[] {
  if (_allArticlesCache) {
    return _allArticlesCache;
  }

  let filenames: string[] = [];
  try {
    filenames = globbySync("src/content/articles/**/*.mdx");
  } catch (error) {
    console.warn(`Could not read articles directory: ${articlesDirectory}`, error);
    return []; // Return empty if directory doesn't exist or isn't readable
  }

  const mdxFiles = filenames.filter((fn) => fn.endsWith('.mdx'));

  const articles = mdxFiles.map((filename) => {
    console.log(filename);
    const slug = filename.replace("src/content/articles/", "").replace(/\.mdx$/, '');
    const fullPath = filename;

    try {
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents); // Use gray-matter to parse frontmatter

      const frontmatter = (data || {}) as ArticleFrontmatter;

      let dateTimestamp = Date.now(); // Default to now
      if (frontmatter.date) {
        if (typeof frontmatter.date === 'number') {
          dateTimestamp = frontmatter.date;
        } else {
          try {
            dateTimestamp = new Date(frontmatter.date).getTime();
             if (isNaN(dateTimestamp)) { // Handle invalid date formats
                 console.warn(`Invalid date format in ${filename}: ${frontmatter.date}. Using current date.`);
                 dateTimestamp = Date.now();
             }
          } catch {
              console.warn(`Error parsing date in ${filename}: ${frontmatter.date}. Using current date.`);
              dateTimestamp = Date.now();
          }
        }
      }


      return {
        slug,
        title: frontmatter.title || 'Untitled Article',
        description: frontmatter.description || 'No description given.',
        img: frontmatter.img || '',
        featured: frontmatter.featured || false,
        date: dateTimestamp,
      };
    } catch (readError) {
       console.error(`Error reading or parsing article file: ${fullPath}`, readError);
       return null;
    }
  }).filter((article): article is ArticleMeta => article !== null); 

  const sortedArticles = articles.sort((a, b) => b.date - a.date);
  _allArticlesCache = sortedArticles; // Cache the result
  return sortedArticles;
}

/**
 * Reads all artwork MDX files, parses frontmatter, and returns metadata.
 */
export function getAllArtworks(): ArtworkMeta[] {
    if (_allArtworksCache) {
        return _allArtworksCache;
    }

    let filenames: string[] = [];
    try {
        filenames = fs.readdirSync(artworkDirectory);
    } catch (error) {
        console.warn(`Could not read artwork directory: ${artworkDirectory}`, error);
        return [];
    }

    const mdxFiles = filenames.filter((fn) => fn.endsWith('.mdx'));

    const artworks = mdxFiles.map((filename) => {
        const slug = filename.replace(/\.mdx$/, '');
        const fullPath = path.join(artworkDirectory, filename);

        try {
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data } = matter(fileContents);

            const frontmatter = (data || {}) as ArtworkFrontmatter;

            let dateTimestamp = Date.now();
            if (frontmatter.date) {
                if (typeof frontmatter.date === 'number') {
                    dateTimestamp = frontmatter.date;
                } else {
                    try {
                        dateTimestamp = new Date(frontmatter.date).getTime();
                        if (isNaN(dateTimestamp)) {
                            console.warn(`Invalid date format in ${filename}: ${frontmatter.date}. Using current date.`);
                            dateTimestamp = Date.now();
                        }
                    } catch {
                        console.warn(`Error parsing date in ${filename}: ${frontmatter.date}. Using current date.`);
                        dateTimestamp = Date.now();
                    }
                }
            }

            return {
                slug,
                title: frontmatter.title || 'Untitled Artwork',
                description: frontmatter.description || 'No description given.',
                img: frontmatter.img || '',
                featured: frontmatter.featured || false,
                date: dateTimestamp,
            };
        } catch (readError) {
            console.error(`Error reading or parsing artwork file: ${fullPath}`, readError);
            return null;
        }
    }).filter((artwork): artwork is ArtworkMeta => artwork !== null);

    const sortedArtworks = artworks.sort((a, b) => b.date - a.date);
    _allArtworksCache = sortedArtworks;
    return sortedArtworks;
}

/**
 * Gets metadata for a single article by slug.
 */
export function getArticle(slug: string): ArticleMeta | undefined {
  return getAllArticles().find((article) => article.slug === slug);
}

/**
 * Gets metadata for a single artwork by slug.
 */
export function getArtwork(slug: string): ArtworkMeta | undefined {
  return getAllArtworks().find((artwork) => artwork.slug === slug);
}

export function getFeaturedArticles(): ArticleMeta[] {
  return getAllArticles().filter((article) => article.featured);
}

export function getFeaturedArtworks(): ArtworkMeta[] {
  return getAllArtworks().filter((artwork) => artwork.featured);
}

export function getRecentArticles(count: number = 3): ArticleMeta[] {
  return getAllArticles().slice(0, count);
}

export function getRecentArtworks(count: number = 3): ArtworkMeta[] {
  return getAllArtworks().slice(0, count);
}

/**
 * Helper to get just the raw MDX content for a given slug.
 */
export function getArticleMdxContent(slug: string): { content: string; frontmatter: ArticleFrontmatter } | null {
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
    try {
        if (fs.existsSync(fullPath)) {
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { content, data } = matter(fileContents);
            return { content, frontmatter: data as ArticleFrontmatter };
        }
    } catch (error) {
        console.error(`Error reading content for article slug ${slug}:`, error);
    }
    return null;
}
