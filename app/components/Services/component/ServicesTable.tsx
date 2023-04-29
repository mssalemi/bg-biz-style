import React from 'react';
import {ServiceItem} from './ServiceItem';

export function ServicesTable() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          fontFamily: 'Adorn Garland Smooth',
          fontSize: '3rem',
          fontWeight: 700,
        }}
      >
        Services
      </h1>
      <ServiceItem />
    </div>
  );
}
