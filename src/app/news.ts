export class News {
  description: string;
  provider: { name: string }[];
  url: string;
  name: string;
  image: {
    thumbnail: { contentUrl: string }
  } | null;
}
