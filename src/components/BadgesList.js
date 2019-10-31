import React, { Component } from 'react'
import './BadgesList.css'
import { Link } from 'react-router-dom'
import BadgesListItem from './BadgesListItem'

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
                        <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                            <BadgesListItem badge={badge} />
                        </Link>
                    )
                })}
            </ul>
        )
    }
}
