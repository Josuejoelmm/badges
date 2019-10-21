import React from 'react'
import './styles/NotFound.css'
import astronautsImage from '../images/astronauts.svg'
import NotFoundImage from '../images/platziconf-logo.svg'

function NotFound() {
    return(
        <div className="container-fluid not-found-container">
            <div className="row">
                <div className="col-6">
                    <img src={NotFoundImage} alt="logo platzi" />
                </div>
                <div className="col-6">
                    <img src={astronautsImage} alt="Astronauts" />
                </div>
            </div>
        </div>
    )
}

export default NotFound;
