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

</div>

  )
}