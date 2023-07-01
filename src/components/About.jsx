import React from 'react'
import '../styles/about.css'
import member1 from '../assets/Member1.jpg'
import member2 from '../assets/member2.jpg'
import member3 from '../assets/member3.jpg'
import member4 from '../assets/member4.jpg'
import member5 from '../assets/member5.png'
import member6 from '../assets/member6.png'

import certificate from '../assets/certificate.jpeg'
import billboard from '../assets/billboard.jpeg'
import world_tour from '../assets/world_tour.jpeg'
import award from '../assets/award.jpeg'


const About = () => {
  return (
    <>
    <div className="about-body">
    <section id="history" class="parallax-section">
            <div class="about-container">
              <h2 class="section-heading">Our History</h2>
              <div class="history-box">
                <div class="history-content">
                  <p>Founded in 2005, our band has undergone a remarkable musical journey, marked by growth, experimentation, and a steadfast commitment to our craft. From our humble beginnings playing small venues, we quickly captivated audiences with our electrifying live performances and infectious melodies. Inspired by a diverse range of influences, we seamlessly blended rock, pop, folk, and alternative genres to create a sound that is uniquely our own.</p>
                  <p>As the years unfolded, we ventured into uncharted territories, constantly pushing the boundaries of our music. Our early releases captured the raw energy of our live shows, while later albums showcased a more refined and mature sound. With each song, we aimed to convey authentic emotions and tell compelling stories that resonated with our listeners. From personal triumphs and heartaches to social issues and universal experiences, our lyrics explored the human condition in all its complexity.</p>
                  <p>Looking ahead, we are thrilled to embark on the next phase of our musical odyssey. We're eager to explore new sonic landscapes, push our creative boundaries, and create music that will leave a lasting impact. We invite you to join us on this exciting adventure as we continue to evolve, connect, and make our mark in the world of music. Together, let's celebrate the transformative power of sound and create unforgettable moments that will resonate for years to come. </p>
                </div>
              </div>
              </div>
          </section>
          
          
          <br/><br/>
          <section class="team">
            <div class="about-container">
              <h2 class="section-heading">Our Team</h2>
              <br/><br/>
              <div class="team-grid">
                <div class="team-member">
                  <img src={member1} alt="Member 1"/>
                  <div class="member-info">
                    <h3>Avan "Siren Vocals" Thompson </h3>
                    <p>Role: Lead Vocalist</p>
                    <p>Avan's mesmerizing voice captivates listeners with its range, power, and emotional resonance. From gentle whispers to soaring high notes, his vocals can convey raw vulnerability or unleash a fierce intensity. With his magnetic stage presence, he effortlessly connects with the audience, taking them on an unforgettable musical journey.</p>
                  </div>
                </div>
                <div class="team-member">
                  <img src={member2} alt="Member 2"/>
                  <div class="member-info">
                    <h3>Ethan "Thunderbeat" Johnson </h3>
                    <p>Role: Drummer</p>
                    <p>Known for his lightning-fast beats and impeccable rhythm, Ethan is the heartbeat of the band. With his dynamic drumming style, he brings a powerful energy to every performance, driving the band forward and setting the stage ablaze with his thunderous beats.</p>
                  </div>
                </div>
                <div class="team-member">
                  <img src={member3} alt="Member 3"/>
                  <div class="member-info">
                    <h3>Sophia "Keys Enchantress" Thompson</h3>
                    <p>Role: Pianist</p>
                    <p>Sophia's mesmerizing piano skills bring elegance and versatility to the band. Her nimble fingers effortlessly create beautiful melodies and intricate harmonies, evoking deep emotions. With her soulful playing and intuitive understanding of music, Sophia adds a lush backdrop and elevates the band's performances to new heights.</p>
                  </div>
                </div>
                <div class="team-member">
                  <img src={member4} alt="Member 4"/>
                  <div class="member-info">
                    <h3>Alex "Blaze" Martinez </h3>
                    <p>Role: Lead Guitarist </p>
                    <p>Alex's scorching guitar skills ignite the stage with his electrifying presence. His blistering solos and captivating riffs command attention, showcasing his raw talent and boundless energy. With his charismatic stage persona, Alex brings an undeniable rockstar vibe to the band, adding an explosive element to their sound.</p>
                  </div>
                </div>
                <div class="team-member">
                  <img src={member5} alt="Member 5"/>
                  <div class="member-info">
                    <h3>Lily "Bass Groove" Davis </h3>
                    <p>Role: Bassist</p>
                    <p>Lily's deep and groovy basslines form the backbone of the band's sound. With her impeccable sense of rhythm and infectious energy, she lays down the foundation that drives the music forward. Her mastery of the bass guitar brings a dynamic and captivating element to the band's performances.</p>
                  </div>
                </div>
                <div class="team-member">
                  <img src={member6} alt="Member 6"/>
                  <div class="member-info">
                    <h3>Max "Sonic Wizard" Lee</h3>
                    <p>Role: Keyboardist</p>
                    <p>Max's wizardry on the keyboard adds a touch of magic to the band's sound. His mastery of intricate melodies, ethereal pads, and captivating synth sounds create a sonic landscape that transports listeners to another realm. With his creative and innovative approach to music, Max pushes boundaries and elevates the band's performances to new heights.</p>
                  </div>
                </div>
              </div>
              </div>
          </section>

          <br/><br/><br/>
          {/* <section class="milestone">

            <h1 class="section-heading"> Our<span> Milestones</span> </h1>
        
            <div class="swiper milestone-slider">
        
                <div class="swiper-wrapper">
        
                    <div class="swiper-slide ab-box">
                        <img src={certificate} alt="certificate"/>
                        <h3>Platinum Certification</h3>
                        <p>"Our debut album achieved platinum certification, selling over 1 million copies worldwide. The overwhelming support from our fans propelled us to new heights, and we are grateful for their unwavering enthusiasm."</p>
                    </div>
        
                    <div class="swiper-slide ab-box">
                        <img src={billboard} alt="Billboard"/>
                        <h3>Billboard Top 10</h3>
                        <p>"Our hit single climbed the Billboard charts, securing a spot in the prestigious Top 10. This recognition showcased the power of our music and the connection we've established with our audience." </p>
                    </div>
        
                    <div class="swiper-slide ab-box">
                        <img src={world_tour} alt="sold-out world_tour"/>
                        <h3>Sold-Out World Tour</h3>
                        <p>"Our highly anticipated world tour witnessed sold-out arenas and passionate fans across the globe. Performing in iconic venues and vibrant cities, we experienced the incredible demand for our music firsthand."</p>
                    </div>
        
                    <div class="swiper-slide ab-box">
                        <img src={award} alt="award"/>
                        <h3>Emerging Artist of the Year</h3>
                        <p>"We were honored with the "Emerging Artist of the Year" award, recognizing our unique sound, artistic growth, and the impact we've made. This accolade is a testament to the dedication of our team and the unwavering support of our fans."</p>
                    </div>
                  </div>
                </div>
        </section> */}
        </div>
    </>
  )
}

export default About