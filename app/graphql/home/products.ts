import {PRODUCT_CARD_FRAGMENT} from '~/data/fragments';

export const HOMEPAGE_FEATURED_PRODUCTS_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query homepageFeaturedProducts($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    products(first: 8) {
      edges {
        node {
          ...ProductCard
        }
      }
    }
  }
`;
