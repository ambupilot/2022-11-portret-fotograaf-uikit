import React from "react"

export default function slideshow(props) {
    
  return (
    <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" data-uk-slideshow="animation: fade; autoplay: true">

    <ul className="uk-slideshow-items">
        <li>
          <div className="uk-position-cover uk-animation-kenburns">
            <img src="https://getuikit.com/docs/images/photo.jpg" loading="lazy" alt="" uk-cover />
          </div>
        </li>
        <li>
        <div className="uk-position-cover uk-animation-kenburns">
            <img src="https://getuikit.com/docs/images/dark.jpg" loading="lazy" alt="" uk-cover />
            </div>
        </li>
        <li>
        <div className="uk-position-cover uk-animation-kenburns">
            <img src="https://getuikit.com/docs/images/light.jpg" loading="lazy" alt="" uk-cover />
            </div>
        </li>
    </ul>

    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>

  )
}