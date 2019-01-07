import React, { Component } from 'react';
import avatar from '../images/avatar.png';

class Bio extends Component {
    render() {
        return(
        <div>
            <figure className="image is-256x256 is-centered">
                <img className="is-rounded" src={avatar} />
            </figure>
            <br />
            <p className="subtitle has-text-centered has-text-white is-size-2 is-uppercase"> Jerry Trujillo</p>
            <br />
            <div className="content">
                <blockquote className="has-text-black">Web-Developer</blockquote>
            </div>
        </div>
        )
    }
}

export default Bio;
