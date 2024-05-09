import BlogrNavigationBox from '../BlogrNavigationBox/BlogrNavigationBox'

const BlogrHeroBox = () => {
  return (
    <div className="home-page-navigation">
        <div className="container">
            <div className="home-page-navigation-wrapper">
                
                <BlogrNavigationBox />

                <div className="home-page-header">
                    <div className="header-wrapper">
                        <h1 className="main-header">A modern publishing platform</h1>
                        <p className="slogan">Grow your audience and build your online brand</p>
                    </div>

                    <div className="header-buttons-wrapper">
                        <button className="start-button">Start for Free</button>
                        <button className="info-button">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogrHeroBox