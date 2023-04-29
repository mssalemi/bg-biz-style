import React from 'react';

export function ServiceItem() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'start',
        width: '100%',
      }}
    >
      <div
        style={{
          width: '40%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Left
      </div>
      <div
        style={{
          width: '60%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Right
      </div>
    </div>
  );
}
