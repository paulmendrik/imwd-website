
import sanityClient from './sanity'

import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source) {
  return builder.image(source)
}

const serviceFields = `
  _id,
  title,
  image,
  content,
  order
`

const technologyFields = `
  _id,
  title,
  content,
  frontend,
  "frontendimage": frontendlogos[]->logo.asset->url,
  "frontendname": frontendlogos[]->title,
  ecommerce,
  "ecommerceimage": ecommercelogos[]->logo.asset->url,
  "ecommercename": ecommercelogos[]->title,
  cms,
  "cmsimage": cmslogos[]->logo.asset->url,
  "cmsname": cmslogos[]->title,

`

export async function getServices() {
    const results = await sanityClient
    .fetch(`*[_type == "services"] | order(order)  {${serviceFields}}`);
    return results;
}


export async function getTechnologies() {
  const results = await sanityClient
  .fetch(`*[_type == "technologies"] {${technologyFields}}`);
  return results;
}

export async function getCities() {
  const results = await sanityClient
  .fetch(`*[_type == "cities"]`);
  return results;
}