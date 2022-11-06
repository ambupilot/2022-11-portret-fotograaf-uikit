import React from "react"

export default function slideshow(props) {
    
  return (
    <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" data-uk-slideshow="animation: fade; autoplay: true">

    <ul className="uk-slideshow-items">
        <li>
          <div className="uk-position-cover uk-animation-kenburns">
          <div class="uk-position-center uk-position-small uk-text-center uk-light uk-overlay-primary uk-padding-large">
                <h2 class="uk-margin-remove">Center</h2>
                <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
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