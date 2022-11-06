import React from "react"

export default function Error(props) {

  return (
    <div class="uk-alert-danger uk-padding-small uk-margin-small-top uk-width-1-1" uk-alert-warning>
        {props.msg}
    </div>
  )
}