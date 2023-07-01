import React from 'react'
import '../styles/episodes.scss'
import '../styles/style.css'
import ball from '../assets/ball.png'

const Episodes = () => {
  return (
    <>
    <div className="new-song">
      <div className="ep-song-container">
        <h3>OUR NEW RELEASE</h3>
        <div className="fade_rule"></div>
        <div className="setup">
          <img src="https://i.pinimg.com/236x/81/d8/df/81d8dffcb104d73a91f06cca6dff620a.jpg" alt=""/>
          <img class="ball" src={ball} alt=""></img>
        </div>
        <div className="song-det">
          <h2>REPUTATION</h2>
          <p>by <h3>SASHA</h3></p>
        </div>
      </div>
      
      <div className="sidebar">
      <h3>LISTEN NOW</h3>
      <a href="#"><i class="fa-brands fa-apple"></i></a>
      <a href="#"><i class="fa-brands fa-spotify"></i></a>
      <a href="#"><i class="fa-brands fa-google"></i></a>
      <a href="#"><i class="fa-brands fa-amazon"></i></a>  
      </div>
    </div>
    <div className="ep-this-alb">
    <center><h3>EXPLORE THE ALBUM</h3></center>
    <div className="oth-alb">

<div className="alb-intro">
  {/* <img src={rts} alt="" /> */}
  <div className="alb-tit">
    <h3>The Road To Sunset</h3>
    <h4>Gabriela's Dream</h4>
  </div>
  <i class="fa-solid fa-share-nodes"></i>
  <a href="#">Buy Now</a>
</div>

<div className="ep-song-li">

  <div className="alb-song">
    <a href="#">
      <i class="fa-solid fa-play"></i>
      <h4>Song 1</h4>        
      <h4 class="alb-song-dur">02:00</h4>
      <div class="alb-song-hid">
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-solid fa-share-nodes"></i>
      </div>
    </a>
  </div>

  <div className="alb-song">
    <a href="#">
      <i class="fa-solid fa-play"></i>
      <h4>Song 2</h4>        
      <h4 class="alb-song-dur">02:30</h4>
      <div class="alb-song-hid">
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-solid fa-share-nodes"></i>
      </div>
    </a>
  </div>
  <div className="alb-song">
    <a href="#">
      <i class="fa-solid fa-play"></i>
      <h4>Song 3</h4>        
      <h4 class="alb-song-dur">03:00</h4>
      <div class="alb-song-hid">
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-solid fa-share-nodes"></i>
      </div>
    </a>
  </div>
  <div className="alb-song">
    <a href="#">
      <i class="fa-solid fa-play"></i>
      <h4>Song 4</h4>        
      <h4 class="alb-song-dur">03:30</h4>
      <div class="alb-song-hid">
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-solid fa-share-nodes"></i>
      </div>
    </a>
  </div>
  <div className="alb-song">
    <a href="#">
      <i class="fa-solid fa-play"></i>
      <h4>Song 5</h4>        
      <h4 class="alb-song-dur">04:00</h4>
      <div class="alb-song-hid">
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-solid fa-share-nodes"></i>
      </div>
    </a>
  </div>
</div>

</div>
    </div>
    </>
  )
}

export default Episodes