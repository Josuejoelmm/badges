import React from 'react';
import './Badge.css'
import configLogo from '../images/badge-header.svg'

class Badge extends React.Component {
    render() {
        return(
            <div className="Badge">
                <div className="Badge__header">
                    <img src={configLogo} alt="Logo de la conferencia" />
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://lh3.googleusercontent.com/-mHUdgp2DzEY/XQE3n4bqheI/AAAAAAAADNg/4Uq-RTsaSmgA2Ky5KC7cAJQtBK1kI0LmQCEwYBhgL/w140-h140-p/2019-06-12.jpg" alt="Avatar" />
                    <h1>{this.props.firstName} <br/> 
                        {this.props.lastName}
                    </h1>
                </div>
                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.twitter}</div>
                </div>
                <div className="Badge__footer">
                    #platziconfig
                </div>
            </div>
        )
    }
}

export default Badge;