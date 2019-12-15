import React from 'react';

export default function test(props){
    var url = "https://maps.google.com/?q=" + props.location[0] + "," + props.location[1];
    return (
        <div className='well'>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <a className="btn btn-primary" href={url}>See in Google Maps!</a>
        </div>
    )
}