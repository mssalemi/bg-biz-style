import {useParams, Form, Await, useMatches} from '@remix-run/react';
import {useWindowScroll} from 'react-use';

import {type EnhancedMenu} from '~/lib/utils';

import {DesktopNavigation} from '~/components/Header/DesktopNavigation/DesktopNavigation';
import {Link} from '~/components/Shopify';

export function DesktopHeader({
  menu,
  title,
}: {
  isHome: boolean;
  openCart: () => void;
  menu?: EnhancedMenu;
  title: string;
}) {
  const params = useParams();
  const {y} = useWindowScroll();
  return (
    <header role="banner">
      <div className="flex justify-between">
        <div
          className="flex justify-start"
          style={{
            fontFamily: 'Adobe Garamond Pro',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 10px 0 10px',
            color: '#36454f',
          }}
        >
          <Link style={{verticalAlign: 'center'}} to="/" prefetch="intent">
            <span
              style={{
                fontFamily: 'Adobe Garamond Pro',
              }}
            >
              STYLED BY{'     '}
            </span>
            <span
              style={{
                fontFamily: 'Adobe Garamond Pro',
                fontSize: '1.25em',
                marginLeft: '5px',
              }}
            >
              BIANCA G
            </span>
          </Link>
        </div>
        <div>
          <DesktopNavigation menu={menu} />
        </div>
      </div>
    </header>
  );
}
