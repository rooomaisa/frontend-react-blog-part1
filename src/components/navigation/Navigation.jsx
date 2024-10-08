import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.css'

function Navigation() {
    return (

            <nav className={'main-navigation outer-content-container'}>
                <div className={'inner-nav-container'}>
                    <ul className={'main-navigation-links'}>
                <li><NavLink to={'/'}
                             className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                    Home</NavLink>
                </li>
                <li><NavLink to={'/posts'}
                             className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                    All posts</NavLink></li>
                <li><NavLink to={'/newpost'}
                             className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                    Make new post</NavLink></li>
                    </ul>
                </div>
            </nav>

    );
}

export default Navigation;