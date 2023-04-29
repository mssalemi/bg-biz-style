import React from 'react';
export function TextDisplay() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        paddingTop: '10vh',
        paddingLeft: '10vh',
      }}
    >
      <h1 style={{fontFamily: 'Adobe Garamond Pro', fontSize: '1.25rem'}}>
        About Me
      </h1>
      <p
        style={{
          width: '50vh',
          fontFamily: 'Adobe Garamond Pro',
          fontSize: '0.9rem',
          color: '#36454f',
        }}
      >
        {ABOUT_ME_DESC}
      </p>
    </div>
  );
}

const ABOUT_ME_DESC =
  "Bianca Giglietta is a passionate fashionista who loves helping people look their best. She is the founder of Styled by Bianca G, a service that helps people find their unique personal style. Bianca's work is a reflection of her enthusiasm, creativity and dedication to helping others. She loves working with clients to find the perfect pieces to express their individual style. Bianca is an expert in her field, and her passion for fashion has earned her a loyal following of clients. She has an eye for detail and a knack for finding the perfect outfit for any occasion. Bianca is a dedicated professional, who loves making her clients look and feel their best. Her enthusiasm and commitment to her craft is truly inspiring.";
