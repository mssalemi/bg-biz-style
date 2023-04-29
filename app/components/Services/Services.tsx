import React from 'react';
import {ServicesTable} from './component/ServicesTable';

export function Services({
  products,
}: {
  products: [
    {
      id: string;
      title: string;
      handle: string;
      description: string;
    },
  ];
}) {
  console.log(products);
  return (
    <div>
      <ServicesTable />
    </div>
  );
}
