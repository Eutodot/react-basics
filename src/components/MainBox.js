import MainPart from "./MainPart"

function MainBox(){
    return (
        <div className="home-page-about-tab">
          <div className="container">
              <div className="home-page-about-tabs-wrapper">
                  {/* <div className="home-page-about-wrapper">
                      <div className="home-page-about-description-wrapper">
                          <h3 className="home-page-about-header">Grow Together</h3>

                          <p className="home-page-about-description">
                              Generate meaningful discussions with your audience and build a strong, loyal community. 
                              Think of the insightful conversations you miss out on with a feedback form. 
                          </p>
                      </div>
                      <div className="home-page-about-image-wrapper">
                          <img src="https://raw.githubusercontent.com/frontendmentorio/huddle-landing-page-with-alternating-feature-blocks/f3ddf831a7905102f493a03a65b8f70e4df46211/images/illustration-grow-together.svg" alt="" />
                      </div>
                  </div> */}
                  <MainPart title="Grow Together" description="Generate meaningful discussions with your audience and build a strong, loyal community. 
                              Think of the insightful conversations you miss out on with a feedback form. " image="https://raw.githubusercontent.com/frontendmentorio/huddle-landing-page-with-alternating-feature-blocks/f3ddf831a7905102f493a03a65b8f70e4df46211/images/illustration-grow-together.svg"/>
                  <MainPart title="Flowing Conversations" description="You wouldn't paginate a conversation in real life, so why do it online? Our threads 
                              have just-in-time loading for a more natural flow." image="https://raw.githubusercontent.com/frontendmentorio/huddle-landing-page-with-alternating-feature-blocks/f3ddf831a7905102f493a03a65b8f70e4df46211/images/illustration-flowing-conversation.svg"/>
                  <MainPart title="Your Users" description="It takes no time at all to integrate Huddle with your app's authentication solution. 
                              This means, once signed in to your app, your users can start chatting immediately." image="https://raw.githubusercontent.com/frontendmentorio/huddle-landing-page-with-alternating-feature-blocks/f3ddf831a7905102f493a03a65b8f70e4df46211/images/illustration-your-users.svg"/>
                  
                  
                  {/* <div className="home-page-about-wrapper">
                      <div className="home-page-about-description-wrapper">
                          <h3 className="home-page-about-header">Flowing Conversations</h3>

                          <p className="home-page-about-description">
                              You wouldn't paginate a conversation in real life, so why do it online? Our threads 
                              have just-in-time loading for a more natural flow.
                          </p>
                      </div>
                      <div className="home-page-about-image-wrapper">
                          <img src="https://raw.githubusercontent.com/frontendmentorio/huddle-landing-page-with-alternating-feature-blocks/f3ddf831a7905102f493a03a65b8f70e4df46211/images/illustration-flowing-conversation.svg" alt="" />
                      </div>
                  </div> */}


                  {/* <div className="home-page-about-wrapper">
                      <div className="home-page-about-description-wrapper">
                          <h3 className="home-page-about-header">Your Users</h3>

                          <p className="home-page-about-description">
                              It takes no time at all to integrate Huddle with your app's authentication solution. 
                              This means, once signed in to your app, your users can start chatting immediately.
                          </p>
                      </div>
                      <div className="home-page-about-image-wrapper">
                          <img src="https://raw.githubusercontent.com/frontendmentorio/huddle-landing-page-with-alternating-feature-blocks/f3ddf831a7905102f493a03a65b8f70e4df46211/images/illustration-your-users.svg" alt="" />
                      </div>
                  </div>   */}
              </div>
          </div>
        </div>
    )
}

export default MainBox