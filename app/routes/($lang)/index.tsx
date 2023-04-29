import {Suspense} from 'react';
import {defer, type LoaderArgs} from '@shopify/remix-oxygen';
import {Await, useLoaderData} from '@remix-run/react';

import {seoPayload} from '~/lib/seo.server';
import type {ProductConnection} from '@shopify/hydrogen/storefront-api-types';
import {AnalyticsPageType} from '@shopify/hydrogen';
import {routeHeaders, CACHE_SHORT} from '~/data/cache';

import {
  HOMEPAGE_FEATURED_PRODUCTS_QUERY,
  HOMEPAGE_SEO_QUERY,
} from '../../graphql/home/';

import {Packages} from '~/components/Packages/Packages';
import {Layout} from '~/components/Layout/Layout';
import {SideBySideLayout} from '~/components/Homepage/components/SideBySideLayout';

interface HomeSeoData {
  shop: {
    name: string;
    description: string;
  };
}

export const headers = routeHeaders;

export async function loader({params, context}: LoaderArgs) {
  const {language, country} = context.storefront.i18n;

  if (
    params.lang &&
    params.lang.toLowerCase() !== `${language}-${country}`.toLowerCase()
  ) {
    throw new Response(null, {status: 404});
  }

  const {shop} = await context.storefront.query<{
    shop: HomeSeoData;
  }>(HOMEPAGE_SEO_QUERY, {
    variables: {handle: 'freestyle'},
  });

  const seo = seoPayload.home();

  return defer(
    {
      // Shop
      shop,
      // Queries
      featuredProducts: context.storefront.query<{
        products: ProductConnection;
      }>(HOMEPAGE_FEATURED_PRODUCTS_QUERY, {
        variables: {
          country,
          language,
        },
      }),
      // Analytics + Seo
      analytics: {
        pageType: AnalyticsPageType.home,
      },
      seo,
    },
    {
      headers: {
        'Cache-Control': CACHE_SHORT,
      },
    },
  );
}

export default function Homepage() {
  const {featuredProducts} = useLoaderData<typeof loader>();

  return (
    <>
      {featuredProducts && (
        <Suspense>
          <Await resolve={featuredProducts}>
            {({products}) => {
              return (
                <>
                  <SideBySideLayout />
                  {/* <Packages products={extractNodesFromEdges(products.edges)} /> */}
                </>
              );
            }}
          </Await>
        </Suspense>
      )}
    </>
  );
}

function extractNodesFromEdges(edges: ProductConnection['edges']) {
  const products = edges.map((edge) => edge.node);
  return products;
}
