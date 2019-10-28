import React, { Component } from 'react'
import './BadgesList.css'
import { Link } from 'react-router-dom'

export default class BadgesList extends Component {
    render() {
        if (this.props.badges.length === 0) {
            return(
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new badge
                    </Link>
                </div>
            );
        }

        return (
            <ul className="list-unstyled">
                {this.props.badges.map(badge => {
                    return (
                        <li className="BadgesListItem" key={badge.id}>
                            <div className="row">
                                <div className="col col-3">
                                    <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt="avatar logo"/>
                                </div>
                                <div className="col col-9">
                                    <div>
                                        {badge.firstName} {badge.lastName}
                                    </div>
                                    <div style={{color: '#1DA1F2'}}>
                                        @{badge.twitter}
                                    </div>
                                    <div>
                                        {badge.jobTitle}
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}
