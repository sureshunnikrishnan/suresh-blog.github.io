import { Feed } from "feed";

export function generateFeed(posts, metadata) {
  const site_url = "https://suresh-blog.github.io/";

  const feedOptions = {
    author: {
      name: "Suresh Unnikrishnan",
      email: "sureshunnikrishnan@gmail.com",
      link: site_url,
    },
    description: metadata.description,
    favicon: "",
    feedLinks: { atom: `${site_url}atom.xml`, rss: `${site_url}rss.xml` },
    generator: "Feed for Node.js",
    id: site_url,
    image: "",
    link: site_url,
    title: metadata.title,
    copyright: "© 2025 Suresh Unnikrishnan",
  };
  
  const feed = new Feed(feedOptions);

  for (const post of posts) {
    feed.addItem({
      date: new Date(post.date),
      description: post.spoiler,
      id: `${site_url}${post.slug}/`,
      link: `${site_url}${post.slug}/`,
      title: post.title,
    });
  }

  return feed;
}
