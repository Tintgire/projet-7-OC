import './Banner.scss'

export default function banner({ src, alt, text }) {
  return (
    <div className="banner">
      <img className="banner__imghome background" src={src} alt={alt} />
      <div className="banner__overlay background"></div>
      {!text ? '' : <h1>{text}</h1>}
    </div>
  )
}
