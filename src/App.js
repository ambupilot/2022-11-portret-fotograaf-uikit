import React from 'react';
import { Helmet } from 'react-helmet-async';

import Loading from './components/system/Loading';
import Error from './components/system/Error';

import Slideshow from './components/Slideshow';
import Mainmenu from './components/MainMenu';
import Gridbox from './components/GridBox';

// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';
import Manimenu from './components/MainMenu';

const GET_POSTS = gql`
  query Posts {
  posts {
    id
    title
    subTitle
  }
  }
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <Loading msg="Data ophalen van de server" />
  if (error) return <Error msg="Fout met het ophalen van de data" />;

  return data.posts.map(({ id, title, subTitle }) => (
    <div key={id} className="uk-width-1-2">
        <div class="uk-card uk-card-default uk-card-body">
        <h3 class="uk-card-title">{title}</h3>
        <p>{subTitle}</p>
    </div>
    </div>

  ));
}


function App() {
  return (

    <div>
 <Helmet>
<title>Martijn Kerssing</title>
<meta name='description' content='Portret Fotograaf' />
</Helmet>


<Slideshow />
<Mainmenu />


<div class="uk-text-center" data-uk-grid>
      <DisplayLocations />
    </div>
<Gridbox />

</div>
  );
}

export default App;