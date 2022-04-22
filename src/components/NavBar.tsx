import React from 'react'
import { Link } from 'react-router-dom'
export const NavBar = () => {
    return (
    <nav className="navbar card is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <Link 
                to={'/'}
                className="navbar-item"
            >
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
            </Link>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">

            <a className="navbar-item">
                    Jobs
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                    More
                </a>
                <div className="navbar-dropdown">
                    <Link 
                    to={'/about'}
                    className="navbar-item"
                    >
                        About
                    </Link>                

                    <a className="navbar-item">
                        Contact
                    </a>
                    <hr className="navbar-divider"/>
                    <a className="navbar-item">
                        Report an issue
                    </a>
                </div>
            </div>
            </div>

            <div className="navbar-end">
            <div className="navbar-item">
                <div className="buttons">
                <a className="button is-primary">
                    <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                    Log in
                </a>
                </div>
            </div>
            </div>
        </div>
    </nav>)
}