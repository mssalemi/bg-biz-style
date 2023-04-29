import React from 'react';
import {TextDisplay} from '../../../components';

function AboutMe() {
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
      <TextDisplay />
    </div>
  );
}

export default AboutMe;

const ABOUT_ME_DESC =
  'My name is Bianca Giglietta and I am a stylist with a passion for creating looks. I live and breathe fashion, and I love helping others to find their individual style. My goal is to make people feel their best selves through fashion and styling.I have been involved in the fashion industry for over 10 years, both as a stylist and a creative director. During this time I have had the opportunity to work with some of the biggest names in the industry, as well as many up and coming designers. I love the challenge of creating unique, fashion-forward looks and helping to bring each person’s individual style to life.I believe that fashion should be fun, and I strive to create looks that reflect each person’s personality and make them feel confident and beautiful. My styling approach is unique and innovative, and I take pride in the fact that I am able to help people express themselves through their wardrobe.I am always on the lookout for the latest trends and styles, and I am never afraid to think outside the box. I am constantly inspired by the world around me, and I am passionate about helping others to discover their own personal style.';
