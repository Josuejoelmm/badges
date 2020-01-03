import React from 'react'
import './BadgesListItem.css'

function BadgesListItem(props) {
        return(
            <li className="BadgesListItem">
                <div className="row">
                    <div className="col col-3">
                        <img className="BadgesListItem__avatar" src={`https://es.gravatar.com/avatar/${props.badge.hash}?d=identicon`} alt="avatar logo"/>
                    </div>
                    <div className="col col-9">
                        <div>
                            {props.badge.firstName} {props.badge.lastName}
                        </div>
                        <div style={{color: '#1DA1F2'}}>
                            @{props.badge.twitter}
                        </div>
                        <div>
                            {props.badge.jobTitle}
                        </div>
                    </div>
                </div>
            </li>
        )
    
}

export default BadgesListItem;