import blog1_image from './blog_posts/images/blog_1.png';
import blog2_image from './blog_posts/images/blog_2.png';
import blog3_image from './blog_posts/images/blog_3.png';

function Blog() {

    return (
      <div className='blogs'>
        <div className='blogs-title'>Blog Posts</div>

        <div className='blog-wrapper'>
          <div className='blog'>
            <div className='blog-title'>Anime I'm Currently Watching This <span>Fall 2023</span></div>
            
            <div className='date'>November 9, 2023</div>
            
            <img src={blog3_image} />

            <div className="continue-reading-button">
              <a href="/blog/3" className="continue-reading-button">Read <i class="fa-solid fa-arrow-right"></i></a><br /><br />
            </div>
          </div>

          <div className='blog'>
            <div className='blog-title'>Anime I'm Currently Watching This <span>Summer 2023</span></div>
            
            <div className='date'>August 3, 2023</div>
            
            <img src={blog2_image} />

            <div className="continue-reading-button">
              <a href="/blog/2" className="continue-reading-button">Read <i class="fa-solid fa-arrow-right"></i></a><br /><br />
            </div>
          </div>

          <div className='blog'>
            <div className='blog-title'>Anime I'm Currently Watching This <span>Spring 2023</span></div>
            
            <div className='date'>May 27, 2023</div>
            
            <img src={blog1_image} />

            <div className="continue-reading-button">
              <a href="/blog/1" className="continue-reading-button">Read <i class="fa-solid fa-arrow-right"></i></a><br /><br />
            </div>
          </div>
        </div> 
      </div>
    )
  }
  
  export default Blog