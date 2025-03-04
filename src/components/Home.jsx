// import { useState } from 'react'
import home_image from '../images/albedo.png';

function Home() {

  return (
    <div className='home'>
      <div className='home-welcome-message'>
        Hi There!<br />
        I'm <span><b>Ralvinc</b></span><br /><br />

        <b><span>Newbie Coder<br />
        Avid Anime watcher</span> &<span><br />
        Manga/Light Novel reader</span></b>
      </div>

      <div className='home-introduction-wrapper'>
        <img src={home_image} className='home-introduction-image' />

        <div className='home-introduction'>
          <div className='title'>Embrace the unknown, <span>learn and grow.</span></div><br />

          With a <span>strong dedication to continuous learning</span>, always on the lookout for new challenges and opportunities for personal growth.<br /><br />

          <div className='quote'>"Learning never exhausts the mind."<br />
          - Leonardo da Vinci</div>
        </div>
      </div>
    </div> 
  )
}

export default Home
