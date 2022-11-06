import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faEnvelope} />

export default function Loading(props) {

  return (
    <div class="uk-alert-primary uk-padding-small uk-margin-small-top uk-width-1-1" uk-alert>
        {props.msg}
    </div>
  )
}