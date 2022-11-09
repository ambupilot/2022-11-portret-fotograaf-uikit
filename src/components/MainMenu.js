import React from "react"

export default function Mainmenu(props) {

  return (
    <div class="uk-position-top">
        <nav class="uk-navbar-container uk-navbar mk-navbar" uk-navbar>
            <div class="uk-navbar-right mk-nav-item">
                <ul class="uk-navbar-nav">
                    <li class="uk-active"><a href="#een">Link een</a></li>
                    <li><a href="#twee">Link twee</a></li>
                </ul>
            </div>
        </nav>
    </div>

  )
}