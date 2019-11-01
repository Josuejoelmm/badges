import React from 'react'
import './styles/NotFound.css'
import astronautsImage from '../images/astronauts.svg'
import NotFoundImage from '../images/platziconf-logo.svg'
import { Link } from 'react-router-dom'

function NotFound() {
    return(
        <div className="container-fluid not-found-container">
            <div className="row">
                <div className="col-6">
                    <figure>
                        <img src={NotFoundImage} alt="logo platzi" />
                    </figure>
                    <h1>PRINT YOUR BADGES</h1>
                    <h5>The easiest way to manage your conference</h5>
                    <Link to='/badges' className="btn btn-primary">Start now</Link>
                </div>
                <div className="col-6">
                    <figure>
                        <img src={astronautsImage} alt="Astronauts" />
                    </figure>
                    
                </div>
            </div>
        </div>
    )
}

export default NotFound;
