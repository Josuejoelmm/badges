import React from 'react'
import confLogo from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import { Link } from 'react-router-dom'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

export default function BadgeDetails(props) {
        return (
            <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 jm-center">
                                <img className="logo-conference" src={confLogo} alt="Logo de la conferencia" />
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name jm-center">
                                <h1>{props.badge.firstName} {props.badge.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container main-container">
                    <div className="row">
                        <div className="col col-9">
                            <Badge 
                                firstName={props.badge.firstName} 
                                lastName={props.badge.lastName}
                                email={props.badge.email}
                                twitter={props.badge.twitter}
                                jobTitle={props.badge.jobTitle}
                            />
                        </div>
                        <div className="col col-3">
                            <h3 className="jm-txt-center">Actions</h3>
                            <div>
                                <div className="jm-center">
                                    <Link className="btn btn-primary mb-4" to={`/badges/${props.badge.id}/edit`}>
                                        Edit
                                    </Link>
                                </div>

                                <div className="jm-center">
                                    <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                                    <DeleteBadgeModal 
                                        onClose={props.onCloseModal} 
                                        isOpen={props.modalIsOpen}
                                        onDeleteBadge={props.onDeleteBadge}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}
