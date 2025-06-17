import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function BannerVideo() {
  return (
  <div
  style={{ position: 'relative', height: '70vh', overflow: 'hidden' }}
  id="banner-container"
>
  {/* Background Image */}
  <img
    src="assets/img/allimgLP/Screenshot.png"
    alt="Background"
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      top: 0,
      left: 0,
      zIndex: 0,
    }}
  />

  {/* Text Overlay */}
  <div
    style={{
      position: 'relative',
      zIndex: 1,
      color: 'black',
      padding: '4rem 2rem',
      fontFamily: 'sans-serif',
    }}
  >
    <ul
      style={{ fontSize: '2rem', lineHeight: '1.8' }}
      id="responsive-text-project-bannerpage"
    >
      <li style={{ borderBottom: '2px solid black', display: 'inline-block' }}>
        <Link to="/">Home →</Link>
      </li>
      <br />
      <li style={{ borderBottom: '2px solid black', display: 'inline-block' }}>
        <Link to="/Interior">Project →</Link>
      </li>
      <br />
      <li style={{ borderBottom: '2px solid black', display: 'inline-block' }}>
        <Link to="/contact">Contact →</Link>
      </li>
      <br />
    </ul>
  </div>
</div>

  );
}
