import React from 'react'
import "./Nav.css"

const Nav = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    <img src="./rcf.png" width="45" height="45" class="d-inline-block align-top" alt="" />
                    Welcome To TCET❤️
                </a>


                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
        </>
    )
}

export default Nav