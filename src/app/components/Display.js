import React from 'react';
import displayImage from '../assets/display-image.jpg'
import './Display.css';

export function Display() {
  return (
    <div className="display-component lg:col-span-3 md:col-span-4 col-span-12 bg-cover md:bg-right bg-center" style={{ backgroundImage: `url(${displayImage})` }} >

    </div>
  );
}
