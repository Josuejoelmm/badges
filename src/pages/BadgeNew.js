import React from 'react'
import Navbar from '../components/Navbar'
import header from '../images/badge-header.svg'
import './BadgeNew.css'
import Badge from '../components/Badge'

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName="Josue"
                                lastName="Mendez"
                                jobTitle="Frontend Developer"
                                twitter="josuejoelmm"
                                avatarUrl="https://lh3.googleusercontent.com/-mHUdgp2DzEY/XQE3n4bqheI/AAAAAAAADNg/4Uq-RTsaSmgA2Ky5KC7cAJQtBK1kI0LmQCEwYBhgL/w140-h140-p/2019-06-12.jpg"
                            />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default BadgeNew;