import React from 'react'

export default function Gravatar(props) {
    return(
        <img 
            className={props.className} 
            src={`https://es.gravatar.com/avatar/${props.hash}?d=identicon`}
            alt=""
        />
    );
}