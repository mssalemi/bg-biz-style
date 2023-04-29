import {defer, type LoaderArgs} from '@shopify/remix-oxygen';
import {Suspense} from 'react';
import {Await, useLoaderData} from '@remix-run/react';
import {Services as ServicesPage} from '~/components/Services/Services';

import {PRODUCT_CARD_FRAGMENT} from '~/data/fragments';

import type {ProductConnection} from '@shopify/hydrogen/storefront-api-types';

interface SeoData {
  shop: {
    name: string;
    description: string;
  };
}

export async function loader({params, request, context}: LoaderArgs) {
  const {language, country} = context.storefront.i18n;

  // Maybe need URL later for something
  const searchParams = new URL(request.url).searchParams;
  const selectedOptions: any[] = [];
  searchParams.forEach((value, name) => {
    selectedOptions.push({name, value});
  });

  // Move this to graphql file
  const SEO_QUERY = `#graphql
  query shopSEOQuery($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    shop {
      name
      description
    }
  }
`;

  const {shop} = await context.storefront.query<{
    shop: SeoData;
  }>(SEO_QUERY, {
    variables: {handle: 'freestyle'},
  });

  console.log(SEO_QUERY);
  // TODO: Add SEO Stuff

  const HOMEPAGE_FEATURED_PRODUCTS_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query homepageFeaturedProducts($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    products(first: 8) {
      nodes {
        ...ProductCard
      }
    }
  }
`;

  return defer({
    shop,
    products: context.storefront.query<{products: ProductConnection}>(
      HOMEPAGE_FEATURED_PRODUCTS_QUERY,
      {
        variables: {
          country,
          language,
        },
      },
    ),
  });
}

function Services() {
  const {shop, products} = useLoaderData<typeof loader>();

  console.log(products);
  return (
    <>
      {products && (
        <Suspense>
          <Await resolve={products}>
            {({products}) => {
              // TODO: Extract Me
              console.log(products);
              if (!products?.nodes) return <></>;
              // return <Services products={products.nodes} />;
              return <ServicesPage products={products.nodes} />;
            }}
          </Await>
        </Suspense>
      )}
    </>
  );
}

export default Services;
