const MainPart = (props) => {
  return (
    <div className="home-page-about-wrapper">
        <div className="home-page-about-description-wrapper">
            <h3 className="home-page-about-header">{props.title}</h3>

            <p className="home-page-about-description">
                {props.description}
            </p>
        </div>
        <div className="home-page-about-image-wrapper">
            <img src={props.image} alt="" />
        </div>
    </div>
  )
}

export default MainPart