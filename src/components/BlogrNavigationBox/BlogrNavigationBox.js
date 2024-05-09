import React from 'react'
import BlogrNavigationButton from '../BlogrNavigationButton/BlogrNavigationButton'

const BlogrNavigationBox = () => {
  return (
    <div className="navigation-row">
        <div className="navigation-row-left">
            <img className="logo-image" src="https://raw.githubusercontent.com/frontendmentorio/blogr-landing-page/10fa91bb10d205b335833aedb134c7a65f3b20db/images/logo.svg" alt="logo" />

            <div className="navigation-button-wrapper">

                <BlogrNavigationButton 
                    name='Product' 
                    image='https://raw.githubusercontent.com/frontendmentorio/blogr-landing-page/10fa91bb10d205b335833aedb134c7a65f3b20db/images/icon-arrow-light.svg' 
                    imageAlt='down-arrow'
                />

                <BlogrNavigationButton 
                    name='Company' 
                    image='https://raw.githubusercontent.com/frontendmentorio/blogr-landing-page/10fa91bb10d205b335833aedb134c7a65f3b20db/images/icon-arrow-light.svg' 
                    imageAlt='down-arrow'
                />

                <BlogrNavigationButton 
                    name='Connect' 
                    image='https://raw.githubusercontent.com/frontendmentorio/blogr-landing-page/10fa91bb10d205b335833aedb134c7a65f3b20db/images/icon-arrow-light.svg' 
                    imageAlt='down-arrow'
                />
                
                {/* <div className="navigation-button">
                    <span>Product</span>
                    <img src="https://raw.githubusercontent.com/frontendmentorio/blogr-landing-page/10fa91bb10d205b335833aedb134c7a65f3b20db/images/icon-arrow-light.svg" alt="down-arrow" />
                </div> */}

                {/* <div className="navigation-button">
                    <span>Company</span>
                    <img src="https://raw.githubusercontent.com/frontendmentorio/blogr-landing-page/10fa91bb10d205b335833aedb134c7a65f3b20db/images/icon-arrow-light.svg" alt="down-arrow" />
                </div> */}

                {/* <div className="navigation-button">
                    <span>Connect</span>
                    <img src="https://raw.githubusercontent.com/frontendmentorio/blogr-landing-page/10fa91bb10d205b335833aedb134c7a65f3b20db/images/icon-arrow-light.svg" alt="down-arrow" />
                </div> */}
            </div>    
        </div>

        <div className="navigation-row-right">
            <button className="login-button">Login</button>
            <button className="sign-up-button">Sign Up</button>
        </div>
    </div>
  )
}

export default BlogrNavigationBox