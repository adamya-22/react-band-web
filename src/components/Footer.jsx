import React from 'react'
import '../styles/style.css'

const Footer = () => {
  return (
    <>
<footer>
  <div class="foo-par">
    <div class="foo-c1">
      <h1>THE<br/> ECHO <br/>VERSE</h1>
    </div>
    <div class="foo-c2">
      <h2 class="foo-h2">MENU</h2>
      <a href="#">Episodes</a>
      <a href="#">The Pop Blog</a>
    </div>
    <div class="foo-c3">
      <h2 class="foo-h2">CONTACT ME</h2>
      <div class="foo-c3-d">
        <a href="#">
          <i class="fa-brands fa-square-instagram"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-youtube"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-facebook"></i>
        </a>
      </div>
    </div>
    <div class="foo-c4">
      <h2 class="foo-h2">LISTEN NOW</h2>
      <div class="foo-c4-links">
        <a href="#" class="ava-l">APPLE PODCASTS</a>
        <span>
          <a href="#" class="ava-l">SPOTIFY</a>
          <a href="#" class="ava-l">STITCHER</a>
        </span>
        <a href="#" class="ava-l">GOOGLE PODCAST</a>
      </div>
    </div>
  </div>
</footer>
<div class="foo-bel">
  <p>Published by WictroniX&copy;</p>
</div>
    </>
  )
}

export default Footer