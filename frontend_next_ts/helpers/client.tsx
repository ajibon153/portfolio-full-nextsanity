import SanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = SanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-08-01',
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
