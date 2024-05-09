export default function HeroBox(){
    return (
        <div className="home-page-header-tab">
          <div className="container">
              <div className="home-page-header-wrapper">
                  <div className="home-page-header-top-row">
                      <img className="logo-image" src="https://raw.githubusercontent.com/frontendmentorio/huddle-landing-page-with-alternating-feature-blocks/f3ddf831a7905102f493a03a65b8f70e4df46211/images/logo.svg" alt="logo" />
                      <button className="try-it-free-button">Try It Free</button>
                  </div>

                  <div className="home-page-header-description-wrapper">
                      <h1 className="home-page-shout">Build The Community Your Fans Will Love</h1>

                      <p className="home-page-header-description">
                          Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
                          Create connections with your users as you engage in genuine discussion.
                      </p>

                      <button className="get-started-for-free-button">Get Started For Free</button>
                  </div>
              </div>    
          </div>
        </div>
    )
}