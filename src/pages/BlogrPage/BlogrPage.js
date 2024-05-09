import BlogrFooterBox from '../../components/BlogrFooterbox/BlogrFooterBox'
import BlogrHeroBox from '../../components/BlogrHeroBox/BlogrHeroBox'
import './BlogrPage.css'

const BlogrPage = () => {
  return (
    <div className="home-page-container">
        
        <BlogrHeroBox />

        <div className="home-page-introduction">
            <div className="container">
                <div className="home-page-introduction-wrapper">
                    <div className="introduction-header-wrapper">
                        <h2 className="introduction-header">Designed for the future</h2>
                    </div>
                    
                    <div className="paragraphs-wrapper">
                        <h3 className="paragraph-header">Introducing an extensible editor</h3>
                        <p className="paragraph">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                        The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                        videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                        change the looks of a blog.</p>

                        <h3 className="paragraph-header">Robust content management</h3>
                        <p className="paragraph">Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                        by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
                    </div>
                </div>
            </div>            
        </div>

        <div className="home-page-about">
            <div className="home-page-about-wrapper">
                <div className="container">
                    <div className="about-wrapper-container">
                        <div className="about-wrapper">
                            <h2 className="introduction-header">State of the Art Infrastructure</h2>
                            <p className="paragraph">With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                        </div>  
                    </div>
                </div>
            </div>
        </div>

        <div className="home-page-about2">
            <div className="container">
                <div className="about-wrapper-container2">
                    <div className="about-wrapper2">
                        <h2 className="introduction-header">Free, open, simple</h2>
                        <p className="paragraph">Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                            features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                            and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>

                        <h2 className="introduction-header">Powerful tooling</h2>
                        <p className="paragraph">Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                            capable of producing even the most complicated sites.</p>
                    </div> 
                </div>
            </div>
        </div>
        
        <div className="home-page-footer">
            <div className="container">
                <BlogrFooterBox />
            </div>
        </div>

    </div> 
  )
}

export default BlogrPage