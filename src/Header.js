import React from 'react';
import { useDataLayerValue } from './DataLayer'

import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import './Header.css';

function Header() {
    const [{ user }, dispatch] = useDataLayerValue()
    console.log(user && user);
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input placeholder="Search for Artists, Songs or Podcasts" />
            </div>
            <div className="header__right">
                <Avatar src={user && user.images[0].url} alt={user && user.display_name} />
                <h4>{user && user.display_name}</h4>
            </div>
        </div>
    )
}

export default Header