import React from 'react';

import type {ProductEdge} from '@shopify/hydrogen/storefront-api-types';

interface Props {
  products: any;
}

export function Packages({products}: Props) {
  console.log('Packages', products);
  return <div>Packages</div>;
}
