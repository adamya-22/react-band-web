import React from 'react'

import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.png'
import blog4 from '../assets/blog4.png'
import blog5 from '../assets/blog5.png'

import '../styles/blog.css'

const Blog = () => {
  return (
    <>
    <section class="blog-body blog-section">
    <div class="blog-top">
        <h1 class="blog-heading"> Our <span>Blogs</span> </h1>
      </div>
       <section class="blog-features blog-section" id="blog-features">

       
    
        <div class="blog-box-container">
        <div class="blog-box">
                <img src={blog1} alt="multipledevices"/>
                <h3>Free Games for New Musicians to break into the Industry</h3>
                <a href="https://medium.com/saucefromvelitv/freegame-for-new-musicians-looking-to-break-in-the-industry-71a4b9181bce" class="blog-btn">Read Now</a>
            </div>
    
            <div class="blog-box">
                <img src={blog2} alt="savings"/>
                <h3>Hiring a Musician...? Know all you need to! </h3>
                <a href="https://medium.com/@jointwine/5-things-you-should-know-before-hiring-a-musician-19418493508f" class="blog-btn">Read Now</a>
            </div>
    
            <div class="blog-box">
                <img src={blog3} alt=""/>
                <h3>Follow the best music industry accounts</h3>
                <a href="https://medium.com/@dashhudson/the-best-music-industry-accounts-to-follow-on-instagram-8a08ec45be5e" class="blog-btn">Read Now</a>
            </div>
        </div> <br/>  
        <div class="blog-box-container">
            <div class="blog-box">
                <img src={blog4} alt=""/>
                <h3>A day in the life of SLAM</h3>
                <a href="https://medium.com/disco-blog/a-day-in-the-life-of-slam-radios-music-director-6fe281637fc4" class="blog-btn">Read Now</a>
            </div>
            <div class="blog-box">
                <img src={blog5} alt="savings"/>
                <h3>How big is music on YouTube</h3>
                <a href="https://medium.com/multipex/how-big-is-music-on-youtube-5fb7cc5d3f77" class="blog-btn">Read Now</a>
            </div>
    
        </div>
        </section>
        </section>
    </>
  )
}

export default Blog