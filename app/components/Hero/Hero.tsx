import React from 'react';

import type {Metafield} from '@shopify/hydrogen/storefront-api-types';

export interface CollectionHero {
  byline: Metafield;
  cta: Metafield;
  handle: string;
  heading: Metafield;
  height?: 'full';
  loading?: 'eager' | 'lazy';
  spread: Metafield;
  spreadSecondary: Metafield;
  top?: boolean;
}

export function Hero(props: CollectionHero) {
  console.log(props);
  return <div>Hero</div>;
}
