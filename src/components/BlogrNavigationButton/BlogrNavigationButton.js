const BlogrNavigationButton = (props) => {
  return (
    <div className="navigation-button">
        <span>{props.name}</span>
        <img src={props.image} alt={props.imageAlt} />
    </div>
  )
}

export default BlogrNavigationButton