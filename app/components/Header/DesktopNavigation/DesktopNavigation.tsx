import React from 'react';
import {type EnhancedMenu} from '~/lib/utils';

import {Link} from '~/components/Shopify';

const routes = [
  {id: 'aboutme', to: '/aboutme', title: 'About Me', target: '_self'},
  {id: 'contact', to: '/contact', title: 'Contact', target: '_self'},
  {id: 'contact', to: '/services', title: 'Services', target: '_self'},
  {
    id: 'inspiration',
    to: '/inspiration',
    title: 'Inspiration',
    target: '_self',
  },
  {
    id: 'instgram',
    to: 'https://www.instagram.com/beegiglietta/?hl=en',
    title: 'Instagram',
    target: '_blank',
  },
];

export function DesktopNavigation({menu}: {menu?: EnhancedMenu}) {
  return (
    <nav>
      <div
        style={{
          display: 'flex',
          height: '55px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {routes.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              target={item.target}
              prefetch="intent"
            >
              <div
                style={{
                  fontFamily: 'Adobe Garamond Pro',
                  margin: '5px 10px 0 10px',
                }}
              >
                {item.title.toUpperCase()}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
