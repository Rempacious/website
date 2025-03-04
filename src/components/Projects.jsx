import project0_image from '../images/ggts.png';
import project1_image from '../images/anisongs.png';
import project2_image from '../images/mylist.png';
import project3_image from '../images/my-website.png';
import project4_image from '../images/anisongs-program.png';

function Projects() {

    return (
      <div className='projects'>
        <div className='projects-title'>My Coding Projects</div>

        <div className='projects-wrapper'>
          <div className="project">
            <img src={project4_image} />

            <div className='project-links'>
              <a href="https://github.com/ralvinc/anisongs-program" target="_blank">Code</a>
            </div>

            This program is the <span><b>Python-ified, improved version of the Anisongs web application</b></span>, which further simplifies adding anime themes to a user's YouTube playlist. Instead of redirecting to a YouTube page displaying the search results, this program uses <span>OAuth</span> for user authentication and the <span>YouTube Data API</span> to directly add the desired video to the user's desired YouTube playlist. It eliminates extra steps and enables immediate playlist management.<br /><br />

            Built with: <span>Python</span>
          </div> 

          <div className="project">
            <img src={project3_image} />

            <div className='project-links'>
              <a href="https://github.com/ralvinc/my-website" target="_blank">Code</a>
              <a href="https://my-website-ralvinc.vercel.app/" target="_blank">Demo</a>
            </div>

            This is my <span><b>personal website</b></span> where I give a brief introduction about myself along with a display of the coding projects I worked on. Additionally, it serves as a platform to share my personal thoughts and experiences related to anime.<br /><br />

            Built with: <span>HTML</span> | <span>CSS</span> | <span>Javascript (React)</span>
          </div>

          <div className="project">
            <img src={project2_image} />

            <div className='project-links'>
              <a href="https://github.com/ralvinc/mylist" target="_blank">Code</a>
            </div>

            <b><span>MyList</span></b> is a website that enables 
            users to manage their watch/readlist easily. Users can conveniently create new list items, specifying a name, note, action (watch, read, or both), and completion status for each entry. It also provides user authentication and the functionality to 
            read, update, and delete items from the list. <br /><br />

            Built with: <span>HTML</span> | <span>CSS</span> | <span>Python (Django)</span>
          </div> 

          <div className="project">
            <img src={project1_image} />

            <div className='project-links'>
              <a href="https://github.com/ralvinc/anisongs" target="_blank">Code</a>
              <a href="https://ralvinc.github.io/anisongs/" target="_blank">Demo</a>
            </div>

            <b><span>Anisongs</span></b> is a web application that provides an instant display of anime themes upon searching for an anime. By clicking on a title, it automatically redirects  to a Youtube page with search results for that specific theme. From there, the user can easily select a video and add it to their playlist.<br /><br />

            Built with: <span>HTML</span> | <span>CSS</span> | <span>Javascript (React)</span>
          </div> 

          <div className="project">
            <img src={project0_image} />

            <div className='project-links'>
              <a href="https://github.com/ralvinc/ggts" target="_blank">Code</a>
              <a href="https://ralvinc.github.io/ggts/" target="_blank">Demo</a>
            </div>

            This is my very first website, created to serve as the <b><span>test website for GetGood Tutorial Services (GGTS)</span></b>. Through this website, visitors can learn a bit about GGTS, find answers to commonly asked questions, and easily locate contact details for further inquiries.<br /><br />

            Built with: <span>HTML</span> | <span>CSS</span> | <span>Bootstrap</span>
          </div>  
        </div>
      </div>
    )
  }
  
  export default Projects