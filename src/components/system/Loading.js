import React from "react"

export default function Loading(props) {

  return (
    <div class="uk-alert-primary uk-padding-small uk-margin-small-top uk-width-1-1" uk-alert>
        {props.msg}
    </div>
  )
}