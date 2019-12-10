import React from 'react';
import './Badge.css'
import configLogo from '../images/badge-header.svg'
import Gravatar from '../components/Gravatar'
import md5 from 'md5'

class Badge extends React.Component {
    
    render() {
        const avatarHash = md5(this.props.email);
        return(
            <div className="Badge">
                <div className="Badge__header">
                    <img src={configLogo} alt="Logo de la conferencia" />
                </div>
                <div className="Badge__section-name">
                    <Gravatar 
                        className="Badge__avatar" 
                        hash={avatarHash} 
                    />
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