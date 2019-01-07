import React, { Component } from 'react';

class Socials extends Component {
    render() {
        return (
        <div className="box is-radiusless">
            <p className="title has-text-centered is-size-4 has-text-black is-uppercase">Socials</p>
            <div className="buttons">
                <span className="button">Facebook</span>
                <span className="button">Twitter</span>
                <span className="button">LinkedIn</span>
            </div>
        </div>
        )
    }
}

export default Socials;