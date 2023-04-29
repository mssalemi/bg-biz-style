import React, {Suspense} from 'react';
import {Await, useLoaderData} from '@remix-run/react';

function ResolveComponentWithShopify({toResolve, children}) {
  console.log('toResolve', toResolve);
  return (
    <Suspense>
      <Await resolve={toResolve}>{children}</Await>
    </Suspense>
  );
}

export default ResolveComponentWithShopify;
