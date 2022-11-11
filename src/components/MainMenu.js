import React from "react"

import Loading from './system/Loading';
import Error from './system/Error';

// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';

const GET_MENUITEMS = gql`
  query MainMenuItems {
  mainMenuItems {
    id
    link
    titel
  }
}

`;
function DisplayMainMenuItems() {
  const { loading, error, data } = useQuery(GET_MENUITEMS);

  if (loading) return <Loading msg="Menu items ophalen" />
  if (error) return <Error msg="Fout met het ophalen van de menu items" />;

  return data.mainMenuItems.map(({ id, link, titel }) => (
    <li key={id}><a href={link}>{titel}</a></li>
  ));
}




export default function Mainmenu(props) {

  return (
    <div className="uk-position-top">
        <nav className="uk-navbar-container uk-navbar mk-navbar" data-uk-navbar>
            <div className="uk-navbar-right mk-nav-item">
                <ul className="uk-navbar-nav">
                    <DisplayMainMenuItems />
                </ul>
            </div>
        </nav>
    </div>

  )
}