import React from 'react';
import {Content} from './Content';

export function SideBySideLayout() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'end',
          paddingTop: '10vh',
        }}
      >
        <img
          src="https://ik.imagekit.io/gtbbbbnpb/main.png?updatedAt=1679831518889"
          alt="main"
          style={{
            height: '60vh',
            color: '#36454f',
            fontFamily: 'Adobe Garamond Pro',
          }}
        />
      </div>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'start',
          paddingTop: '10vh',
          paddingLeft: '3vw',
        }}
      >
        <Content />
      </div>
    </div>
  );
}
