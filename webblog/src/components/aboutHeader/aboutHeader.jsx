import "./aboutheader.css"

export default function aboutHeader() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlesLg">About Webblog  <i className="fa-solid fa-cube"></i></span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/10335133/pexels-photo-10335133.jpeg?cs=srgb&dl=pexels-kasia-palitava-10335133.jpg&fm=jpg"
        alt=""
      />
    </div>
  )
}
