import React from "react"

import Loading from './system/Loading';
import Error from './system/Error';

// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';

const GET_PHOTOS = gql`
  query Photos {
  assets {
    id
    url(transformation: {image: {resize: {fit: crop, width: 1800, height: 1800}}})
  }}

`;
function DisplayPhotos() {
  const { loading, error, data } = useQuery(GET_PHOTOS);

  if (loading) return <Loading msg="Foto's ophalen" />
  if (error) return <Error msg="Fout met het ophalen van de foto's" />;

  return data.assets.map(({ id, url }) => (
    <li>
    <div className="uk-position-contain uk-animation-kenburns">
    {/*<!--<div class="uk-position-center uk-position-small uk-text-center uk-light uk-overlay-primary uk-padding-large">
          <h2 class="uk-margin-remove">Center</h2>
          <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
      </div>-->*/}
      <img key={id} src={url} loading="lazy" alt="" uk-cover />
    </div>
  </li>
  ));
}





export default function slideshow(props) {
    
  return (
    <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" data-uk-slideshow="animation: fade; autoplay: true">

    <ul className="uk-slideshow-items">
    <DisplayPhotos />
    </ul>

</div>

  )
}