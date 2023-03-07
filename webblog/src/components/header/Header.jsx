import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlesLg"><i className="fa-solid fa-cube"></i><br/>Welcome to Webblog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/10335133/pexels-photo-10335133.jpeg?cs=srgb&dl=pexels-kasia-palitava-10335133.jpg&fm=jpg"
        alt=""
      />
    </div>
  )
}
