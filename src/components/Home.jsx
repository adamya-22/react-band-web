import React from 'react'
import {NavLink} from 'react-router-dom'

import '../styles/navbar.css'
import '../styles/parallax.css'
import '../styles/parallax2.css'
import '../styles/slider.css'
import '../styles/style.css'
import '../additional/slider'

// importing images
// import star from '../assets/star.png'
import plane from '../assets/plane.webp'

const Home = () => {
  return (
    <>
        {/* <div className="tot"> */}
        
    
        <div className="top-details">
          <div className="band-name">
            <h1 className="bn-heading">THE ECHO <br/>VERSE</h1>
          </div>
          <div className="band-details">
            <div className="band-slog">
              <p>Where melodies<br/>
                take a Flight...
              </p>
            </div>
            <div className="band-para">
              <p>Our Band is a remarkable musical group that embodies a special fusion of ability, enthusiasm, and innovation.</p>
            </div>
          </div>
        </div>

      {/* </div> */}
     

    {/* slider 2 */}
    <div className="nav-he-con"><h1 className="nav-heading" id="nav01">Listen To Our Greatest Hits</h1></div>
    {/* <img src={star} alt="" className="rotate"/> */}
    <div className="ext">
    <div className="external">
      <div className="horizontal-scroll-wrapper">
        <div className="img-wrapper slower">
          <NavLink to="/episodes"><img src="https://i.pinimg.com/236x/81/d8/df/81d8dffcb104d73a91f06cca6dff620a.jpg" alt=""/>
          </NavLink>
          <h7 className="sl-img-cap">song 1</h7>
        </div>
    
        <div className="img-wrapper faster">
          <a href="#" target="_blank" rel="noopener">
            <img src="https://i.pinimg.com/236x/7d/e9/9d/7de99df15316ee64c034f0e50831cf17.jpg" alt=""/>
          </a>
          <h7 className="sl-img-cap">song 2</h7>
        </div>
    
        <div className="img-wrapper slower vertical">
          <a href="#" target="_blank" rel="noopener">
            <img src="https://i.pinimg.com/236x/ca/1a/1b/ca1a1b0c9f4f35849cd1373b3b0238e9.jpg" alt=""/>
          </a>
          <h7 className="sl-img-cap">song 3</h7>
        </div>
    
        <div className="img-wrapper slower slower-down">
          <a href="#" target="_blank" rel="noopener">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/swanduckriver.jpg" alt=""/>
          </a>
          <h7 className="sl-img-cap">song 4</h7>
        </div>
    
        <div className="img-wrapper">
          <a href="#" target="_blank" rel="noopener">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/cafe-terrace.jpg" alt=""/>
          </a>
          <h7 className="sl-img-cap">song 5</h7>
        </div>
    
        <div className="img-wrapper slower">
          <a href="#" target="_blank" rel="noopener">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-seine-boat.jpg" alt=""/>
          </a>
          <h7 className="sl-img-cap">song 6</h7>
        </div>
    
        <div className="img-wrapper faster1">
          <a href="#" target="_blank" rel="noopener">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/old-man-river.jpg" alt=""/>
          </a>
          <h7 className="sl-img-cap">song 7</h7>
        </div>
        
        <div className="img-wrapper slower slower2">
          <a href="#" target="_blank" rel="noopener">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/cafe-table-street.jpg" alt=""/>
          </a>
          <h7 className="sl-img-cap">song 8</h7>
        </div>
        
        <div className="img-wrapper">
          <a href="#" target="_blank" rel="noopener">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/street-scene-people.jpg" alt=""/>
          </a>
          <h7 className="sl-img-cap">song 9</h7>
        </div>
        
        <div className="img-wrapper slower">
          <a href="#" target="_blank" rel="noopener">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/notre-dame-river-boat.jpg" alt=""/>
          </a>
          <h7 className="sl-img-cap">song 10</h7>
        </div>
        
        <div className="img-wrapper slower last">
          <a href="#" target="_blank" rel="noopener">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/shop-window-reflection.jpg" alt=""/>
          </a>
          <h7 className="sl-img-cap">song 11</h7>
        </div>
      </div>
    </div>
  </div>



{/* links  */}
<div id="parallax-world-of-ugg">
<section>
  <div className="title">
    <h3 className="h01">MULTI PLATFORM</h3>
    <h1 className="h01">AVAILABLE ON</h1>
    <div className="fade_rule"></div>
  </div>
  <div className="ava-btn">
    <a href="#" className="ava-l">APPLE PODCASTS</a>
    <a href="#" className="ava-l">SPOTIFY</a>
    <a href="#" className="ava-l">STITCHER</a>
    <a href="#" className="ava-l">GOOGLE PODCAST</a>
  </div>
</section>
</div>

{/* parallax  */}
{/* </div> */}
<div className="par">
  <div className="wrapper">
    <div className="parallax__group hero-container">
      <div className="parallax__layer bushes"></div>
      <div className="parallax__layer water"></div>
      <div className="parallax__layer people1"></div>
      </div>
  </div>


{/* slider 2  */}
<div className="s2">
  <div className="s2-he-con"><h1 className="s2-heading" id="nav01">Tour Details</h1></div>
  <div className="fade_rule"></div>
  <div className="loading_wrapper">
    <div className="loading-inner-content">
      <div className="box box-1">
        <div className="box-content">
          <div className="box-content">
            <div className="sl2-1">
              <div className="s12-1-l">
                  <h1 className="s12-d-l">13</h1>
                  <p className="s12-d-r">NOV<br/>TUE</p>
                </div>
                <div className="s12-1-r">
                  <h1>Raffaela's Palace</h1>
                  <h5>San Francisco</h5>
                  <img src="https://i.pinimg.com/236x/d9/bd/af/d9bdaffef35b239640f9b8fb4faf28e7.jpg" alt="" className="s12-1-r-d"/>
                </div>
                <img src={plane} alt="" className="plane"/>
            </div>
          </div>        
        </div>
      </div>
      <div className="box box-2">
        <div className="box-content">
          <div className="box-content">
            <div className="sl2-1">
              <div className="s12-1-l">
                  <h1 className="s12-d-l">16</h1>
                  <p className="s12-d-r">NOV<br/>FRI</p>
                </div>
                <div className="s12-1-r">
                  <h1>Denim Bar</h1>
                  <h5>Los Angeles</h5>
                  <img src="https://i.pinimg.com/236x/49/43/8f/49438fa999b98d2c49074963db3c71fa.jpg" alt="" className="s12-1-r-d"/>
                </div>
                <img src="plane.png" alt="" className="plane"/>
            </div>
          </div>        
        </div>
      </div>
      <div className="box box-3">
        <div className="box-content">
          <div className="box-content">
            <div className="sl2-1">
              <div className="s12-1-l">
                  <h1 className="s12-d-l">18</h1>
                  <p className="s12-d-r">DEC<br/>SUN</p>
                </div>
                <div className="s12-1-r">
                  <h1>Brook's Corner</h1>
                  <h5>Phoenix</h5>
                  <img src="https://i.pinimg.com/236x/0e/9b/1e/0e9b1ecf15f689c76b72742609f78170.jpg" alt="" className="s12-1-r-d"/>
                </div>
                <img src="plane.png" alt="" className="plane"/>
            </div>
          </div>        
        </div>
      </div>
      <div className="box box-4">
        <div className="box-content">
          <div className="box-content">
            <div className="sl2-1">
              <div className="s12-1-l">
                  <h1 className="s12-d-l">13</h1>
                  <p className="s12-d-r">NOV<br/>TUE</p>
                </div>
                <div className="s12-1-r">
                  <h1>Raffaela's Palace</h1>
                  <h5>San Francisco</h5>
                  <img src="https://i.pinimg.com/236x/4c/8e/24/4c8e24335f110f6abdf3f938ffabc0d0.jpg" alt="" className="s12-1-r-d"/>
                </div>
                <img src="plane.png" alt="" className="plane"/>
            </div>
          </div>        
        </div>
      </div>
      <div className="box box-5">
        <div className="box-content">
          <div className="box-content">
            <div className="sl2-1">
              <div className="s12-1-l">
                  <h1 className="s12-d-l">13</h1>
                  <p className="s12-d-r">NOV<br/>TUE</p>
                </div>
                <div className="s12-1-r">
                  <h1>Raffaela's Palace</h1>
                  <h5>San Francisco</h5>
                  <img src="https://i.pinimg.com/236x/4c/8e/24/4c8e24335f110f6abdf3f938ffabc0d0.jpg" alt="" className="s12-1-r-d"/>
                </div>
                <img src="plane.png" alt="" classNameName="plane"/>
            </div>
          </div>        
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Home