import React from 'react'
import './PageError.css'

export default function PageError(props) {
    console.log(props)
    return(
        <div className="PageError">{props.error}</div>
    );
}