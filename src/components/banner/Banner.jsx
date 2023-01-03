import './Banner.scss'

export default function banner(props) {
  return (
    <div className="banner">
      <img
        className="banner__imghome background"
        src={props.src}
        alt={props.alt}
      />
      <div className="banner__overlay background"></div>
      <h1>{props.text}</h1>
    </div>
  )
}
